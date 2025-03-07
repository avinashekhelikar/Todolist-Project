import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import React, { useState } from 'react';
import Icons2 from "react-native-vector-icons/Ionicons";
import Fallback from './components/Fallback';

const dummyData = [
  {
    id: 1,
    title: "Wash car"
  }, {
    id: 2,
    title: "Read a Book"
  }
]; 

console.log(Date.now().toString());

const ToDoScreen = () => {

  //intialise local state
  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])
  const [editedTodo, setEditedTodo] = useState(null);

  // handle AddTodo
  const handleAddTodo = () => {

    // structure of a single Todo Item
    // {
    //   id:
    //   title:
    // }
     if (todo==""){
      return; // early return
     }
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo(""); 
  };

  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id)

    setTodoList(updatedTodoList);
  };  

  //handle EditTodo
  
  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };  

  //handle UpdateTodo
  const handleUpdateTodo=()=>{
    const UpdatedTodos = todoList.map((item)=>{

      if(item.id=== editedTodo.id) {
        return {...item,title:todo}
      }
      return item 
    })
    setTodoList(UpdatedTodos);
    setEditedTodo(null);
    setTodo("");
  }

  const renderTodos = ({ item, index }) => {
    return (
      <View style={{
        backgroundColor: "#1e90ff",
        borderRadius: 6,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5,
      }}>

        <Text style={{ fontSize: 23, color: "white", fontWeight: "800", flex: 1 }}>
          {item.title}</Text>

        <Icons2 name="pencil-outline" 
        size={20} color={"white"} 
          onPress={() => handleEditTodo(item)} 
          style={style.iconContainer}
          />

        <Icons2 name="trash-outline"
          size={20} color={"white"}
          onPress={() => handleDeleteTodo(item.id)} />
      </View>
    )
  }
  return (
    <View style={{ marginHorizontal: 15, }}>
      <TextInput
        style={{
          borderColor: "blue",
          borderWidth: 4,
          borderRadius: 6, marginTop: 10,
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}
        placeholder='Add a Task'
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />
     
     {
      editedTodo ?   (<TouchableOpacity
      style={{
        backgroundColor: "black",
        marginTop: 24,
        marginVertical: 30,
        alignItems: "center",
        borderRadius: 6,
        paddingVertical: 10
      }}
      onPress={() => handleUpdateTodo()}
    >
      <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", }}>
        Save </Text>
    </TouchableOpacity>)
      :   (<TouchableOpacity
     style={{
       backgroundColor: "black",
       marginTop: 24,
       marginVertical: 30,
       alignItems: "center",
       borderRadius: 6,
       paddingVertical: 10
     }}
     onPress={() => handleAddTodo()}
   >
     <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", }}>
       Add </Text>
   </TouchableOpacity>) 
   }
      <FlatList
        data={todoList} renderItem={renderTodos} />

      {todoList.length <= 0 && <Fallback />}

    </View>

  )
}

const style= StyleSheet.create({
  iconContainer :{
    flexDirection:"row",
    justifyContent:"space-around"
  }
})
export default ToDoScreen;
