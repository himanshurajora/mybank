import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import 'firebase/app'
import 'firebase/firestore'
import "./All.css"

// Transaction MOdel
interface ITransaction {
    customer_id: number
    type: "Credit" | "Debit"
    amount: number
    to_from: number
    time: number
}

function Transactions() {

    var transactionsDB = firebase.firestore().collection("transactions")

    var [transactiondata, setTransactiondata] = useState<ITransaction[]>()


    useEffect(() => {
        transactionsDB.orderBy("time", "desc").get().then((value) => {
            var arr: ITransaction[] = []
            value.forEach((result) => {
                arr.push(result.data() as ITransaction)
            })
            setTransactiondata(arr)
        })
    }, [])

    return (
        <div className="All">
            <h1>All Transactions -&gt;</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>From (Acc.N.)</th>
                            <th>Amount</th>
                            <th>To (Acc.N.)</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactiondata?.map((value) => {
                                if (value.type === "Debit") {
                                    return <tr key={value.time.toString() + value.type}>
                                        <td>{value.customer_id}</td>
                                        <td>{value.amount}</td>
                                        <td>{value.to_from}</td>
                                        <td>{`${new Date(value.time).getDate().toString()}/${new Date(value.time).getMonth().toString()}/${new Date(value.time).getFullYear().toString()} - ${new Date(value.time).getHours().toString()}:${new Date(value.time).getMinutes().toString()}:${new Date(value.time).getSeconds() < 10 ? "0" + new Date(value.time).getSeconds().toString() : new Date(value.time).getSeconds().toString()}`}</td>
                                    </tr>
                                }
                                else if(value.type === "Credit") {
                                    return <tr key={value.time}>
                                        <td>{value.customer_id}</td>
                                        <td>{value.amount}</td>
                                        <td>{value.to_from}</td>
                                        <td>{`${new Date(value.time).getDate().toString()}/${new Date(value.time).getMonth().toString()}/${new Date(value.time).getFullYear().toString()} - ${new Date(value.time).getHours().toString()}:${new Date(value.time).getMinutes().toString()}:${new Date(value.time).getSeconds() < 10 ? "0" + new Date(value.time).getSeconds().toString() : new Date(value.time).getSeconds().toString()}`}</td>
                                    </tr>
                                }
                            })
                        }
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        </div>
    )
}


export default Transactions