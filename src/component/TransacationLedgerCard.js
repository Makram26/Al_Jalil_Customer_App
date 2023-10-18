// import React from 'react';
// import {
//     Text,
//     View,
//     StyleSheet,
//     Image,
//     TouchableOpacity,
//     FlatList,
//     Alert,
//     ImageBackground,
//     ScrollView,
//     TextInput,
// } from 'react-native';

// export default function TransationLedgerCard({
//     filename,
//     tracking_id,
//     booking_date,
//     phase_name,
//     amount,
//     navigation,
// }) {
//     return (
//         <TouchableOpacity onPress={navigation != undefined ? navigation:null } style={[styles.container,{marginHorizontal: navigation != undefined ? 15 : 0, borderRadius: navigation != undefined ? 14 : 0,}]}>
//             <View style={styles.upperContainer}>
//                 <Text style={styles.headingText}>File no: {filename}</Text>
//                 {
//                     navigation != undefined ?
//                         <TouchableOpacity onPress={navigation}>
//                             <Image style={{ margin: 15, }} source={require("../assets/images/forward.png")} />
//                         </TouchableOpacity>
//                         :
//                         null
//                 }
//             </View>

//             <View>
//                 <View style={styles.lowerContainer}>
//                     <Text style={styles.textTitle}>Tracking id</Text>
//                     <Text style={styles.textTitle}>Booking Date</Text>
//                     <Text style={styles.textTitle}>Phase</Text>
//                     <Text style={styles.textTitle}>Total Amount</Text>
//                 </View>

//                 <View style={styles.lowerContainer}>
//                     <Text style={styles.textValues}>{tracking_id}</Text>
//                     <Text style={styles.textValues}>{booking_date}</Text>
//                     <Text style={styles.textValues}>{phase_name}</Text>
//                     <Text style={styles.textPayment}>RS.{amount}</Text>
//                 </View>
//             </View>
//         </TouchableOpacity>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#FFFFFF',

//         marginTop: 12,
//         padding: 10,

//     },

//     headingText: {
//         margin: 12,
//         fontSize: 16,
//         fontWeight: '400',
//         color: "#000000",
//     },

//     upperContainer: {
//         flexDirection: 'row',
//         justifyContent: "space-between"
//     },

//     lowerContainer: {
//         flexDirection: 'row',
//         justifyContent: "space-between",
//         marginLeft: 13
//     },

//     textTitle: {
//         fontSize: 10,
//         fontWeight: '400',
//         color: '#000000',
//         width: 70,
//         marginVertical: 5
//     },
//     textValues: {
//         fontSize: 10,
//         fontWeight: '400',
//         color: '#A6A6A6',
//         width: 70,
//         marginBottom: 5
//     },
//     textPayment: {
//         fontSize: 12,
//         fontWeight: '400',
//         color: '#CE0101'
//     },


// })




//  this is old code require to user request and show only design side upper code is the latest code 
import React from 'react';
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
} from 'react-native';

export default function TransationLedgerCard({
    fileNo,
    reciptNo,
    paymentDate,
    mode,
    amount,
    navigation,
}) {
    return (
        <TouchableOpacity onPress={navigation != undefined ? navigation : null} style={[styles.container, { marginHorizontal: navigation != undefined ? 15 : 0, borderRadius: navigation != undefined ? 14 : 0, }]}>
            <View style={styles.upperContainer}>
                <Text style={styles.headingText}>{fileNo}</Text>
                <TouchableOpacity onPress={navigation}>
                    <Image style={{ margin: 15, }} source={require("../assets/images/forward.png")} />
                </TouchableOpacity>
            </View>

            <View>
                <View style={styles.lowerContainer}>
                    <Text style={styles.textTitle}>Recipt #</Text>
                    <Text style={styles.textTitle}>Payment Data</Text>
                    <Text style={styles.textTitle}>Mode</Text>
                    <Text style={styles.textTitle}>Total Amount</Text>
                </View>

                <View style={styles.lowerContainer}>
                    <Text style={styles.textValues}>{reciptNo}</Text>
                    <Text style={styles.textValues}>{paymentDate}</Text>
                    <Text style={styles.textValues}>{mode}</Text>
                    <Text style={styles.textPayment}>RS.{amount}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        marginTop: 12,
        padding: 10,
        marginHorizontal: 15,
    },

    headingText: {
        margin: 12,
        fontSize: 16,
        fontWeight: '400',
        color: "#000000",
    },

    upperContainer: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    lowerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    textTitle: {
        fontSize: 10,
        fontWeight: '400',
        color: '#000000',
        width: 70,
        marginVertical: 5
    },
    textValues: {
        fontSize: 10,
        fontWeight: '400',
        color: '#A6A6A6',
        width: 70,
        marginBottom: 5
    },
    textPayment: {
        fontSize: 12,
        fontWeight: '400',
        color: '#CE0101'
    },


})

