import React, { Component, Fragment } from 'react'
import PostComponent from '../../components/post/PostComponent'
import axios from 'axios'
import "./BlogPost.css"

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost : {
      userId : 1,
      id : 1,
      title : "",
      body : ""
    }
  }

  getDataAPI = () => {
    axios.get('http://localhost:3004/posts').then((response) => {
      this.setState({
        post: response.data,
      })
    })
  }

  handleRemove = (id) => {
    console.log(id)
    axios.delete(`http://localhost:3004/posts/${id}`).then((response) => {
      this.getDataAPI()
    })
  }

  handleChangeForm = (e) => {
    console.log(e.target)

    let formBlogPostNew = {...this.state.formBlogPost};
    formBlogPostNew[e.target.name] = e.target.value;

    this.setState({
      formBlogPost : formBlogPostNew
    }, () => {
      console.log("object : ", this.state.formBlogPost);
    })

  }

  componentDidMount() {
    this.getDataAPI()
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
        <div className="form">
          <div className="title">
            <h1>Tambah Data</h1>
          </div>
          <div className="content-form">
            <label htmlFor="title">Judul</label>
            <input type="text" name="title" id="title" onChange={this.handleChangeForm} />
            <label htmlFor="body">Deskripsi</label>
            <textarea name="body" id="body" cols="30" rows="10" onChange={this.handleChangeForm}></textarea>
            <button>Tambah Data</button>
          </div>
        </div>
        <div
          className="content"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {this.state.post.map((post) => {
            return (
              <PostComponent
                key={post.id}
                data={post}
                remove={this.handleRemove}
              />
            )
          })}
        </div>
      </Fragment>
    )
  }
}

export default BlogPost
