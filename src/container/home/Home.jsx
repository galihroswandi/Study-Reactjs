// libraries
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

// pages
import Product from '../pages/product/Product'
import LifecycleComp from '../pages/lifecycleComponent/LifecycleComp'
import BlogPost from "../pages/blogPost/BlogPost";
import DetailPost from '../pages/blogPost/detailPost/DetailPost';
import GlobalProvider from '../../context/context';

// styling
import './Home.css'
import Hooks from '../pages/hooks/Hooks';

class Home extends Component {
  render() {
    return (
      <div>
        <Router>
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
                <li><Link to="/hooks" className='navLink'>Hooks</Link></li>
              </ul>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<BlogPost />} />
            <Route path="/detail-post/:id" element={<DetailPost />} />
            <Route path="/product" element={<Product />} />
            <Route path="/lifecycle" element={<LifecycleComp />} />
            <Route path="/hooks" element={<Hooks />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default GlobalProvider(Home);