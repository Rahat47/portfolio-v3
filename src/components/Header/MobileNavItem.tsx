import { Popover } from '@headlessui/react'
import Link from 'next/link'

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

const MobileNavItem = ({ href, children }: NavLinkProps) => {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  )
}

export default MobileNavItem
