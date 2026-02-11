import { notFound } from 'next/navigation'

export interface BlockContent {
  id?: number
  c_1?: string | null
  c_2?: string | null
  c_3?: string | null
  c_4?: string | null
  c_5?: string | null
  c_6?: string | null
  c_7?: string | null
  c_8?: string | null
  c_9?: string | null
  c_10?: string | null
  c_11?: string | null
  c_12?: string | null
  i_1?: string | null
  i_2?: string | null
  i_3?: string | null
  i_4?: string | null
  i_5?: string | null
  i_6?: string | null
  t_1?: string | null
  t_2?: string | null
  t_3?: string | null
  t_4?: string | null
  t_5?: string | null
  t_6?: string | null
  t_7?: string | null
  t_8?: string | null
  t_9?: string | null
  t_10?: string | null
  f_1?: string | null
  f_2?: string | null
  f_3?: string | null
  date_1?: string | null
  date_2?: string | null
  date_3?: string | null
  date_time_1?: string | null
  date_time_2?: string | null
  date_time_3?: string | null
  extra_class?: string | null
  sort?: string | number | null
  template?: string | null
  type?: string | null
  slug?: string | null
  parent_id?: number | null
  published?: number | null
  published_at?: string | null
}

export interface SectionMeta {
  id?: number
  section_for?: string | null
  section?: string | null
  template?: string | null
  type?: string | null
}

export interface PageSection {
  id?: number
  page_section_name?: string | null
  page_section_status?: number | null
  section_sort?: number | null
  s_1?: string | null
  s_2?: string | null
  s_3?: string | null
  s_4?: string | null
  s_5?: string | null
  page_id?: number | null
  section_id?: number | null
  block?: BlockContent | null
  list?: BlockContent[] | null
  section?: SectionMeta | null
}

export interface PageData {
  id?: number
  name?: string | null
  seo_title?: string | null
  seo_keywords?: string | null
  seo_description?: string | null
  title?: string | null
  slug?: string | null
  template?: string | null
  published?: number | null
  published_at?: string | null
  created_at?: string | null
  updated_at?: string | null
  deleted_at?: string | null
  image?: string | null
  category?: string | null
  under_banner_menu?: number | null
  sections?: PageSection[] | null
}

interface ApiResponse {
  status: number
  data?: PageData
  message?: string
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '') ||
  'https://muc.adventzeventz.com/api/v1/page'

function cleanPath(segment?: string | null) {
  if (!segment) return ''
  return segment.replace(/^\/+|\/+$/g, '')
}

export function resolveImageUrl(src?: string | null) {
  if (!src) return null
  if (src.startsWith('http')) return src
  if (src.startsWith('//')) return `https:${src}`
  if (src.startsWith('/')) return `https://muc.adventzeventz.com${src}`
  return src
}

export async function fetchPageBySlug(
  lang: string,
  slug: string
): Promise<PageData | null> {
  const normalizedLang = cleanPath(lang || 'en')
  const normalizedSlug = cleanPath(slug)
  const url = `${API_BASE_URL}/${normalizedLang}/${normalizedSlug}`

  const response = await fetch(url, {
    cache: 'no-store',
  })

  if (!response.ok) {
    if (response.status === 404) return null
    throw new Error(`Failed to fetch page data (${response.status})`)
  }

  const payload = (await response.json()) as ApiResponse

  if (payload.status !== 1 || !payload.data) {
    return null
  }

  return payload.data
}

export function ensureCourseTemplate(page?: PageData | null) {
  if (!page || page.template !== 'course') {
    notFound()
  }
}

export function ensureFacultyTemplate(page?: PageData | null) {
  if (!page || page.template !== 'Faculty') {
    notFound()
  }
}

export function ensureProgrammesTemplate(page?: PageData | null) {
  if (!page || page.template !== 'programmes') {
    notFound()
  }
}

export interface CourseListItem {
  id: number
  name: string
  slug: string
  category?: string | null
  image?: string | null
  title?: string | null
}

export async function fetchCoursesByTemplate(
  lang: string,
  template: string = 'course',
  category?: string | null
): Promise<CourseListItem[]> {
  const normalizedLang = cleanPath(lang || 'en')
  const baseUrl = 'https://muc.adventzeventz.com/api/v1/pages-by-template'
  const normalizedCategory = cleanPath(category || '')
  const url = normalizedCategory
    ? `${baseUrl}/${normalizedLang}/${template}/${encodeURIComponent(normalizedCategory)}`
    : `${baseUrl}/${normalizedLang}/${template}`

  try {
    const response = await fetch(url, {
      cache: 'no-store',
    })

    if (!response.ok) {
      console.warn(`Failed to fetch courses (${response.status})`)
      return []
    }

    const payload = (await response.json()) as {
      status: number
      data?: Array<{
        id: number
        name?: string | null
        slug: string
        title?: string | null
        category?: string
        course_title?: string
        image?: string | null
      }>
    }

    if (payload.status !== 1 || !Array.isArray(payload.data)) {
      return []
    }

    return payload.data.map((item) => ({
      id: item.id,
      slug: item.slug,
      category: item.category,
      title: item.title,
      image: item.image,
      name:
        item.name || item.course_title || item.title || item.slug || 'Course',
    }))
  } catch (error) {
    console.warn('Error fetching courses:', error)
    return []
  }
}
