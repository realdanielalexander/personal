import { Box, Container, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../../components/layouts/article'
import { remark } from 'remark'
import html from 'remark-html'
import { getAllPosts, getPostBySlug } from '../../libs/posts'
import { useRouter } from 'next/router'

import markdownStyles from './markdown-styles.module.css'

const markdownToHtml = async markdown => {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

const Post = ({ post, preview }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <p>Error!</p>
    // return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Heading />
        {router.isFallback ? (
          <Text>Loading…</Text>
        ) : (
          <>
            <Box className="mb-32">
              <Head>{/* <Text as={'h1'}>{post.title}</Text> */}</Head>
              <Text>{post.coverImage}</Text>
              <Text>{post.date}</Text>
              <Text>{post.author}</Text>
              {/* <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              /> */}
              <div className="max-w-2xl mx-auto">
                <div
                  className={markdownStyles['markdown']}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
              {/* <PostBody content={post.content} /> */}
            </Box>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
