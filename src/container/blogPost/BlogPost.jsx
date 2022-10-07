import React, { Component, Fragment } from 'react'
import PostComponent from '../../components/post/PostComponent'
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((response) => {
    //     this.setState({
    //       post: response,
    //     })
    //   })

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        this.setState({
            post : response.data
        })
    })
  }

  render() {
    return (
      <Fragment>
        <p
          className="title"
          style={{
            fontWeight: 'bolder',
            marginLeft: '2rem',
            fontSize: '1.2em',
            color: 'rgb(42, 42, 42)',
          }}
        >
          Blog Post
        </p>
        <div className="content" style={{
            display : "flex",
            flexWrap : "wrap",
            justifyContent : "center",
            alignItems : "center"
        }}>
          {this.state.post.map((post) => {
            return <PostComponent key={post.id} title={post.title} desc={post.body} />
          })}
        </div>
      </Fragment>
    )
  }
}

export default BlogPost
