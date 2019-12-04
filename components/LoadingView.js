import React, { useEffect, useState} from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';



export default function LoadingView() {
  const [funText, setFunText] = useState('')

  useEffect(() => {
    loadingText()
  }, [])

  function loadingText(){
    const text = [
      'Ground power connected',
       'Apu Starting',
        'Seatbelt Lights: on'
      ]
    setInterval(()=>{
      setFunText(text[Math.floor(Math.random()*text.length)])
    }, 1300)
  }

  return (
    <>
      <View style={styles.container}>
      <View style={styles.textRow}>
        <Text style={styles.text}>Air</Text>
        <Text style={[styles.red, styles.text]}>Adar</Text>
      </View>
        <ActivityIndicator  size="large"/>
        <Text style={styles.activeText}>{funText}</Text>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6d6d6d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRow:{
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  red: {
    color: '#c10000'
  },
  activeText:{
    marginTop: 20,
    fontSize: 15,
  }
});
