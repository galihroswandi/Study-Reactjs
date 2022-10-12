// libraries
import React, { Component, createContext } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

// pages
import Product from '../pages/product/Product'
import LifecycleComp from '../pages/lifecycleComponent/LifecycleComp'
import BlogPost from "../pages/blogPost/BlogPost";
import DetailPost from '../pages/blogPost/detailPost/DetailPost';

// styling
import './Home.css'

export const RootContext = createContext();
const Provider = RootContext.Provider;

class Home extends Component {
  state = {
    totalOrder : 10
  }

  render() {
    return (
      <div>
        <Provider value={this.state}>
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
                </ul>
              </div>
            </div>
            <Routes>
              <Route path="/" element={<BlogPost />} />
              <Route path="/detail-post/:id" element={<DetailPost />} />
              <Route path="/product" element={<Product />} />
              <Route path="/lifecycle" element={<LifecycleComp />} />
            </Routes>
          </Router>
        </Provider>
      </div>
    )
  }
}

export default Home
