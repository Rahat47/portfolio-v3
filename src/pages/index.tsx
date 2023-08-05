import Head from 'next/head'
import Container from '@/components/Container'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

import Article from '@/modules/Home/Article'
import Newsletter from '@/modules/Home/NewsLetter'
import SocialLink from '@/modules/Home/SocialLink'
import Resume from '@/modules/Home/Resume'
import Photos from '@/modules/Home/Photos'
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react'

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Rayhan Rahat - Web designer, developer, and imaginary super soldier.
        </title>
        <meta
          name="description"
          content="I’m Rahat, a Web designer and Developer based in Dhaka, Bangladesh. This is my Personal Portfolio, where I write about web development, design, and other things I find interesting."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Web Development, Brainstorming, and Making Cool Stuff
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Rahat, a skilled full-stack Web Developer with extensive
            experience in building high-quality websites. From Backend to
            Frontend, I conquer all challenges. Making cool stuff is my passion,
            and I love to brainstorm ideas. I am a fast learner and a team
            player. I am always ready to learn new things and work with new
            technologies.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/rh_rahat_dev"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.instagram.com/rh.rahat0047/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/Rahat47"
              aria-label="Follow on GitHub"
              icon={GithubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/rh-rahat/"
              aria-label="Follow on LinkedIn"
              icon={LinkedinIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map(
              (article: {
                slug: string
                title: string
                date: string
                description: string
              }) => (
                <Article key={article.slug} article={article} />
              )
            )}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
