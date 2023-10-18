// import React, { useState, useEffect } from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   FlatList,
//   Alert,
//   ImageBackground,
//   ScrollView,
//   TextInput,
//   StatusBar,
// } from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';
// import Feather from 'react-native-vector-icons/Feather'
// import BackIcon from 'react-native-vector-icons/AntDesign';
// import BellIcon from 'react-native-vector-icons/FontAwesome'
// import TransacationLedgerCard from '../../component/TransacationLedgerCard'
// import PaymentDetailCard from '../../component/PaymentDetailCard';
// import { color } from 'react-native-elements/dist/helpers';
// import Spinner from 'react-native-loading-spinner-overlay';


// export default function PaymentDetails({ route, navigation, }) {
//   // const totals = route.params.files.pending_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//   const userFiles = route.params.files
//   const [btnPaid, setBtnPaid] = useState(true)
//   const [btnUnPaid, setBtnUnPaid] = useState(false)
//   const [paidAmount, setPaidAmount] = useState([])
//   const [unPaidAmount, setUnpaidAmount] = useState([])
//   const [totalUnPaid, setTotalUnPaid] = useState("0")
//   const [totalPaid, setTotalPaid] = useState("0")
//   const [loading, setLoading] = useState(true)



//   console.log("files?>>>>>>>>>>>", userFiles)



//   // console.log("Total Amount", totals);


//   // console.log("file name", route.params.files)
//   // console.log("payment amount", route.params.paymentDetail)
//   // const items = route.params;
//   // console.log("items are", items)
//   // let paidAmountEntity = items.item.paid
//   // let unPaidAmountEntity = items.item.unpaid

//   useEffect(() => {
//     // setPaidAmount(paidAmountEntity)
//     // setUnpaidAmount(unPaidAmountEntity)
//     getPaymentDetails()

//   }, []);




//   const getPaymentDetails = async () => {
//     var tempPaid = []
//     var tempUnPaid = []
//     var TotalTempUnPaid = 0
//     var TotalTempPaid = 0
//     if (route.params.files.name && route.params.paymentDetail.length > 0) {
//       let getInstallment = await route.params.paymentDetail.filter(item => {
//         return route.params.files.name === item.file_name
//       })

//       for (let i = 0; i < getInstallment.length; i++) {
//         if (getInstallment[i].payment_status == "paid") {
//           // + symbol is used to convert string to number data type
//           // TotalTempPaid = TotalTempPaid + +getInstallment[i].amount_paid.trim().replace(/,/g, '')
//           tempPaid.push(getInstallment[i])
//         }
//         else {
//           // console.log("unpaid", getInstallment[i].residual.trim().replace(/,/g, ''));
//           // // + symbol is used to convert string to number data type
//           // TotalTempUnPaid = TotalTempUnPaid + +getInstallment[i].residual.trim().replace(/,/g, '')
//           tempUnPaid.push(getInstallment[i])
//         }
//       }
//     }
//     else {
//       // setLoadDate(false)
//       alert("Record Not Found")
//     }
//     setPaidAmount(tempPaid)
//     setUnpaidAmount(tempUnPaid)
//     // setTotalUnPaid(TotalTempUnPaid)
//     // setTotalPaid(TotalTempPaid)
//     setTimeout(() => {
//       setLoading(false)
//     }, 1000);
//   }




//   const changePaymentState = (id) => {
//     // console.log("id", id)
//     if (id == 1) {
//       setBtnPaid(true)
//       setBtnUnPaid(false)
//     }
//     if (id == 2) {
//       setBtnPaid(false)
//       setBtnUnPaid(true)
//     }
//   }


//   return (
//     <View style={styles.container}>
//       {
//         loading ?
//           <Spinner visible={true} />
//           :
//           null
//       }
//       <StatusBar animated={true} backgroundColor="#930000" />

//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <BackIcon name="arrowleft" size={25} color="#FFFFFF" />
//         </TouchableOpacity>
//         <View style={styles.headerTextContainer}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>

//             <Text style={styles.headerText}>Payment Details</Text>
//           </TouchableOpacity>
//           <BellIcon name="bell" size={20} color="#FFFFFF" />
//         </View>
//       </View>

//       {/* Payment State Change Button */}
//       <View style={styles.stateContainer}>
//         <TouchableOpacity
//           style={[styles.stateChengeBtn, { marginRight: 10, backgroundColor: btnPaid ? '#930000' : '#E3E3E7' }]}
//           onPress={() => changePaymentState(1)}>
//           <Text style={[styles.stateChangeText, { color: btnPaid ? '#FFFFFF' : '#7D7F88' }]}>Paid</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.stateChengeBtn, { backgroundColor: btnUnPaid ? '#930000' : '#E3E3E7' }]}
//           onPress={() => changePaymentState(2)}>
//           <Text style={[styles.stateChangeText, { color: btnUnPaid ? '#FFFFFF' : '#7D7F88' }]}>Unpaid</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Payment Card */}
//       {/* <PaymentDetailCard
//         fileNo={items.item.fileNo}
//         reciptNo={items.item.receiptNo}
//         paymentDate={items.item.paymentDate}
//         mode={items.item.mode}
//         amount={items.item.amount}
//       /> */}
//       <TransacationLedgerCard
//         filename={route.params.files.name}
//         tracking_id={route.params.files.id}
//         booking_date={route.params.files.booking_date}
//         phase_name={route.params.files.phase}
//         amount={route.params.files.total_amount}
//       // navigation={() => navigation.navigate("PaymentDetails", { files: item, paymentDetail: state.paymentDetail })}
//       />


//       {/* Payment Details */}
//       <View style={{ flex: 1, backgroundColor: '#F5F9FF', paddingTop: 15 }}>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5, marginLeft: 15 }} >
//           <Text style={styles.detailHeadingText}>Payment Type</Text>
//           <Text style={styles.detailHeadingText}>Paid Date</Text>
//           <Text style={styles.detailHeadingText}>Amount</Text>
//           <Text style={styles.detailHeadingText}>Paid</Text>
//           {
//             btnUnPaid && (
//               <Text style={styles.detailHeadingText}>Due</Text>
//             )
//           }
//         </View>
//         <View style={{ borderColor: "#535353", borderWidth: 0.5, backgroundColor: "#535353", marginVertical: 10 }} />

//         <FlatList
//           data={btnPaid === true ? paidAmount : unPaidAmount}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => {
//             return (
//               <>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5, marginLeft: 15 }} >
//                   <Text style={styles.detailText}>{item.installment_type}</Text>
//                   <Text style={styles.detailText}>{item.payment_date}</Text>
//                   <Text style={styles.detailText}>{item.amount.trim()}</Text>
//                   <Text style={[styles.detailText, { color: '#02DA39' }]}>{item.amount_paid.trim()}</Text>
//                   {
//                     btnUnPaid && (
//                       <Text style={[styles.detailText, { color: '#CE0101' }]}>{item.residual.trim()}</Text>
//                     )
//                   }
//                 </View>
//                 <View style={{ borderColor: "#535353", borderWidth: 0.5, marginVertical: 10 }} />
//               </>
//             )
//           }}
//         />
//         {/* <View style={{ borderColor: "#535353", borderWidth: 0.5,marginVertical: 10 }} /> */}
//         <View style={{ justifyContent: "space-between", flexDirection: "row", backgroundColor: "#FFFFFF", paddingBottom: 15, paddingTop: 15 }}>

//           {
//             btnPaid === true ?
//               <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
//                 <Text style={styles.bottomtext}>Total Paid Amount</Text>
//                 <Text style={[styles.bottomtext, { color: '#CE0101' }]}>RS:{userFiles.paid_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>

//               </View>

//               :
//               <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
//                 <Text style={styles.bottomtext}>Total UnPaid Amount</Text>
//                 <Text style={[styles.bottomtext, { color: '#CE0101' }]}>RS:{userFiles.remaining_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
//               </View>
//           }
//         </View>
//       </View>
//       {/* {
//         btnPaid == true ?
//           <View style={{ flex: 1, backgroundColor: '#F5F9FF' }}>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 12, paddingBottom: 5 }} >
//               <Text style={styles.detailHeadingText}>Payment Type</Text>
//               <Text style={styles.detailHeadingText}>Paid Date</Text>
//               <Text style={styles.detailHeadingText}>Amount</Text>
//               <Text style={styles.detailHeadingText}>Paid</Text>
//             </View>
//             <View style={{ borderColor: "#535353", borderWidth: 0.5, backgroundColor: "#535353", marginVertical: 10 }} />

//             <FlatList
//               data={paidAmount}
//               keyExtractor={(item) => item.id}
//               renderItem={({ item }) => {
//                 return (
//                   <>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 12, paddingBottom: 5 }} >
//                       <Text style={styles.detailText}>{item.paymentType}</Text>
//                       <Text style={styles.detailText}>{item.date}</Text>
//                       <Text style={styles.detailText}>{item.amount}</Text>
//                       <Text style={[styles.detailText, { color: '#02DA39' }]}>{item.paid}</Text>
//                     </View>
//                     <View style={{ borderColor: "#535353", borderWidth: 0.5, backgroundColor: "#535353", marginVertical: 10 }} />
//                   </>
//                 )
//               }}
//             />
//             <View style={{ borderColor: "#535353", borderWidth: 0.5, backgroundColor: "#535353", marginVertical: 10 }} />
//             <View style={{ justifyContent: "space-between", flexDirection: "row", marginBottom: 20 }}>
//               <Text style={styles.bottomtext}>Total Paid Amount</Text>
//               <Text style={[styles.bottomtext, { color: '#CE0101' }]}>RS.{items.item.totalPaidAmount}</Text>
//             </View>
//           </View>
//           :
//           <View style={{ flex: 1, backgroundColor: '#F5F9FF' }}>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 12, paddingBottom: 5 }} >
//               <Text style={styles.detailHeadingText}>Payment Type</Text>
//               <Text style={styles.detailHeadingText}>Due Date</Text>
//               <Text style={styles.detailHeadingText}>Amount</Text>
//               <Text style={styles.detailHeadingText}>Paid</Text>
//               <Text style={styles.detailHeadingText}>Due</Text>
//             </View>
//             <View style={{ borderColor: "#535353", borderWidth: 0.5, backgroundColor: "#535353", marginVertical: 10 }} />

//             <FlatList
//               data={unPaidAmount}
//               keyExtractor={(item) => item.id}
//               renderItem={({ item }) => {
//                 return (
//                   <>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 12, paddingBottom: 5 }} >
//                       <Text style={styles.detailText}>{item.paymentType}</Text>
//                       <Text style={styles.detailText}>{item.dueDate}</Text>
//                       <Text style={styles.detailText}>{item.amount}</Text>
//                       <Text style={styles.detailText}>{item.paid}</Text>
//                       <Text style={[styles.detailText, { color: '#CE0101' }]}>{item.due}</Text>
//                     </View>
//                     <View style={{ borderColor: "#535353", borderWidth: 0.5, backgroundColor: "#535353", marginVertical: 10 }} />
//                   </>
//                 )
//               }}
//             />
//             <View style={{ borderColor: "#535353", borderWidth: 0.5, backgroundColor: "#535353", marginVertical: 10 }} />
//             <View style={{ justifyContent: "space-between", flexDirection: "row", marginBottom: 20 }}>
//               <Text style={styles.bottomtext}>Total Due Amount</Text>
//               <Text style={[styles.bottomtext, { color: '#CE0101' }]}>RS.{items.item.totalDueAmount}</Text>
//             </View>
//           </View>
//       } */}

//     </View>
//   )

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5'
//   },

//   header: {
//     backgroundColor: '#930000',
//     height: 70,
//     width: "100%",
//     paddingHorizontal: 15,
//     flexDirection: 'row',
//     alignItems: 'center'
//   },
//   headerTextContainer: {
//     justifyContent: 'space-between',
//     width: '90%',
//     marginLeft: 10,
//     flexDirection: 'row'
//   },
//   headerText: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: '#FFFFFF',
//   },


//   stateContainer: {
//     flexDirection: 'row',
//     width: '60%',
//     margin: 20,
//     alignSelf: 'center',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   stateChengeBtn: {
//     height: 35,
//     // width: 135,
//     flex: 1,
//     borderRadius: 6,
//     borderWidth: 0.8,
//     borderColor: '#E3E3E7',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   stateChangeText: {
//     fontSize: 14,
//     fontWeight: "400",
//   },


//   detailHeadingText: {
//     color: '#CE0101',
//     fontSize: 10,
//     fontWeight: '400',
//     flex: 1
//   },
//   detailText: {
//     color: '#788190',
//     fontSize: 10,
//     fontWeight: '400',
//     flex: 1
//   },


//   bottomtext: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#000000',
//     marginHorizontal: 20,
//   }
// })




//  this is old code require to user request and show only design side upper code is the latest code 
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  ImageBackground,
  ScrollView,
  TextInput,
  StatusBar,
} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Feather from 'react-native-vector-icons/Feather'
import BackIcon from 'react-native-vector-icons/AntDesign';
import BellIcon from 'react-native-vector-icons/FontAwesome'
import TransationLedgerCard from '../../component/TransacationLedgerCard';
import PaymentDetailCard from '../../component/PaymentDetailCard';
import { color } from 'react-native-elements/dist/helpers';

export default function PaymentDetails({ route, navigation }) {
  const items = route.params;
  console.log("items are????????????????????????????????????", items)
  let paidAmountEntity = items.item.paid
  let unPaidAmountEntity = items.item.unpaid

  useEffect(() => {
    setPaidAmount(paidAmountEntity)
    setUnpaidAmount(unPaidAmountEntity)
  }, []);

  const [paidAmount, setPaidAmount] = useState([])
  const [unPaidAmount, setUnpaidAmount] = useState([])

  // console.log("Paid Amount is", paidAmount)
  console.log("UnPaid Amount is", unPaidAmountEntity)

  const [btnPaid, setBtnPaid] = useState(true)
  const [btnUnPaid, setBtnUnPaid] = useState(false)

  const changePaymentState = (id) => {
    // console.log("id", id)
    if (id == 1) {
      setBtnPaid(true)
      setBtnUnPaid(false)
    }
    if (id == 2) {
      setBtnPaid(false)
      setBtnUnPaid(true)
    }
  }


  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#930000" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon name="arrowleft" size={25} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Payment Details</Text>
          <BellIcon name="bell" size={20} color="#FFFFFF" />
        </View>
      </View>

      {/* Payment State Change Button */}
      <View style={styles.stateContainer}>
        <TouchableOpacity
          style={[styles.stateChengeBtn, { marginRight: 10, backgroundColor: btnPaid ? '#930000' : '#E3E3E7' }]}
          onPress={() => changePaymentState(1)}>
          <Text style={[styles.stateChangeText, { color: btnPaid ? '#FFFFFF' : '#7D7F88' }]}>Paid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.stateChengeBtn, { backgroundColor: btnUnPaid ? '#930000' : '#E3E3E7' }]}
          onPress={() => changePaymentState(2)}>
          <Text style={[styles.stateChangeText, { color: btnUnPaid ? '#FFFFFF' : '#7D7F88' }]}>Unpaid</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Card */}
      <PaymentDetailCard
        fileNo={items.item.fileNo}
        reciptNo={items.item.receiptNo}
        paymentDate={items.item.paymentDate}
        mode={items.item.mode}
        amount={items.item.amount}
      />

      {/* Payment Details */}
      {
        btnPaid == true ?
          <View style={{flex: 1,  backgroundColor: '#F5F9FF' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 12, paddingBottom: 5 }} >
              <Text style={styles.detailHeadingText}>Payment Type</Text>
              <Text style={styles.detailHeadingText}>Paid Date</Text>
              <Text style={styles.detailHeadingText}>Amount</Text>
              <Text style={styles.detailHeadingText}>Paid</Text>
            </View>
            <View style={{ borderColor: "#535353", borderWidth: 0.5, backgroundColor: "#535353", marginVertical: 10 }} />

            <FlatList
              data={paidAmount}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 12, paddingBottom: 5 }} >
                      <Text style={styles.detailText}>{item.paymentType}</Text>
                      <Text style={styles.detailText}>{item.date}</Text>
                      <Text style={styles.detailText}>{item.amount}</Text>
                      <Text style={[styles.detailText, { color: '#02DA39' }]}>{item.paid}</Text>
                    </View>
                    <View style={{ borderColor: "#535353", borderWidth: 0.5, backgroundColor: "#535353", marginVertical: 10 }} />
                  </>
                )
              }}
            />
            <View style={{ borderColor: "#535353", borderWidth: 0.5, backgroundColor: "#535353", marginVertical: 10 }} />
            <View style={{justifyContent:"space-between",flexDirection:"row", marginBottom: 20 }}>
              <Text style={styles.bottomtext}>Total Paid Amount</Text>
              <Text style={[styles.bottomtext, { color: '#CE0101' }]}>RS.{items.item.totalPaidAmount}</Text>
            </View>
          </View>
          :
          <View style={{flex: 1, backgroundColor: '#F5F9FF' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 12, paddingBottom: 5 }} >
              <Text style={styles.detailHeadingText}>Payment Type</Text>
              <Text style={styles.detailHeadingText}>Due Date</Text>
              <Text style={styles.detailHeadingText}>Amount</Text>
              <Text style={styles.detailHeadingText}>Paid</Text>
              <Text style={styles.detailHeadingText}>Due</Text>
            </View>
            <View style={{ borderColor: "#535353", borderWidth: 0.5, backgroundColor: "#535353", marginVertical: 10 }} />

            <FlatList
              data={unPaidAmount}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 12, paddingBottom: 5 }} >
                      <Text style={styles.detailText}>{item.paymentType}</Text>
                      <Text style={styles.detailText}>{item.dueDate}</Text>
                      <Text style={styles.detailText}>{item.amount}</Text>
                      <Text style={styles.detailText}>{item.paid}</Text>
                      <Text style={[styles.detailText, { color: '#CE0101' }]}>{item.due}</Text>
                    </View>
                    <View style={{ borderColor: "#535353", borderWidth: 0.5, backgroundColor: "#535353", marginVertical: 10 }} />
                  </>
                )
              }}
            />
            <View style={{ borderColor: "#535353", borderWidth: 0.5, backgroundColor: "#535353", marginVertical: 10 }} />
            <View style={{justifyContent:"space-between",flexDirection:"row", marginBottom: 20 }}>
              <Text style={styles.bottomtext}>Total Due Amount</Text>
              <Text style={[styles.bottomtext, { color: '#CE0101' }]}>RS.{items.item.totalDueAmount}</Text>
            </View>
          </View>
      }

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },

  header: {
    backgroundColor: '#930000',
    height: 70,
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTextContainer: {
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: 10,
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },


  stateContainer: {
    flexDirection: 'row',
    width: '60%',
    margin: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  stateChengeBtn: {
    height: 35,
    // width: 135,
    flex: 1,
    borderRadius: 6,
    borderWidth: 0.8,
    borderColor: '#E3E3E7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stateChangeText: {
    fontSize: 14,
    fontWeight: "400",
  },


  detailHeadingText: {
    color: '#CE0101',
    fontSize: 10,
    fontWeight: '400',
    flex: 1
  },
  detailText: {
    color: '#788190',
    fontSize: 10,
    fontWeight: '400',
    flex: 1
  },


  bottomtext: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginHorizontal: 20,
  }
})
