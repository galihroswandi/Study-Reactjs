import React, { Component, Fragment } from "react";
import PostComponent from "../../components/post/PostComponent";

class BlogPost extends Component{
    render(){
        return(
            <Fragment>
                <p className="title">Blog Post</p>
                <PostComponent title={"title"} desc={"description dummy"} body={"body here"} />
            </Fragment>
        )
    }
}

export default BlogPost;