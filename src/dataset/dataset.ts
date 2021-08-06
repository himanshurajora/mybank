interface ICustomer {
    gender: string
    name: {
        title: string
        first: string
        last: string
    }
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

var Customers: ICustomer[] = [
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Carl",
            "last": "Rasmussen"
        },
        "email": "fsgsg24@example.com",
        "image": "https://randomuser.me/api/portraits/men/70.jpg",
        "balance": 43000
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Diego",
            "last": "Farias"
        },
        "email": "2gbrh53.wang@example.com",

        "image": "https://randomuser.me/api/portraits/men/63.jpg",
        "balance": 12000

    },
    {
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "Carolina",
            "last": "Gallardo"
        },
        "email": "vshuuui563@example.com",
        "image": "https://randomuser.me/api/portraits/women/38.jpg",
        "balance": 35000

    },
    {
        "gender": "female",
        "name": {
            "title": "Miss",
            "first": "Beatriz",
            "last": "Vicente"
        },
        "email": "shdfffh67@example.com",
        "image": "https://randomuser.me/api/portraits/women/79.jpg",
        "balance": 48000
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Arnold",
            "last": "Ray"
        },
        "email": "gwyu3ue.com",
        "image": "https://randomuser.me/api/portraits/men/18.jpg",
        "balance": 28000
    }
]

var Transactions: ITransaction[] = [
    {
        "customer_id": 1,
        "amount": 3680.35,
        "type": "Credit",
        "time": 1628046472580
      },
      {
        "customer_id": 2,
        "amount": 3355.96,
        "type": "Credit",
        "time": 1628046472580
      },
      {
        "customer_id": 3,
        "amount": 1733.77,
        "type": "Credit",
        "time": 1628046472580
      },
      {
        "customer_id": 4,
        "amount": 1754.12,
        "type": "Credit",
        "time": 1628046472580
      },
      {
        "customer_id": 5,
        "amount": 3416.15,
        "type": "Credit",
        "time": 1628046472580
      },
      {
        "customer_id": 1,
        "amount": 1883.95,
        "type": "Debit",
        "time": 1628046519246
      },
      {
        "customer_id": 2,
        "amount": 3491.98,
        "type": "Debit",
        "time": 1628046519246
      },
      {
        "customer_id": 3,
        "amount": 3140.29,
        "type": "Debit",
        "time": 1628046519246
      },
      {
        "customer_id": 4,
        "amount": 1933.07,
        "type": "Debit",
        "time": 1628046519246
      },
      {
        "customer_id": 5,
        "amount": 1272.75,
        "type": "Debit",
        "time": 1628046519246
      },
      {
        "customer_id": 3,
        "amount": 2169.7,
        "type": "Debit",
        "time": 1628046552715
      },
      {
        "customer_id": 4,
        "amount": 2433.45,
        "type": "Debit",
        "time": 1628046552715
      },
      {
        "customer_id": 5,
        "amount": 1609.06,
        "type": "Debit",
        "time": 1628046552715
      },
      {
        "customer_id": 6,
        "amount": 1241.21,
        "type": "Debit",
        "time": 1628046552715
      },
      {
        "customer_id": 7,
        "amount": 2890.98,
        "type": "Debit",
        "time": 1628046552715
      }
]

export default { Customers, Transactions}


/**
 * addition code
 * 
 *   const add = async () => {
    data.Customers.forEach(async (customer)=>{
        var data = await db.add(customer)
        console.log(`data added at ${data.id}`)
      })
  }
  
 * 
                <button onClick={add}>Click To Add</button>
 * 
 */