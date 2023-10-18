import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
    useWindowDimensions
} from 'react-native'
import React from 'react'


import RenderHtml  from 'react-native-render-html';

const source = {
    html: `
    <div style='padding:0 10px;'>
  <h2 style="text-align:center;">
  Terms and Conditions
  </h2>
  <p>Welcome to Al-Jalil Customer App!</p>
  <p>These terms and conditions outline the rules and regulations for the use of Al-Jalil's Website, located at https://aljalildevelopers.com/.</p>
  <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Al-Jalil Customer App if you do not agree to take all of the terms and conditions stated on this page.</p>
  <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
  <h2>Cookies</h2>
  <p>We employ the use of cookies. By accessing Al-Jalil Customer App, you agreed to use cookies in agreement with the Al-Jalil's Privacy Policy.</p>
  <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
  <h2>License</h2>
  <p>Unless otherwise stated, Al-Jalil and/or its licensors own the intellectual property rights for all material on Al-Jalil Customer App. All intellectual property rights are reserved. You may access this from Al-Jalil Customer App for your own personal use subjected to restrictions set in these terms and conditions.</p>
  </div>
  <h3 style="padding: 0 10px;">You must not:</h3>
  <ul>
  <li>Republish material from Al-Jalil Customer App</li>
  <li>Sell, rent or sub-license material from Al-Jalil Customer App</li>
  <li>Reproduce, duplicate or copy material from Al-Jalil Customer App</li>
  <li>Redistribute content from Al-Jalil Customer App</li>
  </ul>
  <div style="padding: 0 10px;">
  <p>This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Free Terms and Conditions Generator.</p>
  <h2>Removal of links from our website</h2>
  <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
  <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
  </div>
  `
};
const TermsCondition = ({navigation}) => {
    const { width } = useWindowDimensions();
    return (
        <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <View style={{ flex: 0.1 }}>
                <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()} >
                    <Image style={{ margin: 18 }} source={require("../assets/images/back1.png")} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 0.9 }}>
                <RenderHtml
                    contentWidth={width}
                    source={source}
                />
            </ScrollView>
        </View>
    )
}

export default TermsCondition

const styles = StyleSheet.create({
    btnBack: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F5F4F8',
        margin: 15
    },
})