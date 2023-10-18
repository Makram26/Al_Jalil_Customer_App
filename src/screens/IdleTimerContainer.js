import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'

// import IdleTimer from 'react-idle-timer'

const IdleTimerContainer = () => {

    const idleTimerRef=useRef(null)
  const onIdle =()=>{
    console.log("user is idle")
  }
    return (
    <View>
     {/* <IdleTimer ref={idleTimerRef} timeout={5 * 1000} onIdle={onIdle}>
     </IdleTimer> */}
    </View>
  )
}
export default IdleTimerContainer
const styles = StyleSheet.create({})