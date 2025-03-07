///To do list App project:///

import { StyleSheet, Text, View,SafeAreaView} from 'react-native';
import React from 'react';
import ToDoScreen from './Src.js/Screen.js/ToDoScreen'


const App = () => {
  return (
    <SafeAreaView>
    <View style={style.Container}>
      <ToDoScreen/>
    </View>
    </SafeAreaView>
  )
}
export default App;

const style=StyleSheet.create({

})      





























