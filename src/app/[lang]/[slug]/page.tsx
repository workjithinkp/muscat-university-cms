import { fetchPageBySlug, ensureCourseTemplate } from '@/lib/api'
import { notFound } from 'next/navigation'
import CourseLayout from './course/CourseLayout'

export const dynamic = 'force-dynamic'

export default async function Page({
  params,
}: {
  params: { lang: string; slug: string }
}) {
  const page = await fetchPageBySlug(params.lang, params.slug)

  if (!page) {
    notFound()
  }

  // Route based on template
  if (page.template === 'course') {
    ensureCourseTemplate(page)
    return <CourseLayout page={page} lang={params.lang} />
  }

  // Add more template routing here as needed
  
  notFound()
}
