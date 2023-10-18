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
import BackIcon from 'react-native-vector-icons/AntDesign';
import BellIcon from 'react-native-vector-icons/FontAwesome';
import Payment from '../../utils/PaymentData';
import TransacationLedgerCard from '../../component/TransacationLedgerCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import { AllHomeData } from '../../Services';

export default function TransactionLedger({ navigation }) {
    const [state, setState] = useState({
        transitionHistory: [],
        showPropertyDetail: true,
        paymentDetail: [],
        // selectIndex: null
    })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // getTransactionRecord()
    }, [])

    const getTransactionRecord = async () => {
        setLoading(true)
        let id = await AsyncStorage.getItem('user_id')
        let password = await AsyncStorage.getItem('password')
        if (id && password) {
            //   setLoading(true)
            AllHomeData(password, id).then((res) => {
                console.log("response home ", res)
                if (res.files && res.files.length > 0) {
                    setState({ ...state, transitionHistory: res.files, paymentDetail: res.all_installments })
                    setLoading(false)
                }
                else {
                    setLoading(false)
                    alert("Not exist any file!")
                }
            }).catch((error) => {
                setLoading(false)
                console.log(error)
                alert(error)
            })
        }
        else {
            setLoading(false)
            alert("Went some thing wrong...")
        }
    }
    return (
        <View style={styles.container}>
            {
                loading ?
                    <Spinner visible={true} />
                    :
                    null
            }
            <StatusBar animated={true} backgroundColor="#930000" />
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIcon name="arrowleft" size={25} color="#FFFFFF" />
                </TouchableOpacity>
                <View style={{ justifyContent: 'space-between', width: '90%', marginLeft: 10, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>

                        <Text style={styles.headerText}>Transaction Ledger</Text>
                    </TouchableOpacity>
                    <BellIcon name="bell" size={20} color="#FFFFFF" />
                </View>
            </View>

            {/* Flat List */}
            <FlatList
                data={Payment}
                // data={state.transitionHistory}
                keyExtractor={(items) => items.id}
                renderItem={({ item }) => {
                    return (
                        // <TransacationLedgerCard
                        //     filename={item.name}
                        //     tracking_id={item.id}
                        //     booking_date={item.booking_date}
                        //     phase_name={item.phase}
                        //     amount={item.total_amount}
                        //     navigation={() => navigation.navigate("PaymentDetails", { files: item, paymentDetail: state.paymentDetail })}
                        // />


                        //  this is old code require to user request and show only design side upper code is the latest code 
                        <TransacationLedgerCard
                            fileNo={item.fileNo}
                            reciptNo={item.receiptNo}
                            paymentDate={item.paymentDate}
                            mode={item.mode}
                            amount={item.amount}
                            navigation={() => navigation.navigate("PaymentDetails", { item })}
                        />

                    )
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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

    headerText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#FFFFFF',
    }
})