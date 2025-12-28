import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { join } from 'path'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory).filter(file => {
    const fullPath = path.join(postsDirectory, file)
    return fs.statSync(fullPath).isFile() && file.endsWith('.md')
  })
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter(file => {
    const fullPath = path.join(postsDirectory, file)
    return fs.statSync(fullPath).isFile() && file.endsWith('.md')
  })
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getBioContent() {
  const bioPost = getPostBySlug('bio', ['content'])
  return bioPost.content || ''
}

export function getAllProjects(fields = []) {
  const projectsDirectory = path.join(postsDirectory, 'projects')
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(projectsDirectory)
  
  // Always include 'order', 'type', and 'slug' for sorting and filtering
  const requiredFields = ['type', 'slug', 'order']
  
  if (fields.length === 0) {
    // Get all fields, but include order for sorting
    const projects = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '')
        return getProjectBySlug(slug, ['order'])
      })
      .filter(project => project && project.type === 'project')
      .sort((a, b) => {
        const orderA = a.order || 999
        const orderB = b.order || 999
        return orderA - orderB
      })
    return projects
  }
  
  // For specific fields, always include required fields
  const fieldsWithRequired = [...new Set([...fields, ...requiredFields])]
  
  const projects = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      return getProjectBySlug(slug, fieldsWithRequired)
    })
    .filter(project => project && project.type === 'project')
    .sort((a, b) => {
      const orderA = a.order || 999
      const orderB = b.order || 999
      return orderA - orderB
    })
  
  // Remove required fields from results if they weren't requested
  return projects.map(project => {
    const result = { ...project }
    if (!fields.includes('type')) {
      delete result.type
    }
    if (!fields.includes('order')) {
      delete result.order
    }
    return result
  })
}

export function getProjectBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const projectsDirectory = path.join(postsDirectory, 'projects')
  const fullPath = join(projectsDirectory, `${realSlug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  // If no fields specified, return all
  if (fields.length === 0) {
    return {
      slug: realSlug,
      ...data,
      content
    }
  }

  return items
}
