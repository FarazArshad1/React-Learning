function PostList({ posts = [] }) {
  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostList