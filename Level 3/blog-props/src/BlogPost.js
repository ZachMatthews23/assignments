import React from 'react'

function BlogPost(props) {
    return(
        <div>
            <a className="blog-link" href="html.com">
                <h1>{props.writer.title}</h1>
                <h3>{props.writer.subTitle}</h3>
            </a>
            <p>Posted by <a className="blog-link" href="html.com">{props.writer.author}</a> on {props.writer.date}</p>
            <hr/>
        </div>
    )
}

export default BlogPost