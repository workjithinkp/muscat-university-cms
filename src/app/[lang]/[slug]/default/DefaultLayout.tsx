import React from 'react'
import { PageData, PageSection } from '@/lib/api'
import SectionRenderer from './SectionRenderer'
import InternationalSubmenu, { SubmenuItem } from './sections/InternationalSubmenu'
import NavbarSection from '@/components/layout/nav'

interface DefaultLayoutProps {
    page: PageData
    lang: string
}

type SectionWithAnchor = PageSection & { anchorId?: string; menuLabel?: string }

function slugifyLabel(label: string, index: number) {
    const base = label
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
    if (base) return base
    return `section-${index + 1}`
}

function attachAnchors(sections: PageSection[]): SectionWithAnchor[] {
    return sections.map((section, index) => {
        const menuLabel =
            section.block?.c_12 ||
            section.block?.c_1 ||
            section.section?.section ||
            section.page_section_name ||
            `Section ${index + 1}`
        return {
            ...section,
            menuLabel,
            anchorId: slugifyLabel(menuLabel, index),
        }
    })
}

function sortSections(sections?: PageSection[] | null) {
    return [...(sections || [])].sort((a, b) => {
        const aSort = a.section_sort ?? 0
        const bSort = b.section_sort ?? 0
        return aSort - bSort
    })
}

function splitBanner(sections: SectionWithAnchor[]) {
    const bannerIndex = sections.findIndex(
        (section) => section.section?.template === 'international-banner'
    )
    if (bannerIndex === -1) return { banner: null, rest: sections }

    const banner = sections[bannerIndex]
    const rest = sections.filter((_, idx) => idx !== bannerIndex)
    return { banner, rest }
}

function buildSubmenuItems(sections: SectionWithAnchor[]): SubmenuItem[] {
    // Only add sections that should be in the menu
    // Filter out decorative sections or those without meaningful titles if needed
    return sections
        .filter((section) =>
            section.section?.template !== 'international-banner' &&
            section.block?.c_1 // Only include if it has a title/label
        )
        .map((section) => ({
            label: section.menuLabel || 'Section',
            href: `#${section.anchorId}`,
        }))
}

export default function DefaultLayout({ page, lang }: DefaultLayoutProps) {
    const orderedSections = sortSections(page.sections)
    const sectionsWithAnchors = attachAnchors(orderedSections)
    const { banner, rest } = splitBanner(sectionsWithAnchors)
    const submenuItems = buildSubmenuItems(rest)
    const showSubmenu = page.under_banner_menu === 1

    return (
        <main className="min-h-screen">
            <NavbarSection />

            <div className="flex flex-col">
                {/* Banner Section */}
                {banner && <SectionRenderer section={banner} page={page} lang={lang} />}

                {/* Submenu */}
                {showSubmenu && submenuItems.length > 0 && (
                    <InternationalSubmenu items={submenuItems} />
                )}

                {/* Rest of Sections - Wrapper with IDs for scrolling */}
                {rest.map((section) => (
                    <div key={section.id || section.section_sort} id={section.anchorId}>
                        <SectionRenderer section={section} page={page} lang={lang} />
                    </div>
                ))}
            </div>

        </main>
    )
}
