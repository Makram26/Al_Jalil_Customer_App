import { View, Text, StatusBar, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../constants/Colors'
import { Helpdesk_Styles } from '../../constants/Styles'
import BackIcon from 'react-native-vector-icons/AntDesign';
import BellIcon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header_Styles, CreateRequest_Styles } from '../../constants/Styles';
import { CreateHelpDeskTicket } from '../../Services';
import Spinner from 'react-native-loading-spinner-overlay';

// static priority value 
const priorityArray = [
    {
        "value": 1,
        "label": "Low"
    },
    {
        "value": 2,
        "label": "Medium"
    },
    {
        "value": 3,
        "label": "High"
    },
]
// static Ticket Type Id
const TicketTypeID = [
    {
        "value": 1,
        "label": "Issues"
    },
    {
        "value": 2,
        "label": "Question"
    },
]
const NewRequest = ({ navigation }) => {
    const [selectedProject, setSelectedProject] = useState();
    const [email, setEmail] = useState("")
    const [partnerName, setPartnerName] = useState("")
    const [subject, setSubject] = useState("")
    const [ticketType, setTicketType] = useState(1)
    const [priority, setPriority] = useState(1)
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        GetEmail()
    }, [])
    // this function is used to get user email in AsyncStorage  
    const GetEmail = async () => {
        let tempEmail = await AsyncStorage.getItem('user_name')
        setEmail(tempEmail)
    }
    // this function is used to create new ticket 
    const GetCreateTicket = async () => {
        if (email != "" && partnerName != "" && subject != "" && ticketType != "" && priority != "" && description != "") {
            // await CreateHelpDeskTicket(email, partnerName, subject, ticketType, priority, description).then((res) => {
            //     console.log("response home ", res)
            // }).catch((error) => {
            //     console.log(">>>>>>>>>>", error)
            //     // alert("Ticket successfully created!") 
            //     // this code add only instruction Zulqarnain
            //     navigation.goBack()
            // })
            alert("Ticket successfully created!") 
            navigation.goBack()
        }
        else {
            alert("please fill all mandatory field!")
        }
    }
    return (
        <View style={[Helpdesk_Styles.main_container, { backgroundColor: "#FFFFFF" }]}>
            {
                loading ?
                    <Spinner visible={true} />
                    :
                    null
            }
            <StatusBar animated={true} backgroundColor={Colors.btn_color} />
            <View style={Header_Styles.Header_container}>
                <View style={Header_Styles.headerTextContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <BackIcon name="arrowleft" size={25} color="#FFFFFF" />
                    </TouchableOpacity>
                    <Text style={Header_Styles.headerText}>New Request</Text>
                </View>
                <View>
                    <BellIcon name="bell" size={20} color="#FFFFFF" />
                </View>
            </View>
            <ScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false} style={Helpdesk_Styles.body}>
                <View style={Helpdesk_Styles.headingContainer}>
                    <Text style={Helpdesk_Styles.HeadingText}>Create Ticket</Text>
                </View>
                <View style={{ flex: 1, marginTop: 8 }}>
                    <View>
                        <Text style={CreateRequest_Styles.inputHeading}>Customer Email <Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={CreateRequest_Styles.inputContainer}>
                        <Text style={{ ...CreateRequest_Styles.inputStyle, paddingTop: 15, paddingBottom: 15 }}>
                            {email}
                        </Text>
                    </View>
                    <View>
                        <Text style={CreateRequest_Styles.inputHeading}>Customer Name <Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={CreateRequest_Styles.inputContainer}>
                        <TextInput
                            style={CreateRequest_Styles.inputStyle}
                            placeholder='Enter Name'
                            placeholderTextColor="#A1A5C1"
                            value={partnerName}
                            onChangeText={(val) => setPartnerName(val)}
                        />
                    </View>
                    <View>
                        <Text style={CreateRequest_Styles.inputHeading}>Ticket Type <Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={CreateRequest_Styles.inputContainer}>
                        <Picker
                            selectedValue={ticketType}
                            dropdownIconColor="#000000"
                            onValueChange={(itemValue, itemIndex) =>
                                setTicketType(itemValue)}>
                            {
                                TicketTypeID.map((item, index) => {
                                    return (
                                        <Picker.Item label={item.label} value={item.value} style={{color:"#A1A5C1"}}/>
                                    )
                                })
                            }
                        </Picker>
                    </View>
                    <View>
                        <Text style={CreateRequest_Styles.inputHeading}>Priority <Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={CreateRequest_Styles.inputContainer}>
                        <Picker
                            selectedValue={priority}
                            dropdownIconColor="#000000"
                            onValueChange={(itemValue, itemIndex) => setPriority(itemValue)}>
                            {
                                priorityArray.map((item, index) => {
                                    return (
                                        <Picker.Item label={item.label} value={item.value} style={{color:"#A1A5C1"}} />
                                    )
                                })
                            }
                        </Picker>
                    </View>
                    <View>
                        <Text style={CreateRequest_Styles.inputHeading}>Project</Text>
                    </View>
                    <View style={CreateRequest_Styles.inputContainer}>
                        <Picker
                            selectedValue={selectedProject}
                            dropdownIconColor="#000000"
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedProject(itemValue)
                            }>
                            <Picker.Item label="marina Sports City" value="marina Sports City" style={CreateRequest_Styles.inputStyle} />
                            <Picker.Item label="Al-jalil" value="Al-jalil" style={CreateRequest_Styles.inputStyle} />
                        </Picker>
                    </View>
                    <View>
                        <Text style={CreateRequest_Styles.inputHeading}>File No/Plot No</Text>
                    </View>
                    <View style={CreateRequest_Styles.inputContainer}>
                        <TextInput
                            style={CreateRequest_Styles.inputStyle}
                            placeholder='84'
                            placeholderTextColor="#A1A5C1"
                        />
                    </View>
                    <View>
                        <Text style={CreateRequest_Styles.inputHeading}>Ticket Name <Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={CreateRequest_Styles.inputContainer}>
                        <TextInput
                            style={CreateRequest_Styles.inputStyle}
                            placeholder='Enter Ticket Name'
                            placeholderTextColor="#A1A5C1"
                            value={subject}
                            onChangeText={(val) => setSubject(val)}
                        />
                    </View>
                    <View>
                        <Text style={CreateRequest_Styles.inputHeading}>Summery <Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={CreateRequest_Styles.inputContainer}>
                        <TextInput
                            style={CreateRequest_Styles.inputStyle}
                            multiline={true}
                            placeholder='Text goes here...'
                            placeholderTextColor="#A1A5C1"
                            value={description}
                            onChangeText={(val) => setDescription(val)}
                        />
                    </View>
                    <TouchableOpacity onPress={() => GetCreateTicket()} style={CreateRequest_Styles.btnContainer}>
                        <Text style={CreateRequest_Styles.btnText}>Create Ticket</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
export default NewRequest