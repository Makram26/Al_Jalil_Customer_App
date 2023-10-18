import { View, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../constants/Colors'
import { Helpdesk_Styles } from '../../constants/Styles'

import BackIcon from 'react-native-vector-icons/AntDesign';
import BellIcon from 'react-native-vector-icons/FontAwesome';


import { Header_Styles } from '../../constants/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import { HelpDeskGET } from '../../Services';
const History = ({ navigation }) => {
    const [ticketRecord, setTicketRecord] = useState([
        {
            id: 1,
            name: "TEST"
        },
        {
            id: 2,
            name: "Result"
        },

    ])
    const [showHide, setShowHide] = useState(false)
    const [loading, setLoading] = useState(false)
    const [allTicket, setAllTicket] = useState([])

    useEffect(() => {
        // getAllTicket()
        const unsubscribe = navigation.addListener('focus', () => {
            setShowHide(true)
            // getAllTicket()
        });

        return () => {
            unsubscribe;
        };

    }, [])

    const getAllTicket = async () => {
        setLoading(true)
        let id = await AsyncStorage.getItem('user_id')
        let password = await AsyncStorage.getItem('password')

        if (id && password) {
            setLoading(true)
            HelpDeskGET(password, id).then((res) => {
                // console.log("response home ", res)
                setShowHide(true)
                setLoading(false)
                setAllTicket(res.tickets)
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
        <View style={Helpdesk_Styles.main_container}>
            {
                loading ?
                    <Spinner visible={true} />
                    :
                    null
            }
            <StatusBar animated={true} backgroundColor={Colors.btn_color} />
            <View style={Header_Styles.Header_container}>
                <View style={Header_Styles.headerTextContainer}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} onPress={() => navigation.goBack()} >
                        <BackIcon name="arrowleft" size={25} color="#FFFFFF" />
                        <Text style={Header_Styles.headerText}>Help Desk History</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <BellIcon name="bell" size={20} color="#FFFFFF" />
                </View>
            </View>
            <View style={Helpdesk_Styles.body}>
                <View style={Helpdesk_Styles.headingContainer}>
                    <Text style={Helpdesk_Styles.HeadingText}>Ticket History</Text>

                </View>
                {
                    showHide === false ?
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={Helpdesk_Styles.emptyHistory}>Ticket History does not exist!</Text>
                        </View>
                        :
                        <ScrollView showsVerticalScrollIndicator={false} style={Helpdesk_Styles.RecordContainer}>
                            {/* {
                                allTicket && allTicket.reverse().map((item) => {
                                    return ( */}
                                        <View style={Helpdesk_Styles.dataContainer}>
                                            <View style={Helpdesk_Styles.headingView}>
                                                <Text style={Helpdesk_Styles.TicketNoText}>Ticket No: 00027</Text>
                                                <Text style={Helpdesk_Styles.dateText}>20-10-2022</Text>
                                                {/* <Text style={Helpdesk_Styles.TicketNoText}>Ticket No: {item.number}</Text>
                                                <Text style={Helpdesk_Styles.dateText}>{item.date}</Text> */}
                                            </View>
                                            <View style={Helpdesk_Styles.RowHeading}>
                                                <Text style={[Helpdesk_Styles.RowHeadingText, { textAlign: "left" }]}>Ticket Type</Text>
                                                <Text style={[Helpdesk_Styles.RowHeadingText, { flex: 2 }]}>Customer</Text>
                                                <Text style={[Helpdesk_Styles.RowHeadingText, { textAlign: "right" }]}>Priority</Text>
                                            </View>
                                            <View style={[Helpdesk_Styles.RowHeading, { marginTop: 5 }]}>

                                                <Text style={[Helpdesk_Styles.RowText, { textAlign: "left" }]}>commercial</Text>
                                                <Text style={Helpdesk_Styles.RowText}>Akram</Text>
                                                <Text style={[Helpdesk_Styles.RowText, { color: "#CE0101", fontSize: 14, textAlign: "right" }]}>Low</Text>

                                                {/* <Text style={[Helpdesk_Styles.RowText, { textAlign: "left" }]}>{item.ticket_type}</Text>
                                                <Text style={[Helpdesk_Styles.RowText, { flex: 2 }]}>{item.customer_name}</Text>
                                                <Text style={[Helpdesk_Styles.RowText, { color: "#CE0101", fontSize: 14, textAlign: "right" }]}>{item.priority == 1 ? "Low" : item.priority == 2 ? "Medium" : "High"}</Text> */}
                                            </View>
                                            <View style={Helpdesk_Styles.RowHeading}>
                                                <Text style={[Helpdesk_Styles.RowHeadingText, { textAlign: "left" }]}>Title</Text>
                                                <Text style={Helpdesk_Styles.RowHeadingText}></Text>
                                                <Text style={[Helpdesk_Styles.RowHeadingText, { textAlign: "right" }]}></Text>
                                            </View>
                                            <View style={[Helpdesk_Styles.RowHeading, { marginTop: 5 }]}>
                                            <Text style={[Helpdesk_Styles.RowText, { textAlign: "left" }]}>Al-Jalil</Text>
                                                {/* <Text style={[Helpdesk_Styles.RowText, { textAlign: "left" }]}>{item.name}</Text> */}
                                                <Text style={Helpdesk_Styles.RowText}></Text>
                                                <Text style={[Helpdesk_Styles.RowText, { color: "#CE0101", fontSize: 14, textAlign: "right" }]}></Text>
                                            </View>


                                        </View>
                                    {/* )
                                })
                            } */}


                        </ScrollView>

                }
                <View style={Helpdesk_Styles.BottomContainer}>
                    <TouchableOpacity onPress={() => { navigation.navigate("NewRequest"), setShowHide(true) }} style={Helpdesk_Styles.btnContainer}>
                        <Text style={Helpdesk_Styles.btnText}>Create Ticket</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}

export default History