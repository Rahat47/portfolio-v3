import { LucideIcon } from 'lucide-react'
import Link, { LinkProps } from 'next/link'

type SocialLinkProps = LinkProps & {
  icon: LucideIcon
}

function SocialLink({ icon: Icon, ...props }: SocialLinkProps) {
  return (
    <Link className="group -m-1 p-1" {...props} target="_blank">
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default SocialLink
