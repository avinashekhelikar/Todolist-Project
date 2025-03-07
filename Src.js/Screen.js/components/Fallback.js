import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Fallback = () => {
  return (
    <View style={{alignItems:"center"}}>
      <Image 
      style={{
        width:300, height:300
      }}
      source={{
        uri:"https://cdn-icons-png.flaticon.com/512/6194/6194029.png",
      }}/>
      <Text style={{fontSize:20,}}>Start adding your task</Text>
    </View>
  )
}
export default Fallback

const styles = StyleSheet.create({})