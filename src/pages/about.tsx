import Head from 'next/head'
import Image from 'next/image'

import Container from '@/components/Container'

import {
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from 'lucide-react'
import portraitImage from '@/images/own/portrait.jpg'
import SocialLink from '@/components/SocialLink'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Rayhan Rahat</title>
        <meta
          name="description"
          content="I’m Rayhan Rahat. I live in Dhaka - Bangladesh, where I develop the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="rayhan rahat portrait"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Rayhan Rahat. Mastering Code and Crafting Experiences
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hello and welcome to my corner of the digital universe!
                I&rsquo;m Rahat, a dedicated 24-year-old full-stack web
                developer hailing from the vibrant city of Dhaka, Bangladesh. My
                journey through the realms of web development began with an
                Honours Degree in Accounting, an unexpected foundation that
                later intertwined seamlessly with my passion for coding. Today,
                I stand as a proud alchemist of code, turning intricate
                challenges into elegant solutions.
              </p>
              <p>
                For over three years, I&rsquo;ve been shaping the virtual
                landscape, merging innovation with imagination. Proficiency in
                languages like JavaScript and Python has equipped me to engineer
                dynamic and intuitive web experiences. My mastery extends to
                TypeScript and a multitude of frameworks, allowing me to adapt
                and innovate swiftly. Whether it&rsquo;s backend intricacies or
                the art of teamwork within a global developer community, I
                thrive on pushing boundaries and co-creating digital
                masterpieces.
              </p>
              <p>
                When I&rsquo;m not immersed in lines of code, I&rsquo;m a seeker
                of experiences both digital and tangible. My passion for travel
                has led me to explore diverse cultures and expand my horizons.
                Gaming offers a unique avenue to conquer virtual realms and
                challenge my strategic thinking. And who can resist the thrill
                of action movies? I find inspiration in their pulse-pounding
                narratives, infusing a touch of cinematic magic into my coding
                endeavors. Music is my constant companion during work, fueling
                my creativity as I design and develop.
              </p>
              <p>
                As I traverse this exhilarating journey, my aspirations remain
                steadfast. I envision a future where I collaborate with
                exceptional teams on extraordinary projects that redefine the
                web. My goal extends beyond code – I yearn to crisscross the
                globe, learning from diverse cultures, and infusing fresh
                perspectives into my work. Each line of code I write, each
                virtual landscape I shape, is a step closer to realizing my
                dreams. Join me on this odyssey as I continue to merge the
                worlds of technology, creativity, and boundless possibility.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/rh_rahat_dev"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/rh.rahat0047/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/Rahat47"
                icon={GithubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/rh-rahat/"
                icon={LinkedinIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:djrayhan8@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                djrayhan8@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
