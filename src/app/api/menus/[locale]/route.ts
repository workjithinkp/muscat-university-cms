import { NextResponse } from 'next/server'

export const revalidate = 60

function getMenusApiBaseUrl() {
  const fromPublic = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, '')

  if (fromPublic) {
    return fromPublic.replace(/\/page$/, '')
  }

  return 'https://muc.adventzeventz.com/api/v1'
}

function normalizeLocale(value: string) {
  const locale = (value || '').trim().toLowerCase()
  if (/^[a-z]{2}$/.test(locale)) return locale
  return 'en'
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params
  const normalizedLocale = normalizeLocale(locale)
  const endpoint = `${getMenusApiBaseUrl()}/menus/${normalizedLocale}`

  try {
    const upstream = await fetch(endpoint, {
      next: { revalidate: 60 },
    })

    if (!upstream.ok) {
      return NextResponse.json(
        { status: 0, data: { menu2: { items: [] } }, message: 'Failed to fetch menus' },
        { status: upstream.status }
      )
    }

    const payload = await upstream.json()
    return NextResponse.json(payload)
  } catch {
    return NextResponse.json(
      { status: 0, data: { menu2: { items: [] } }, message: 'Failed to fetch menus' },
      { status: 500 }
    )
  }
}
