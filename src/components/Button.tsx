import Link from 'next/link'
import { VariantProps, cva } from 'cva'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-current',
  {
    variants: {
      variant: {
        primary:
          'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
        secondary:
          'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
}

export function Button({
  variant = 'primary',
  className,
  href,
  ...props
}: ButtonProps) {
  const Component = 'button'

  className = cn(className, buttonVariants({ variant }))

  if (href) {
    return (
      <Link href={href}>
        <button role="link" className={className} {...props} />
      </Link>
    )
  }

  return <Component className={className} {...props} />
}
