import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import All from './components/All'
import dataset from './dataset/dataset'

function App() {
  const [support, setSupport] = useState("")
  var dataBase: Database;
  useEffect(() => {
    if (!window.openDatabase) {
      setSupport("Not Supported")
      alert("Your Browser Doesn't Support WebSQL Please Use Chrome, Brave, Edge Chromium or Any Chromium Based Browser | \n | WebSQL Doesn't Work on FireFox, Internet Explorer and Old Edge Browser")
    }
    else {
      try {
        dataBase = window.openDatabase("3333333333", "1.0", "Test DataBase", 1024 * 1024 * 2, () => {
          console.log("dataBase Created");
          dataBase.transaction((query) => {
            var currentQuery = `CREATE TABLE IF NOT EXISTS CUSTOMERS (
              ID INTEGER PRIMARY KEY,
              NAME VARCHAR,
              EMAIL VARCHAR,
              IMAGE VARCHAR,
              BALANCE FLOAT
            )`

            query.executeSql(currentQuery, undefined, (transaction, result) => {
              console.log(result)
            })
          })

          dataBase.transaction((query) => {
            var currentQuery = `CREATE TABLE IF NOT EXISTS TRANSACTIONS (
              ID INTEGER PRIMARY KEY,
              AMOUNT NUMBER,
              CUSTOMER_ID INTEGER,
              TIME INTEGER,
              TYPE VARCHAR
            )`

            query.executeSql(currentQuery, undefined, (transaction, result) => {
              console.log(result)
            })
          })

          dataset.Customers.forEach((customer) => {
            var currentQuery = `INSERT INTO CUSTOMERS (NAME, EMAIL, IMAGE, BALANCE) 
            VALUES ('${customer.name.title + " " + customer.name.first + " " + customer.name.last}', '${customer.email}', '${customer.image}' ,${customer.balance})`
            console.log(currentQuery);
            dataBase.transaction((query) => {
              query.executeSql(currentQuery, undefined, (t, r) => {
                console.log(r);
              })
            })
          })

          dataset.Transactions.forEach((transaction) => {
            var currentQuery = `INSERT INTO TRANSACTIONS (AMOUNT, CUSTOMER_ID, TIME, TYPE) 
            VALUES (${transaction.amount}, ${transaction.customer_id}, ${transaction.time}, '${transaction.type}')`
            console.log(currentQuery);
            dataBase.transaction((query) => {
              console.log(currentQuery)
              query.executeSql(currentQuery, undefined, (t, r) => {
                console.log(r);
              }, (t, err)=>{console.log(err);
              })
            })
          })

        })
      }
      catch (err) {
        console.log(err);

      }
    }
  })

  return (
    <div className="App">
      {support ? <NotSupported></NotSupported> :
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/customers">
              <All />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>}
    </div>
  )
}


function NotSupported() {
  return (
    <div>
      <h2> <b>Not Supported Error!</b> </h2>
      <p><b>This website is only supported for Chromium Based Browsers Like Chrome, Brave, Edge Chromium etc. Not for FireFox, Internet Explorer and Old Edge Browser</b></p>
      <h3> <p>Please Use a different Browser to Test this app</p> </h3>
    </div>
  )
}


export default App
