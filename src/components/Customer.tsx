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
    to_from: number
    time: number
}
 
function Customer() {
    var { id } = useParams<any>()
    var customersDB = firebase.firestore().collection("customers")
    var transactionsDB = firebase.firestore().collection("transactions")
    var [customerdata, setCustomerdata] = useState<ICustomer>()
    var [transactiondata, setTransactiondata] = useState<ITransaction[]>()
    var [accounto, setAccountto] = useState<number>(0)
    var [amount, setAmount] = useState<number>(0)
    var [notification, setNotification] = useState("");
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

    const send = async () => {
        var SenderData : ITransaction = {
            amount : amount,
            customer_id: parseInt(id),
            to_from: accounto,
            time: Date.now(),
            type: "Debit"
        }

        var RecieverData : ITransaction = {
            amount : amount,
            customer_id: accounto,
            to_from: parseInt(id),
            time: Date.now(),
            type: "Credit"
        }

    }

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
                    <p key={customerdata?.accountNumber} className="credited"> Current Balance: <b>{customerdata?.balance}</b></p>
                </div>
                <div className="data">
                    <div className="main">
                        <div className="profile">
                            <h3>Make Transaction</h3>
                            <form action="">
                                <input type="text" onChange={(e)=>{setAccountto(parseInt(e.target.value))}} required placeholder={"Account Number"}/>
                                <input type="text" onChange={(e)=>{setAmount(parseInt(e.target.value))}} required placeholder={"Amount"}/>
                                <button onClick={(e)=>{e.preventDefault(); send()}}>Send Money</button>
                            </form>

                            <h3>History</h3>
                            <div>
                                {
                                    transactiondata?.map((value)=>{
                                        if(value.type == "Credit"){
                                            return <p key={value.time} className="debited"> - Debited {value.amount}</p>
                                        }
                                        else{
                                            return <p key={value.time} className="credited"> + Credited {value.amount}</p>
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