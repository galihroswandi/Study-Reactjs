import React, { useState, Component } from 'react'
import Product from '../product/Product'
import LifecycleComp from '../../components/LifecycleComp'
import BlogPost from '../blogPost/BlogPost'
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
              </ul>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<BlogPost />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default Home
