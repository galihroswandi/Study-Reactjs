import React, { useState, Component } from 'react'
import Product from '../product/Product'
import LifecycleComp from '../../components/LifecycleComp'
import BlogPost from '../blogPost/BlogPost'

class Home extends Component {
  state = {
    showComponent: true,
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       showComponent: false,
  //     })
  //   }, 2000)
  // }

  render() {
    return <div>
      {/* {this.state.showComponent ? <LifecycleComp /> : null} */}
      <p>Blog Post</p>
      <hr/>
      <BlogPost />
      </div>
  }
}

export default Home
