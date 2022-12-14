import React, { Component, Fragment } from 'react'
import PostComponent from '../../../components/post/PostComponent'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './BlogPost.css'
import API from '../../../services'

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      userId: 1,
      id: 1,
      title: '',
      body: '',
    },
    isUpdate: false,
    comments: [],
  }

  getDataAPI = () => {
    API.getNewsBlog().then((response) => {
      this.setState({
        post: response,
      })
    })

    API.getComments().then((response) => {
      this.setState({
        comments: response,
      })
    })
  }

  postDataAPI = () => {
    API.postNewsBlog(this.state.formBlogPost).then((response) => {
      this.getDataAPI()
      this.setState({
        formBlogPost: {
          userId: 1,
          id: 1,
          title: '',
          body: '',
        },
      })
    })
  }

  putDataToAPI = () => {
    API.updateNewsBlog(
      this.state.formBlogPost,
      this.state.formBlogPost.id,
    ).then((response) => {
      this.getDataAPI()
      this.setState({
        formBlogPost: {
          userId: 1,
          id: 1,
          title: '',
          body: '',
        },
        isUpdate: false,
      })
    })
  }

  handleRemove = (id) => {
    API.deleteNewsBlog(id).then((response) => {
      this.getDataAPI()
    })
  }

  handleUpdate = (data) => {
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    })
  }

  handleChangeForm = (e) => {
    let formBlogPostNew = { ...this.state.formBlogPost }
    let timestamp = new Date().getTime()

    if (!this.state.isUpdate) {
      formBlogPostNew['id'] = timestamp
    }
    formBlogPostNew[e.target.name] = e.target.value

    this.setState({
      formBlogPost: formBlogPostNew,
    })
  }

  handleSubmit = () => {
    if (this.state.isUpdate) {
      if (
        this.state.formBlogPost.title == '' ||
        this.state.formBlogPost.body == ''
      ) {
        alert('title / deskripsi tidak boleh kosong !')
      } else {
        this.putDataToAPI()
      }
    } else {
      if (
        this.state.formBlogPost.title == '' ||
        this.state.formBlogPost.body == ''
      ) {
        alert('title / deskripsi tidak boleh kosong !')
      } else {
        this.postDataAPI()
      }
    }
  }

  handleDetail = (id) => {
    console.log(id)
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
          <div className="content-form">
            <label htmlFor="title">Judul</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={this.handleChangeForm}
              value={this.state.formBlogPost.title}
              placeholder="add title"
            />
            <label htmlFor="body">Deskripsi</label>
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              onChange={this.handleChangeForm}
              value={this.state.formBlogPost.body}
              placeholder="add blog content"
            ></textarea>
            <button onClick={this.handleSubmit}>Tambah Data</button>
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
          {/* <div>
            <h1>My Comments</h1>
            {this.state.comments.map((comment) => {
              return (
                <p>
                  {comment.name} - {comment.email}
                </p>
              )
            })}
          </div> */}

          {this.state.post.map((post) => {
            return (
              <PostComponent
                key={post.id}
                data={post}
                remove={this.handleRemove}
                update={this.handleUpdate}
                goDetailPost={this.handleDetail}
              />
            )
          })}
        </div>
      </Fragment>
    )
  }
}

export default BlogPost
