import { navigationItems } from '@/lib/data'
import NavItem from './NavItem'

const DesktopNavigation = (props: React.HTMLProps<HTMLElement>) => {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {navigationItems.map((item) => (
          <NavItem href={item.path} key={item.name}>
            {item.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}

export default DesktopNavigation
