import { fetchPageBySlug, ensureCourseTemplate, ensureFacultyTemplate } from '@/lib/api'
import { notFound } from 'next/navigation'
import CourseLayout from './course/CourseLayout'
import FacultyLayout from './faculty/FacultyLayout'
import DefaultLayout from './default/DefaultLayout'

export const dynamic = 'force-dynamic'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  const page = await fetchPageBySlug(lang, slug)

  if (!page) {
    notFound()
  }

  // Route based on template
  if (page.template === 'course') {
    ensureCourseTemplate(page)
    return <CourseLayout page={page} lang={lang} />
  }

  if (page.template === 'Faculty') {
    ensureFacultyTemplate(page)
    return <FacultyLayout page={page} lang={lang} />
  }

  // Default page template
  if (page.template === 'pages' || !page.template) {
    return <DefaultLayout page={page} lang={lang} />
  }

  // Add more template routing here as needed
  notFound()
}
