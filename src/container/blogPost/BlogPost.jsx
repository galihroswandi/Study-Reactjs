import React, { Component, Fragment } from 'react'
import PostComponent from '../../components/post/PostComponent'
import axios from 'axios'
import './BlogPost.css'

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
  }
  getDataAPI = () => {
    axios
      .get('http://localhost:3004/posts?_sort=id&_order=desc')
      .then((response) => {
        this.setState({
          post: response.data,
        })
      })
  }

  postDataAPI = () => {
    axios.post('http://localhost:3004/posts', this.state.formBlogPost).then(
      (respose) => {
        this.getDataAPI()

        this.setState({
          formBlogPost: {
            userId: 1,
            id: 1,
            title: '',
            body: '',
          },
        })
      },
      (err) => {
        alert(err)
      },
    )
  }

  putDataToAPI = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost,
      )
      .then((response) => {
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

  handleUpdate = (data) => {
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    })
  }

  handleRemove = (id) => {
    axios.delete(`http://localhost:3004/posts/${id}`).then((response) => {
      this.getDataAPI()
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
          {this.state.post.map((post) => {
            return (
              <PostComponent
                key={post.id}
                data={post}
                remove={this.handleRemove}
                update={this.handleUpdate}
              />
            )
          })}
        </div>
      </Fragment>
    )
  }
}

export default BlogPost
