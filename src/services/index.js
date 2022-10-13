import axios from 'axios'
import Post from './Post'
import Get from './Get'

// Post
const postNewsBlog = (data) => Post('posts', false, data)

// Get
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false)
const getComments = () => Get('comments', true)

const API = {
  postNewsBlog,
  getNewsBlog,
  getComments,
}

export default API
