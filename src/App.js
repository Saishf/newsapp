import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
   BrowserRouter as Router,
   Route,
   Routes,
 } from "react-router-dom";

import React, { Component } from 'react'




export default class App extends Component {
  pagesize=8;
  render() {
    return (
      
      <div> 
        <Router>
          
        <Navbar/>
        
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={this.pagesize} country="in" category="General" />} />
          <Route exact path="/business" element={<News key="business" pageSize={this.pagesize} country="in" category="Business" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pagesize} country="in" category="Entertainment" />} />
          <Route exact path="/general" element={<News key="general" pageSize={this.pagesize} country="in" category="General" />} />
          <Route exact path="/health" element={<News key="health" pageSize={this.pagesize} country="in" category="Health" />} />
          <Route exact path="/science" element={<News key="science" pageSize={this.pagesize} country="in" category="Science" />} />
          <Route exact path="/sports" element={<News key="sports" pageSize={this.pagesize} country="in" category="Sports" />} />
          <Route exact path="/technology" element={<News key="Technology" pageSize={this.pagesize} country="in" category="Technology" />} />
      </Routes>
        </Router>
      </div>
    )
  }
}

