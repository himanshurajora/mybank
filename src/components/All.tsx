import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router ,Link, Route, Switch, useParams } from 'react-router-dom'
import firebase from 'firebase'
import 'firebase/app'
import 'firebase/firestore'
import "./All.css"
import Customer from './Customer'

interface ICustomer {
    gender: string
    name: {
        title: string
        first: string
        last: string
    }
    accountNumber: string
    email: string
    image: string
    balance: number
}


var firebaseConfig = {
    apiKey: "AIzaSyCTvOjkdho2r7l4m-GVPYiSrEuazQeYu2s",
    authDomain: "chat-fire-test-756d8.firebaseapp.com",
    projectId: "chat-fire-test-756d8",
    storageBucket: "chat-fire-test-756d8.appspot.com",
    messagingSenderId: "945038291938",
    appId: "1:945038291938:web:b4c7699615c23068967fbb",
    measurementId: "G-WWFW3PM397"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   var transactions = firebase.firestore().collection("transactions");

var customersdb = firebase.firestore().collection("customers");

function All() {

    var [customers, setCustomers] = useState<Array<any>>([])

    useEffect(() => {
        customersdb.get().then((data) => {
            var d: any[] = []
            data.docs.forEach((value) => {
                d.push(value.data())
            })
            setCustomers(d)
            console.log(customers)
        })
    }, [])

    return (
        <div className="All">
            <h1>List of Customers of MyBank -&gt;</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Account Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <Router> */}
                        {customers.map((value: ICustomer, index) => {
                            return <tr key={value.accountNumber}>
                                <td>{index + 1}</td>
                                <td><span><img src={value.image} alt="profile Image" /></span></td>
                                <td>{value.name.title} {value.name.first} {value.name.last}</td>
                                <td>{value.accountNumber}</td>
                                <td><Link to={"/customer/" + value.accountNumber}>View</Link></td>
                            </tr>
                        })}

                        {/* <Switch>
                            <Route path="/customer/:id">
                                <Customer></Customer>
                            </Route>
                        </Switch>
                        </Router> */}
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        </div>
    )
}

export default All