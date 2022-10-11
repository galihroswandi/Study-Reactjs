import React from 'react'
import './PostComponent.css'
import { Link } from 'react-router-dom'

function PostComponent(props) {

  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/150/150/nature" alt="imgdummy" />
      </div>
      <div className="content">
        <Link to={`/detail-post/${props.data.id}`} style={{textDecoration : "none"}} className="text-color" >
          <p
            className="title"
            style={{
              fontSize: '1rem',
              textTransform: 'capitalize',
              cursor: 'pointer',
            }}
          >
            {props.data.title}
          </p>
        </Link>
        <p
          className="desc"
          style={{
            fontSize: '.8rem',
            fontWeight: '400',
          }}
        >
          {props.data.body}
        </p>
        <button className="update" onClick={() => props.update(props.data)}>
          Update
        </button>
        <button className="remove" onClick={() => props.remove(props.data.id)}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default PostComponent
