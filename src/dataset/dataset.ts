interface ICustomer {
    gender : string
    name : {
        title : string
        first : string
        last : string
    }
    email: string
    image : string
    balance : number
}

interface ITransaction{
    customer_id: number
    type : "Credit" | "Debit"
    amount : string
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
        "email" : "grayson.wang@example.com",
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
        "email" : "grayson.wang@example.com",

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
        "email" : "grayson.wang@example.com",
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
        "email" : "grayson.wang@example.com",
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
        "email" : "grayson.wang@example.com",
        "image": "https://randomuser.me/api/portraits/men/18.jpg",
        "balance": 28000
    }
]

var Transactions: ITransaction[] = [
    {
        "customer_id": 1,
        "amount": "2,580.76",
        "type": "Credit",
        "time": "2014-01-22T07:40:45 -06:-30"
      },
      {
        "customer_id": 2,
        "amount": "3,378.89",
        "type": "Credit",
        "time": "2016-05-15T08:35:33 -06:-30"
      },
      {
        "customer_id": 3,
        "amount": "3,588.13",
        "type": "Credit",
        "time": "2016-01-30T05:37:45 -06:-30"
      },
      {
        "customer_id": 4,
        "amount": "2,680.09",
        "type": "Credit",
        "time": "2015-10-06T12:39:42 -06:-30"
      },
      {
        "customer_id": 5,
        "amount": "3,358.48",
        "type": "Credit",
        "time": "2018-03-26T07:08:02 -06:-30"
      },
      {
        "customer_id": 1,
        "amount": "1,160.82",
        "type": "Debit",
        "time": "2018-07-01T03:23:53 -06:-30"
      },
      {
        "customer_id": 2,
        "amount": "1,683.59",
        "type": "Debit",
        "time": "2017-09-16T04:18:18 -06:-30"
      },
      {
        "customer_id": 3,
        "amount": "1,675.54",
        "type": "Debit",
        "time": "2021-04-19T02:14:17 -06:-30"
      },
      {
        "customer_id": 4,
        "amount": "3,286.89",
        "type": "Debit",
        "time": "2018-10-03T08:27:51 -06:-30"
      },
      {
        "customer_id": 5,
        "amount": "3,052.63",
        "type": "Debit",
        "time": "2017-07-10T08:40:16 -06:-30"
      },
      {
        "customer_id": 1,
        "amount": "3,723.46",
        "type": "Credit",
        "time": "2020-04-23T10:52:12 -06:-30"
      },
      {
        "customer_id": 2,
        "amount": "1,856.03",
        "type": "Credit",
        "time": "2021-02-04T06:27:08 -06:-30"
      },
      {
        "customer_id": 3,
        "amount": "2,324.66",
        "type": "Credit",
        "time": "2020-03-20T08:53:28 -06:-30"
      },
      {
        "customer_id": 4,
        "amount": "3,440.17",
        "type": "Credit",
        "time": "2017-08-09T12:56:14 -06:-30"
      },
      {
        "customer_id": 5,
        "amount": "1,831.23",
        "type": "Credit",
        "time": "2014-08-04T07:58:08 -06:-30"
      },
      {
        "customer_id": 1,
        "amount": "3,305.95",
        "type": "Debit",
        "time": "2019-05-13T06:41:58 -06:-30"
      },
      {
        "customer_id": 2,
        "amount": "2,482.52",
        "type": "Debit",
        "time": "2017-09-01T04:54:10 -06:-30"
      },
      {
        "customer_id": 3,
        "amount": "2,983.43",
        "type": "Debit",
        "time": "2019-11-04T08:20:54 -06:-30"
      },
      {
        "customer_id": 4,
        "amount": "2,730.48",
        "type": "Debit",
        "time": "2018-05-16T04:07:29 -06:-30"
      },
      {
        "customer_id": 5,
        "amount": "3,800.24",
        "type": "Debit",
        "time": "2019-04-16T02:03:08 -06:-30"
      },
]


export default { Customers, Transactions }