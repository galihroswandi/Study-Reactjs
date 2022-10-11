import React, { Component } from 'react'
import Product from '../pages/product/Product'
import LifecycleComp from '../pages/lifecycleComponent/LifecycleComp'
import BlogPost from "../pages/blogPost/BlogPost";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import './Home.css'

class Home extends Component {
  state = {
    showComponent: true,
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="navbar">
            <div className="container">
              <div className="NavbarBrand">
                <h1>Firts</h1>
                <h1>Last</h1>
              </div>
              <ul>
                <li><Link to="/" className='navLink'>Home</Link></li>
                <li><Link to="/product" className='navLink'>Product</Link></li>
                <li><Link to="/lifecycle" className='navLink'>LifeCycle</Link></li>
              </ul>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<BlogPost />} />
            <Route path="/product" element={<Product />} />
            <Route path="/lifecycle" element={<LifecycleComp />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default Home
