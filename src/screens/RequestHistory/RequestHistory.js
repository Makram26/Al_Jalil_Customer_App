import { View, Text, StatusBar, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Colors'
import { Helpdesk_Styles } from '../../constants/Styles'

import BackIcon from 'react-native-vector-icons/AntDesign';
import BellIcon from 'react-native-vector-icons/FontAwesome';
import CorssIcon from 'react-native-vector-icons/Entypo';



import { Header_Styles } from '../../constants/Styles';
const RequestHistory = ({ navigation }) => {
    const [ticketRecord, setTicketRecord] = useState([
        {
            id: 1,
            name: "TEST"
        },
        {
            id: 2,
            name: "Result"
        },
        {
            id: 3,
            name: "Result"
        },

    ])
    const [showHide, setShowHide] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    return (
        <View style={Helpdesk_Styles.main_container}>
            <StatusBar animated={true} backgroundColor={Colors.btn_color} />
            <View style={Header_Styles.Header_container}>
                <View style={Header_Styles.headerTextContainer}>
                    <TouchableOpacity style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}  onPress={() => navigation.goBack()} >
                        <BackIcon name="arrowleft" size={25} color="#FFFFFF" />
                        <Text style={Header_Styles.headerText}>Request History</Text>
                    </TouchableOpacity>
                    
                </View>
                <View>
                    <BellIcon name="bell" size={20} color="#FFFFFF" />
                </View>
            </View>
            <View style={Helpdesk_Styles.body}>
                {/* <View style={Helpdesk_Styles.headingContainer}>
                    <Text style={Helpdesk_Styles.HeadingText}></Text>

                </View> */}
                {
                    showHide === false ?
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={Helpdesk_Styles.emptyHistory}>coming soon...........
                                {/* Don't have any History */}
                                </Text>
                        </View>
                        :
                        <ScrollView showsVerticalScrollIndicator={false} style={Helpdesk_Styles.RecordContainer}>
                            {
                                ticketRecord.map((item) => {
                                    return (
                                        <View style={Helpdesk_Styles.dataContainer}>
                                            <View style={Helpdesk_Styles.headingView}>
                                                <Text style={Helpdesk_Styles.TicketNoText}>Ticket No: 00027</Text>
                                                <Text style={Helpdesk_Styles.dateText}>20-10-2022</Text>
                                            </View>
                                            <View style={Helpdesk_Styles.RowHeading}>
                                                <Text style={[Helpdesk_Styles.RowHeadingText, { textAlign: "left" }]}>Ticket Type</Text>
                                                <Text style={Helpdesk_Styles.RowHeadingText}>Customer</Text>
                                                <Text style={[Helpdesk_Styles.RowHeadingText, { textAlign: "right" }]}>Priority</Text>
                                            </View>
                                            <View style={[Helpdesk_Styles.RowHeading, { marginTop: 5 }]}>
                                                <Text style={[Helpdesk_Styles.RowText, { textAlign: "left" }]}>commercial</Text>
                                                <Text style={Helpdesk_Styles.RowText}>Akram</Text>
                                                <Text style={[Helpdesk_Styles.RowText, { color: "#CE0101", fontSize: 14, textAlign: "right" }]}>Low</Text>
                                            </View>
                                            <View style={Helpdesk_Styles.RowHeading}>
                                                <Text style={[Helpdesk_Styles.RowHeadingText, { textAlign: "left" }]}>Title</Text>
                                                <Text style={Helpdesk_Styles.RowHeadingText}></Text>
                                                <Text style={[Helpdesk_Styles.RowHeadingText, { textAlign: "right" }]}></Text>
                                            </View>
                                            <View style={[Helpdesk_Styles.RowHeading, { marginTop: 5 }]}>
                                                <Text style={[Helpdesk_Styles.RowText, { textAlign: "left" }]}>Al-Jalil</Text>
                                                <Text style={Helpdesk_Styles.RowText}></Text>
                                                <Text style={[Helpdesk_Styles.RowText, { color: "#CE0101", fontSize: 14, textAlign: "right" }]}></Text>
                                            </View>


                                        </View>
                                    )
                                })
                            }


                        </ScrollView>

                }
                {/* <View style={Helpdesk_Styles.BottomContainer}>
                    <TouchableOpacity onPress={() => setModalShow(!modalShow)} style={Helpdesk_Styles.btnContainer}>
                        <Text style={Helpdesk_Styles.btnText}>New Request</Text>
                    </TouchableOpacity>

                </View> */}

            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalShow}
                onRequestClose={() => {
                    setModalShow(!modalShow);
                }}>
                <View style={Helpdesk_Styles.overlayView}>
                    <View style={Helpdesk_Styles.Modal_MainContainer}>
                        <View style={Helpdesk_Styles.ModalContainer}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={Helpdesk_Styles.ModalHeadingText}>Select Request Type</Text>
                                <TouchableOpacity onPress={() => setModalShow(!modalShow)}>
                                    <CorssIcon name="cross" size={20} color="#000000" />

                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => { navigation.navigate("TransferRequest"), setShowHide(true),setModalShow(false) }} style={Helpdesk_Styles.ModalBtn}>
                                <Text style={Helpdesk_Styles.ModalBtnText}>Transfer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Helpdesk_Styles.ModalBtn}>
                                <Text style={Helpdesk_Styles.ModalBtnText}>Cancellation</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>



            </Modal>





        </View>
    )
}

export default RequestHistory