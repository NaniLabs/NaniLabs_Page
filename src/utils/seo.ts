import { useEffect } from 'react'
import { site } from '@/utils/content'

function setMeta(selector: string, attributes: Record<string, string>) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector)

  if (!tag) {
    tag = document.createElement('meta')
    document.head.appendChild(tag)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag?.setAttribute(key, value)
  })

  return tag
}

function setLink(selector: string, attributes: Record<string, string>) {
  let tag = document.head.querySelector<HTMLLinkElement>(selector)

  if (!tag) {
    tag = document.createElement('link')
    document.head.appendChild(tag)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag?.setAttribute(key, value)
  })

  return tag
}

export function useSeo(customTitle?: string, customDescription?: string) {
  useEffect(() => {
    const title = customTitle ?? site.seo.title
    const description = customDescription ?? site.seo.description
    const ogImage = `${window.location.origin}${site.seo.ogImage}`
    const url = window.location.href

    document.title = title

    setMeta('meta[name="description"]', { name: 'description', content: description })
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: ogImage })

    setMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    setMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    setMeta('meta[property="og:image"]', { property: 'og:image', content: ogImage })
    setMeta('meta[property="og:url"]', { property: 'og:url', content: url })
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: site.name })

    setLink('link[rel="canonical"]', { rel: 'canonical', href: url })
  }, [customTitle, customDescription])
}