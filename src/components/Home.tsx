import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <h1 id="head">Welcome To MyBank</h1>
            <h4>This is A Demo Banking System Made In React</h4>
            <br /><br />
            <h2>Our Features : </h2>
            <ul>
                <li>
                    <p>&rarr; View All Customers</p>
                </li>
                <li>
                    <p>&rarr; Individual Customer Profile</p>
                </li>
                <li>
                    <p>&rarr; Money Transaction</p>
                </li>
                <li>
                    <p></p>
                </li>
                <li>
                    <p></p>
                </li>
            </ul>

        <h3>Technologies Used : React, TypeScript & Firebase</h3>

            <br /><br />

        <h2><address>Life is Beyond Limits - Himanshu Jangid</address></h2>

        </div>
    )
}

export default Home