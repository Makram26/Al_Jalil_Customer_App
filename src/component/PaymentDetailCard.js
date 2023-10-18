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

export default function PaymentDetailCard({
    fileNo,
    reciptNo,
    paymentDate,
    mode,
    amount,
}) {
    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Text style={styles.headingText}>File no: {fileNo}</Text>
                {/* <TouchableOpacity onPress={navigation}>
                <Image style={{margin:15}} source={require("../assets/images/forward.png")} />
                </TouchableOpacity> */}
            </View>

            <View>
                <View style={styles.lowerContainer}>
                    <Text style={styles.textTitle}>Recipt #</Text>
                    <Text style={styles.textTitle}>Payment Data</Text>
                    <Text style={styles.textTitle}>Mode</Text>
                    <Text style={styles.textTitle}>Total Amount</Text>
                </View>

                <View style={[styles.lowerContainer,{paddingBottom:20}]}>
                    <Text style={styles.textValues}>{reciptNo}</Text>
                    <Text style={styles.textValues}>{paymentDate}</Text>
                    <Text style={styles.textValues}>{mode}</Text>
                    <Text style={styles.textValues}>RS.{amount}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        backgroundColor: '#FFFFFF',
        // borderRadius: 14,
        // margin: 12,
        marginBottom: 15,
        // marginHorizontal: 15,
    },

    headingText: {
        // margin:12,
        fontSize: 16,
        fontWeight: '400',
        color: "#000000",
    },

    upperContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        margin:12,
        // backgroundColor:"red"
    },

    lowerContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft:12,
        marginRight:12,
        paddingBottom:10

        // backgroundColor:"blue"


       
    },

    textTitle: {
        flex:1,
        fontSize: 10,
        fontWeight: '400',
        color: '#000000',
        textAlign:"left",
        // width: 70,
        marginVertical:5
    },
    textValues: {
        flex:1,
        fontSize: 10,
        fontWeight: '400',
        color: '#A6A6A6',

        // width: 70,
        marginBottom: 5
    },
    textPayment: {
        fontSize: 12,
        fontWeight: '400',
        color: '#CE0101'
    },
})
