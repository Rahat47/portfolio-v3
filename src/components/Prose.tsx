import clsx from 'clsx'

type ProseProps = {
  className?: string
  children: React.ReactNode
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div className={clsx(className, 'prose dark:prose-invert')}>{children}</div>
  )
}
