import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'anistratenco',
  description:
    "Site personnel d'Anistratenco Serghei, étudiant à LP1 MIAW, Université de Limoges. Rapport d'étonnement et portfolio.",
  href: 'http://linkedin.com/in/anistrat',
  author: 'Anistratenco Serghei',
  locale: 'fr-FR',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'à propos',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/Solips1sm',
    label: 'GitHub',
  },
  {
    href: 'mailto:n1keloffs@gmail.com',
    label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
