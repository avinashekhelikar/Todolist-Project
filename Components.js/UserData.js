import {View, Text ,StyleSheet} from 'react-native';

export default UserData = (props) => {
  const item = props.item;
  return (
    <View style={style.box}>
      <Text style={style.item}>{item.name}</Text>
      <Text style={style.item}>{item.email}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  item: {
    fontSize: 25,
    color: "black",
    flex: 1,
    margin: 2,
    backgroundColor:"green"

  },
  box: {
    color: "red",
    flexDirection: "row",
    borderWidth: 5,
    borderColor: "black",
    marginBottom: 10
  }
})

