import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import All from './components/All'
import dataset from './dataset/dataset'
import Customer from './components/Customer'




function App() {


  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/customers" exact>
            <All></All>
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/customer/:id" exact>
            <Customer></Customer>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
