import { View, Text, StatusBar, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Colors'
import { Helpdesk_Styles } from '../../constants/Styles'
import BackIcon from 'react-native-vector-icons/AntDesign';
import BellIcon from 'react-native-vector-icons/FontAwesome';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import { Header_Styles, CreateRequest_Styles } from '../../constants/Styles';
const TransferRequest = ({ navigation }) => {
    const [selectedProject, setSelectedProject] = useState();
    const [showHide, setShowHide] = useState(true)
    return (
        <View style={[Helpdesk_Styles.main_container, { backgroundColor: "#FFFFFF" }]}>
            <StatusBar animated={true} backgroundColor={Colors.btn_color} />
            <View style={Header_Styles.Header_container}>
                <View style={Header_Styles.headerTextContainer}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} onPress={() => navigation.goBack()} >
                        <BackIcon name="arrowleft" size={25} color="#FFFFFF" />
                        <Text style={Header_Styles.headerText}>New Transfer Request</Text>

                    </TouchableOpacity>
                </View>
                <View>
                    <BellIcon name="bell" size={20} color="#FFFFFF" />
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={Helpdesk_Styles.body}>
                <View style={[Helpdesk_Styles.headingContainer, { flexDirection: "row", justifyContent: "space-between" }]}>
                    <Text style={Helpdesk_Styles.HeadingText}>Member Details</Text>
                    <Text style={[Helpdesk_Styles.HeadingText, { fontSize: 12 }]}>Request id/<Text style={{ color: "red" }}>12334</Text></Text>
                </View>
                <View style={{ flex: 1, marginTop: 8 }}>
                    <View>
                        <Text style={CreateRequest_Styles.inputHeading}>Full Name</Text>
                    </View>
                    <View style={CreateRequest_Styles.inputContainer}>
                        <TextInput
                            style={CreateRequest_Styles.inputStyle}
                            placeholder="Enter Your Name"
                        />
                    </View>
                    <View>
                        <Text style={CreateRequest_Styles.inputHeading}>Father Name</Text>
                    </View>
                    <View style={CreateRequest_Styles.inputContainer}>
                        <TextInput
                            style={CreateRequest_Styles.inputStyle}
                            placeholder="Enter Your Father Name"
                        />

                    </View>
                    <View>
                        <Text style={CreateRequest_Styles.inputHeading}>CNIC Number</Text>
                    </View>
                    <View style={CreateRequest_Styles.inputContainer}>
                        <TextInput
                            style={CreateRequest_Styles.inputStyle}
                            placeholder='Enter Your CNIC e.g 99999-9999999-9'
                        />
                    </View>
                    <View>
                        <Text style={CreateRequest_Styles.inputHeading}>Member Number</Text>
                    </View>
                    <View style={CreateRequest_Styles.inputContainer}>
                        <TextInput
                            style={CreateRequest_Styles.inputStyle}
                            placeholder='Enter Your Member Number e.g MRN-013929'
                        />
                    </View>

                    <View>
                        <Text style={CreateRequest_Styles.inputHeading}>Select File Number</Text>
                    </View>
                    <View style={CreateRequest_Styles.inputContainer}>
                        <Picker
                            selectedValue={selectedProject}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedProject(itemValue)
                            }>
                            <Picker.Item label="NCH-013929" value="NCH-013929" style={CreateRequest_Styles.inputStyle} />
                            <Picker.Item label="NCH-013930" value="NCH-013930" style={CreateRequest_Styles.inputStyle} />
                            <Picker.Item label="NCH-014030" value="NCH-014030" style={CreateRequest_Styles.inputStyle} />

                        </Picker>
                    </View>
                    <View>
                        <Text style={CreateRequest_Styles.inputHeading}>Request Type</Text>
                    </View>
                    <View style={CreateRequest_Styles.inputContainer}>
                        <Text style={[CreateRequest_Styles.inputStyle, { padding: 16 }]}>Transfer</Text>
                    </View>
                    <Text style={{ color: "#070707", fontWeight: "500", fontSize: 14, marginBottom: 15 }}>Transferred Details</Text>
                    <View >
                        <Text style={CreateRequest_Styles.inputHeading}>Enter CNIC</Text>
                    </View>
                    <View style={[CreateRequest_Styles.inputContainer, { justifyContent: "space-between", flexDirection: "row", alignItems: "center" }]}>
                        <TextInput
                            style={CreateRequest_Styles.inputStyle}
                            placeholder='Enter CNIC'
                        />
                        <SearchIcon name="search1" size={20} color="#000000" />
                    </View>
                    <View>
                        <Text style={CreateRequest_Styles.inputHeading}>Full Name</Text>
                    </View>
                    <View style={CreateRequest_Styles.inputContainer}>
                        <TextInput
                            style={CreateRequest_Styles.inputStyle}
                            placeholder='Enter Name'
                        />
                    </View>
                    <View>
                        <Text style={CreateRequest_Styles.inputHeading}>Father Name</Text>
                    </View>
                    <View style={CreateRequest_Styles.inputContainer}>
                        <TextInput
                            style={CreateRequest_Styles.inputStyle}
                            placeholder='Enter Father Name'
                        />
                    </View>
                    <View>
                        <Text style={CreateRequest_Styles.inputHeading}>Phone Number</Text>
                    </View>
                    <View style={CreateRequest_Styles.inputContainer}>
                        <TextInput
                            style={CreateRequest_Styles.inputStyle}
                            placeholder='Enter phone number here....'
                        />
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={CreateRequest_Styles.btnContainer}>
                        <Text style={CreateRequest_Styles.btnText}>Create Request</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
export default TransferRequest