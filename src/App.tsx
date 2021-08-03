import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import All from './components/All'
import data from './dataset/dataset'

function App() {
  const [count, setCount] = useState(0)
  var dataBase : Database;
  useEffect(() => {
    if(!window.openDatabase){
      alert("Your Browser Doesn't Support WebSQL Please Use Chrome, Brave, Edge Chromium or Any Chromium Based Browser | \n | WebSQL Doesn't Work on FireFox, Internet Explorer and Old Edge Browser")
    }
    else{
      try{
        dataBase = window.openDatabase("DemoWebSql", "1.0", "Test DataBase", 1024 * 1024 * 2, () => {
          console.log("dataBase Created")
        })
      }
      catch(err){
        console.log(err);
        
      }
    }
  })

  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/customers">
            <All/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}


function Users() {
  return <p>Hello There Users</p>
}


export default App
