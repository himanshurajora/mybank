interface ICustomer {
    gender : string
    name : {
        title : string
        first : string
        last : string
    }
    image : string
    balance : number
}

interface ITransaction{
    type : "Credit" | "Debit"
    amount : number
    time : string
}

var Customers : ICustomer[] = [
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Carl",
            "last": "Rasmussen"
        },
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
        "image": "https://randomuser.me/api/portraits/men/18.jpg",
        "balance": 28000
    }
]

var Transactions = [
    {
        "data": 12
    }
]


export default { Customers, Transactions }