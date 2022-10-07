import React from 'react';
import "./PostComponent.css";

function PostComponent(props) {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/150/150/nature" alt="imgdummy" />
      </div>
      <div className="content">
        <p className="title">Dummy Title</p>
        <p className="desc">Dummy body here</p>
      </div>
    </div>
  )
}

export default PostComponent
