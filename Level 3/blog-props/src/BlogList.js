import React from 'react'
import BlogPost from './BlogPost'
import authors from './authorList'

function BlogList() {
    const blogs = authors.map(blog => <BlogPost writer={blog}/>)

    console.log(blogs)

    return(
        <div>
            <div className="blogList">
                {blogs}
            </div>
            <div className="older-posts">
                <a className="older-posts-btn" href="html.com">Older Posts →</a>
            </div>
        </div>
    )
}

export default BlogList