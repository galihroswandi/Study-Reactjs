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
          {props.data.title}
        </p>
        <p
          className="desc"
          style={{
            fontSize: '.8rem',
            fontWeight: '400',
          }}
        >
          {props.data.body}
        </p>
        <button className='update' onClick={() => props.update(props.data)}>Update</button>
        <button className='remove' onClick={() => props.remove(props.data.id)}>Remove</button>
      </div>
    </div>
  )
}

export default PostComponent
