import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename: string) {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => {
    const dateA = new Date(a.date)
    const dateZ = new Date(z.date)
    return dateZ.getTime() - dateA.getTime()
  })
}
