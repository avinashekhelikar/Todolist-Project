import {View,Text,Button} from "react-native";
export const Home = (props) => {
    console.warn(props.route.params)
    const {name ,age}= props.route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}> Welcome to Home Screen </Text>
      <Text style={{ fontSize: 30 }}> Name: {name}</Text>
      <Text style={{ fontSize: 30 }}> Age:{age} </Text>


    </View>
  )
}