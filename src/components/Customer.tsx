import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import 'firebase/app'
import 'firebase/firestore'
import { useParams } from 'react-router-dom'
import './Customer.css'
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

interface ITransaction {
    customer_id: number
    type: "Credit" | "Debit"
    amount: number
    time: number
}
 
function Customer() {
    var { id } = useParams<any>();
    var customersDB = firebase.firestore().collection("customers")
    var transactionsDB = firebase.firestore().collection("transactions")
    var [customerdata, setCustomerdata] = useState<ICustomer>();
    var [transactiondata, setTransactiondata] = useState<ITransaction[]>()
    var [accounto, setAccountto] = useState<number>()
    useEffect(() => {
        customersDB.where("accountNumber", "==", parseInt(id)).get().then((value) => {
            setCustomerdata(value.docs[0].data() as ICustomer)
        })

        transactionsDB.where("customer_id", "==", parseInt(id)).get().then((value)=>{
            var arr: ITransaction[] = []
            value.forEach((result)=>{
                arr.push(result.data() as ITransaction)
            })
            setTransactiondata(arr)
        })
        }, [])

    return (
        <div className="container">
            <h1>Customer Profile</h1>
            <br />
            <div className="main">
                <div className="profile">
                    <img src={customerdata?.image} alt="" />
                    <h3>{customerdata?.name.title} {customerdata?.name.first} {customerdata?.name.last}</h3>
                    <p>Account Number: {customerdata?.accountNumber}</p>
                    <p>Gender: {customerdata?.gender}</p>
                    <p>Email: {customerdata?.email}</p>
                </div>
                <div className="data">
                    <div className="main">
                        <div className="profile">
                            <h3>Make Transaction</h3>
                            <form action="">
                                <input type="text" placeholder={"Account Number"}/>
                                <input type="text" placeholder={"Amount"}/>
                                <button>Send Money</button>
                            </form>

                            <h3>History</h3>
                            <div>
                                {
                                    transactiondata?.map((value)=>{
                                        if(value.type == "Credit"){
                                            return <p className="debited"> - Debited {value.amount}</p>
                                        }
                                        else{
                                            return <p className="credited"> + Credited {value.amount}</p>
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}


export default Customer