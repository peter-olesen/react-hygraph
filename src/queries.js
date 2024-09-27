export const allBlogs = `query MyQuery {
  posts {
    id
    date
    postSlug
    postTitle
    postContent
    images {
      url
    }
  }
}`