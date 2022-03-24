const BlogRow  = () => {
    return (  
        <BlogRow>
            {posts.map((post) => (
              <BlogListCol key={post.node.originalId}>
                <LinkBlog to={`/blog/${post.node.postSlug}`}>
                  
                  <h3>{post.node.title}</h3>
                </LinkBlog>
              </BlogListCol>
            ))}
          </BlogRow>
    );
}
 
export default BlogRow;