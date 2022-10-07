import React from 'react'
import './PostComponent.css'

function PostComponent(props) {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/150/150/nature" alt="imgdummy" />
      </div>
      <div className="content">
        <p
          className="title"
          style={{
            fontSize: '1rem',
            textTransform: 'capitalize',
          }}
        >
          {props.title}
        </p>
        <p
          className="desc"
          style={{
            fontSize: '.8rem',
            fontWeight: '400',
          }}
        >
          {props.desc}
        </p>
      </div>
    </div>
  )
}

export default PostComponent
