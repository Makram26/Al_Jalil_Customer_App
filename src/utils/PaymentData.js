const Payment = [
    {
        id: 1,
        fileNo: "INT/00026",
        receiptNo: "CUST.IN/2021/6638",
        paymentDate: '22-08-2022',
        mode: 'Cash',
        amount: 50700000,
        totalPaidAmount: 30700000,
        totalDueAmount: 50700000,
        paid: [
             {
                id:11,
                paymentType: 'Installment',
                date: '2022-08-22',
                amount: 20000000,
                paid: 20000000
            },
             {
                id:12,
                paymentType: 'Installment',
                date: '2022-08-22',
                amount: 12000000,
                paid: 20000000
            },
             {
                id:13,
                paymentType: 'Installment',
                date: '2022-08-22',
                amount: 20000000,
                paid: 20000000
            },
             {
                id:14,
                paymentType: 'Installment',
                date: '2022-08-22',
                amount: 19000000,
                paid: 20000000
            },
          
            {
                id:15,
                paymentType: 'Down',
                date: '2022-08-22',
                amount: 12300000,
                paid: 20000000
            },
        ],
        unpaid:[
            {
                id: 11,
                paymentType: 'Installment',
                dueDate: '2022-08-22',
                amount: 20000000,
                paid: 20000000,
                due: 20000000,
            },
            {
                id: 12,
                paymentType: 'Installment',
                dueDate: '2022-08-22',
                amount: 20000000,
                paid: 20000000,
                due: 20000000,
            },
            {
                id: 13,
                paymentType: 'Installment',
                dueDate: '2022-08-22',
                amount: 20000000,
                paid: 20000000,
                due: 20000000,
            },
            {
                id: 14,
                paymentType: 'Installment',
                dueDate: '2022-08-22',
                amount: 20000000,
                paid: 20000000,
                due: 20000000,
            },
           
            {
                id: 15,
                paymentType: 'Down',
                dueDate: '2022-08-22',
                amount: 20000000,
                paid: 20000000,
                due: 20000000,
            },
        ]
    },

    {
        id: 2,
        fileNo: "INT/00027",
        receiptNo: "CUST.IN/2021/6637",
        paymentDate: '24-08-2022',
        mode: 'Check',
        amount: 2000000,
        totalPaidAmount: 1200000,
        totalDueAmount: 800000,
        paid: [
            {
               id:11,
               paymentType: 'Installment',
               date: '2022-08-22',
               amount: 200000,
               paid: 200000
           },
            {
               id:12,
               paymentType: 'Installment',
               date: '2022-08-22',
               amount: 200000,
               paid: 200000
           },
            {
               id:13,
               paymentType: 'Installment',
               date: '2022-08-22',
               amount: 200000,
               paid: 200000
           },
            {
               id:14,
               paymentType: 'Installment',
               date: '2022-08-22',
               amount: 200000,
               paid: 200000
           },
           {
            id:15,
            paymentType: 'Installment',
            date: '2022-08-22',
            amount: 200000,
            paid: 200000
        },
           {
               id:16,
               paymentType: 'Down',
               date: '2022-08-22',
               amount: 200000,
               paid: 200000
           },
       ],
       unpaid:[
           {
               id: 11,
               paymentType: 'Installment',
               dueDate: '2022-08-22',
               amount: 200000,
               paid: 200000,
               due: 200000,
           },
           {
               id: 12,
               paymentType: 'Installment',
               dueDate: '2022-08-22',
               amount: 200000,
               paid: 200000,
               due: 200000,
           },
           {
               id: 13,
               paymentType: 'Installment',
               dueDate: '2022-08-22',
               amount: 200000,
               paid: 200000,
               due: 200000,
           },
           {
               id: 14,
               paymentType: 'Installment',
               dueDate: '2022-08-22',
               amount: 200000,
               paid: 200000,
               due: 200000,
           },
        //    {
        //        id: 15,
        //        paymentType: 'Down',
        //        dueDate: '2022-08-22',
        //        amount: 20000000,
        //        paid: 20000000,
        //        due: 20000000,
        //    },
       ]

    }
]

export default Payment;