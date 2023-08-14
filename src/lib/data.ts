export type NavigationItem = {
  name: string
  path: string
}

const navigationItems: NavigationItem[] = [
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Articles',
    path: '/articles',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'Uses',
    path: '/uses',
  },
]

export { navigationItems }
