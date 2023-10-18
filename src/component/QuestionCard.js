import React, { useState, useEffect, useContext } from 'react'
import { Text, View, StyleSheet, TouchableOpacity,Image } from 'react-native'
import Add from 'react-native-vector-icons/Ionicons';

export default function QuestionCard({ questions, answers }) {

    const [answer, setAnswer] = useState(false)
    const OpenAnswer = () => {
        // setAnswer(true)
        setAnswer(!answer)
    }

    return (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                <Text style={[styles.questionText, {color: answer ? "#930000" : "#000000"}]}>{questions}</Text>
                <TouchableOpacity onPress={() => OpenAnswer()}>
                    {
                        answer ?
                        <Image 
                        source={require("../assets/images/Subtract.png")} 
                        style={styles.imageSubtract}/>
                        :
                        <Add name="add" size={20} color="#000" />
                    }
                </TouchableOpacity>
            </View>

            {
                answer === true ?
                    <View style={styles.answerContainer}>
                        <Text style={styles.answerText}>{answers}</Text>
                    </View>
                    :
                    null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{ 
        backgroundColor: "#ffffff", 
        borderRadius: 4, 
        elevation: 6, 
        padding: 18, 
        margin: 10, 
        alignSelf: 'center', 
        width: "90%" 
    },
    questionContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between',  
    },
    questionText: { 
        fontSize: 14, 
        fontWeight: "400", 
        lineHeight: 20,   
    },
    imageSubtract: {
        width: 12, 
        height: 2,
        marginTop: 8, 
        marginRight: 4
    },
    answerContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 12,
    },
    answerText: { 
        fontSize: 14, 
        fontWeight: '600', 
        color: '#7D7F88' 
    }
    
})

