import { Button } from '@/components/Button'
import Image from 'next/image'
import logoCoil from '@/images/logos/coil.svg'
import logoFiverr from '@/images/logos/fiverr.svg'
import logoDropflow from '@/images/logos/dropflow.svg'
import { ArrowDownIcon, BriefcaseIcon } from 'lucide-react'

type ResumeItem = {
  company: string
  title: string
  logo: any
  start: string | { label: string; dateTime: number }
  end: string | { label: string; dateTime: number }
  link: string
}

const Resume = () => {
  let resume: ResumeItem[] = [
    {
      company: 'Dropflow',
      title: 'Lead Full Stack Engineer',
      logo: logoDropflow,
      start: 'June, 2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
      link: 'https://dropflow.app/',
    },
    {
      company: 'Cheer Music Maker',
      title: 'Full Stack Engineer',
      logo: logoCoil,
      start: 'Feb, 2020',
      end: 'Sept, 2020',
      link: 'https://www.cheer-music-maker.com/',
    },
    {
      company: 'Fiverr',
      title: 'Freelance Web Developer',
      logo: logoFiverr,
      start: '2019',
      end: 'Present',
      link: 'https://www.fiverr.com/rh_rahat_47',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work Experiences</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                <a href={role.link} target="_blank" rel="noopener noreferrer">
                  {role.company}
                </a>
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${
                  typeof role.start === 'string'
                    ? role?.start
                    : role.start.label
                } until ${
                  typeof role.end === 'string' ? role?.end : role.end.label
                }`}
              >
                <time
                  dateTime={
                    typeof role.start === 'string'
                      ? role?.start
                      : role.start.dateTime.toString()
                  }
                >
                  {typeof role.start === 'string'
                    ? role?.start
                    : role.start.label}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time
                  dateTime={
                    typeof role.end === 'string'
                      ? role?.end
                      : role.end.dateTime.toString()
                  }
                >
                  {typeof role.end === 'string' ? role?.end : role.end.label}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default Resume
