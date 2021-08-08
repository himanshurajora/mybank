import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import 'firebase/app'
import 'firebase/firestore'
import { useParams } from 'react-router-dom'
import './Customer.css'

// Customer model
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

// Transaction MOdel
interface ITransaction {
    customer_id: number
    type: "Credit" | "Debit"
    amount: number
    to_from: number
    time: number
}

function Customer() {

    // Different states that control the overall workflow of the webapp
    var { id } = useParams<any>()
    var customersDB = firebase.firestore().collection("customers")
    var transactionsDB = firebase.firestore().collection("transactions")
    var [customerdata, setCustomerdata] = useState<ICustomer>()
    var [transactiondata, setTransactiondata] = useState<ITransaction[]>()
    var [accounto, setAccountto] = useState<number>(NaN)
    var [amount, setAmount] = useState<number>(NaN)
    var [notification, setNotification] = useState("");
    var [balance, setBalance] = useState<number>();


    useEffect(() => {
        customersDB.where("accountNumber", "==", parseInt(id)).get().then((value) => {
            setCustomerdata(value.docs[0].data() as ICustomer)
            setBalance(value.docs[0].data().balance)
        })

        transactionsDB.where("customer_id", "==", parseInt(id)).orderBy("time", "desc").get().then((value) => {
            var arr: ITransaction[] = []
            value.forEach((result) => {
                arr.push(result.data() as ITransaction)
            })
            setTransactiondata(arr)
        })
    }, [])

    

    /**
     * send fucntion for money transfers
     * @param e 
     */
    const send = async (e: any) => {

        (e.target as HTMLButtonElement).disabled = true;
        (e.target as HTMLButtonElement).innerText = "Sending...";


        if (isNaN(amount) || isNaN(accounto)) {
            setNotification("Please Fill Account Number and Amount")
        }
        else {

            if (amount <= 0) {
                setNotification("Amount must be greater than 0")
            }

            else {
                var SenderData: ITransaction = {
                    amount: amount,
                    customer_id: parseInt(id),
                    to_from: accounto,
                    time: Date.now(),
                    type: "Debit"
                }

                var RecieverData: ITransaction = {
                    amount: amount,
                    customer_id: accounto,
                    to_from: parseInt(id),
                    time: Date.now(),
                    type: "Credit"
                }

                var user = await customersDB.where("accountNumber", "==", accounto).get()

                try {
                    if (user.docs[0].exists) {
                        userref = user.docs[0].ref

                        userref.update({ balance: firebase.firestore.FieldValue.increment(amount) })

                        var userref: firebase.firestore.DocumentReference;
                        var user = await customersDB.where("accountNumber", "==", parseInt(id)).get()
                        userref = user.docs[0].ref

                        userref.update({ balance: firebase.firestore.FieldValue.increment(-amount) })

                        var sref = await transactionsDB.add(SenderData)
                        var rref = await transactionsDB.add(RecieverData)
                        setBalance(balance! - amount);

                        var tdata = [...[SenderData], ...transactiondata!]
                        setTransactiondata(tdata)

                        setNotification("Money Sent Successfully");
                    }
                    else {
                        setNotification("Account Doesn't exist")
                    }
                } catch (err) {
                    setNotification("Account Doesn't exist")
                }
            }


        }


        (e.target as HTMLButtonElement).disabled = false;
        (e.target as HTMLButtonElement).innerText = "Send Money"
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
                    <p key={customerdata?.accountNumber} className="credited"> Current Balance: <b>{balance}</b></p>
                </div>
                <div className="data">
                    <div className="main">
                        <div className="profile">
                            <h3>Make Transaction</h3>
                            <form action="">
                                <input type="text" onChange={(e) => { setAccountto(parseFloat(e.target.value)) }} required placeholder={"Account Number"} />
                                <input type="text" onChange={(e) => { setAmount(parseFloat(e.target.value)) }} required placeholder={"Amount"} />
                                <button onClick={(e) => { e.preventDefault(); send(e) }}>Send Money</button>
                            </form>
                            <br />
                            <span id="message">{notification}</span>
                            <hr />
                            <h3>History</h3>
                            <div>
                                {
                                    transactiondata?.map((value) => {
                                        if (value.type == "Credit") {
                                            return <p key={value.time} className="credited"> + Credited {value.amount} from <span id="goc" >{value.to_from}</span></p>
                                        }
                                        else {
                                            return <p key={value.time} className="debited"> - Debited {value.amount} to <span id="god" >{value.to_from}</span></p>
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