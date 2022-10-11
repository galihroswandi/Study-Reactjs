import axios from 'axios'
import React, {useState } from 'react'
import { useParams } from 'react-router-dom'
import './DetailPost.css'

const DetailPost = () => {
  const { id } = useParams()
  const data = getSingleAPI(id)
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  data.then(response => {
    setTitle(response.data.title)
    setBody(response.data.body);
  })
  return(
    <div className='containerfluid'>
        <h1>{title}</h1>
        <p>{body}</p>
    </div>
  )
}

const getSingleAPI = (id) => {
  return axios.get(`http://localhost:3004/posts/${id}`)
}

export default DetailPost
