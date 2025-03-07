// import React from 'react';
// import {Button, Text, View } from 'react-native';
// import UserData from './Components.js/UserData'

// // const name="avinash";
// // let age= 80;
// // var email="avinashekhelikar@gmail.com"

// const App = () => {
//   return (
//     <View>
//       <Text style={{fontSize:30, color:"blue"}}>React</Text>
//       <Text style={{fontSize:30, color:"blue"}}>nodejs</Text>
//       <Button title= "press me"/>
//       <Text style={{fontSize:30, color:"blue"}}>javascript</Text>


//       {/* <Text style={{fontSize:30, color:"blue"}}>{name}</Text>
//       <Text style={{fontSize:30, color:"blue"}}>{email}</Text>
//       <Text style={{fontSize:30, color:"blue"}}>{10*20}</Text> */}

//       <CompanyData/>
//       <UserData/>
//     </View>
//   )
// }


// const CompanyData =()=> {
//   return(
//     <View>
//       <Text style={{fontSize:30, color:"blue"}}> Hello React-native </Text>

//       <UserData/>
//     </View>
//   )
// }

// export default App;



/**Button and Onpress Event *///////////////



// import React from "react";
// import {View,Text, Button} from "react-native";

// const App =()=> {
//   let data =30;
//   const fruit= (val)=> {
//     data = 20;
//     console.warn(data)
//   }
//     return (

//     <View>
//       <Text style={{fontSize:30, color:"red"}}>{data}  </Text>
//       <Button title="onPress" onPress={()=>fruit('Hello React-native')} color={'red'}/>

//       <Button title="onPress 3" onPress={fruit()} color={"green"}/>

//     </View>
//     )

// }


// export default App;


/******STATE IN REACT-NATIVE */

// import React,{useState} from "react";
// import {View,Text, Button} from "react-native";

// const App=()=> {
//   let data = 30;

//   const fruit =()=> {
//     console.warn("function called");
//   }

//   const [name, setName] = useState("anil");

//   function testName (){
//     setName("rahul");
//   }
//   return (
//     <View>
//       <Text style={{fontSize:30, color:"red"}}> {name}</Text>
//       <Text style={{fontSize:30, color:"red"}}>{data} </Text>
//       <Button title="update Name" onPress={testName}/>
//       <Button title="new button" onPress={()=>fruit()} color={"green"}/>
//     </View>
//   )
// }

// export default App;



/***PRACTICE ABOVE CODE */

// import React, {useState} from 'react';
// import {View,Text,Button} from "react-native";

// const App =()=> {
//   let data=60;

//   function banana (){
//     console.warn("function called");
//   }

//   const[name, setName] = useState("rahul");

//   function testName () {
//     setName("vishal");
//   }
//   return (
//     <View>
//       <Text style={{fontSize:30, color:"red"}}>{data}</Text>
//       <Text style={{fontSize:30, color:"green"}}>{name}</Text>
//       <Button title="update Name" onPress={testName} color={"blue"}/>
//       <Button title="New button" onPress={banana} color={"green"}/>
//     </View>
//   )
// }

// export default App;



/***PROPS IN REACT NATIVE */


// import React, { useState } from "react";
// import { View,Text, Button } from "react-native";

// const App =()=>{
//   // let name= "rakesh";

//   const [name,setName] = useState("rocky");

//   return (
//     <View>
//       <Text style={{fontSize:30, color:"green"}}>Props in react native</Text>
//       <Button title="Props Button" onPress={()=>setName("vishal")} color={"red"}/>
//       <User name={name} age={30}/>
//     </View>
//   )
// }


// const User =(Props)=> {
//   // console.warn(Props.name)
//   return(
//     <View style={{backgroundColor:"green",padding:5}}>
//       <Text style={{fontSize:30, color:"blue"}}>Name:{Props.name} </Text>
//       <Text style={{fontSize:30, color:"blue"}}>Age:{Props.age} </Text>

//     </View>
//   )
// }

// export default App;


/*** Styles in react-native***/

// import React from "react";
// import {StyleSheet, Text, View} from 'react-native';
// import ExStyles from './Style'

// const App= ()=> {
//   return (
//     <View>
//       <Text style={Style.textBox}>Styles in react-native</Text>
//       <Text style={Style.textBox}>Styles in react-native</Text>
//       <Text style={Style.textBox}>Styles in react-native</Text>
//       <Text style={ExStyles.textBox}>Styles in react-native</Text>
//       <Text style={[Style.textBox, ExStyles.textBox, {marginTop:20}]}>Styles in react-native</Text>


//     </View>
//   )
// }

// const Style=StyleSheet.create({
//   textBox:{
//     color:"white",
//     fontSize:30,
//     backgroundColor:"blue",
//     padding:10,
//     marginBottom:10,
//     borderRadius:10,
//     borderColor:"red",
//     borderWidth:4,
//     height:100,
//     textAlignVertical:"center",
//     textAlign:"center"



//   }
// })

// export default App;


/***** TextInput value and handling TextInput */

// import React, { useState } from "react";
// import {View,Text, TextInput, StyleSheet, Button} from 'react-native';

// const App =()=> {
//   const [name,setName] = useState ("");
//   return (
//     <View>
//       <Text style={{fontSize:40}}> TextInput value </Text>
//       <Text style={{fontSize:30,}}> Enter Your Name is:{name}</Text>
//       <TextInput style={style.textInput}
//       placeholder="Enter your name"
//       value={name}
//       onChangeText={(text)=>setName(text)}
//       />
//       <Button title="clear input values" onPress={()=>setName("")}/>
//     </View>
//   )
// }

// const style=StyleSheet.create({
//   textInput :{
//     fontSize:30,
//     color:"blue",
//     borderColor:"green",
//     borderWidth:5

//   }
// })
// export default App;

/***** SIMPLE FORM IN REACT-NATIVE ****/

// import React, { useState } from "react";
// import {View,Text, TextInput, StyleSheet, Button} from "react-native";

// const App = ()=> {
//   const [name,setName] = useState("");
//   const [password,setPassword] = useState("");
//   const [email,setemail] = useState("");
//   const [Display,setDisplay] = useState(false)

//   const resetFormData =()=>{
//     setDisplay(false);
//     setName("");
//     setPassword("");
//     setemail("");
//   }


//   return (
//     <View>
//       <Text style={{fontSize:30, color:"red"}}> Simple form in react-native</Text>
//       <TextInput style={styles.textInput}
//       placeholder="Enter user name"
//       value={name}
//       onChangeText={(text)=>setName(text)}
//       />

//       <TextInput style={styles.textInput}
//       placeholder="Enter user password"
//       secureTextEntry={true}
//       value={password}
//       onChangeText={(text)=>setPassword(text)}
//       />

//       <TextInput style={styles.textInput}
//       placeholder="Enter user Email"
//       value={email}
//       onChangeText={(text)=>setemail(text)}
//       />

//       <View style={{marginBottom:10}}>
//       <Button color={"green"} title="print details" onPress={()=>setDisplay(true)} /> 
//       </View>     
//       <Button title="Clear details" onPress={resetFormData} /> 

//       <View>
//         {
//           Display ?
//           <View>
//             <Text style={{fontSize:20}}> User name is:{name}</Text>
//             <Text style={{fontSize:20}}> User password is:{password}</Text>
//             <Text style={{fontSize:20}}> User email is:{email}</Text>            
//             </View>
//             :null
//         }
//       </View>

//     </View>

//   )
// }

// const styles = StyleSheet.create({
//   textInput:{
//     color:"blue",
//     borderColor:"black",
//     borderWidth:5,
//     fontSize:30,
//     padding:10,
//     marginBottom:10,

//   }
// })

// export default App;


/**** FLATLIST IN REACT NATIVE ****/

// import React from "react";
// import { View, Text, FlatList, StyleSheet } from "react-native";

// const App = () => {
//   const Users = [
//     {
//       id:1,
//       name:"Apple",
//     },
//     {
//       id:2,
//       name:"Banana",
//     },
//     {
//       id:3,
//       name:"orange",
//     },
//     {
//       id:4,
//       name:"grapes",
//     }
//   ]



//   return (
//     <View>
//       <Text style={{fontSize:30}}>Flatlist in react native</Text>
//       <FlatList
//       data={Users}
//       renderItem={({item})=> <Text style={style.textBox}>{item.name}</Text>}
//       />
//     </View>
//   )
// }

// const style =StyleSheet.create(
//   {
//     textBox:{
//       fontSize:30,
//       color:"white",
//       backgroundColor:"blue",
//       padding:10,
//       margin:20,
//       borderColor:"red",
//       borderWidth:5,
//       borderRadius:10

//     }
//   }
// )

// export default App;

// import React from "react";
// import { View, Text, StyleSheet, FlatList } from "react-native";

// const App = () => {
//   const Users = [
//     {
//       id: 1,
//       name: "mango",
//     },
//     {
//       id: 2,
//       name: "Apple",
//     },
//     {
//       id: 3,
//       name: "juice"
//     },
//     {
//       id: 4,
//       name: "Pickle",
//     }
//   ]



//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>FlatList in React native</Text>
//       <FlatList
//         data={Users}
//         renderItem={({ item }) => <Text style={style.textBox}>{item.name}</Text>}
//       />
//     </View>
//   )

// }
// const style = StyleSheet.create({
//   textBox: {
//     color: "green",
//     fontSize: 30,
//     borderColor: "green",
//     borderWidth: 10,
//     padding: 10,
//     margin: 10,
//     borderRadius: 10,
//     textAlignVertical:"center",
//     textAlign:"center"

//   }

// })

// export default App;

/***List with map function****/

// import React from "react";
// import {View,Text,StyleSheet, ScrollView} from "react-native";

// const App=()=>{

//   const users = [
//     {
//       id:1,
//       name:"rakesh"
//     },
//     {
//       id:2,
//       name:"rahul"
//     },
//     {
//       id:3,
//       name:"avinash"
//     },
//     {
//       id:4,
//       name:"vishal"
//     },
//     {
//       id:5,
//       name:"arun"
//     },
//     {
//       id:6,
//       name:"deepak"
//     },
//     {
//       id:7,
//       name:"basava"
//     },
//     {
//       id:8,
//       name:"bhagesh"
//     },
//     {
//       id:9,
//       name:"sanju"
//     },
//     {
//       id:10,
//       name:"raju"
//     },
//     {
//       id:11,
//       name:"amul"
//     },
//     {
//       id:12,
//       name:"ambrish"
//     },
//     {
//       id:13,
//       name:"raghav"
//     },
//     {
//       id:14,
//       name:"ramesh"
//     },
//     {
//       id:15,
//       name:"sachin"
//     },
//     {
//       id:16,
//       name:"virat"
//     },
//     {
//       id:17,
//       name:"ritesh"
//     }
//   ]
//   return (
//     <View>
//       <Text style={{fontSize:30}}>List with map function</Text>
//       <ScrollView style={{marginBottom:40}}>
//       {
//         users.map((item)=><Text style={style.item}>{item.name}</Text>)
//       }
//       </ScrollView>
//     </View>
//   )
// }

// const style = StyleSheet.create({
//   item: {
//     color: "white",
//     fontSize: 30,
//     borderColor: "blue",
//     borderWidth: 10,
//     backgroundColor:"green",
//     padding: 10,
//     margin: 10,
//     borderRadius: 10,
//     textAlignVertical:"center",
//     textAlign:"center"

//   }

// })

// export default App;

/*** How make a Grid ***/

// import React from "react";
// import {View, Text, StyleSheet, ScrollView} from "react-native";

// const App=()=> {

//   const users =[
//     {
//       id:1,
//       name:"rakesh"
//     },
//     {
//       id:2,
//       name:"rahul"
//     },
//     {
//       id:3,
//       name:"avinash"
//     },
//     {
//       id:4,
//       name:"vishal"
//     },
//     {
//       id:5,
//       name:"arun"
//     },
//     {
//       id:6,
//       name:"deepak"
//     },
//     {
//       id:7,
//       name:"basava"
//     },
//     {
//       id:8,
//       name:"bhagesh"
//     },
//     {
//       id:9,
//       name:"sanju"
//     },
//     {
//       id:10,
//       name:"raju"
//     },
//     {
//       id:11,
//       name:"amul"
//     },
//     {
//       id:12,
//       name:"ambrish"
//     },
//     {
//       id:13,
//       name:"raghav"
//     },
//     {
//       id:14,
//       name:"ramesh"
//     },
//     {
//       id:15,
//       name:"sachin"
//     },
//     {
//       id:16,
//       name:"virat"
//     },
//     {
//       id:17,
//       name:"ritesh"
//     }
//   ]


//   return (
//     <View>
//       <Text style={{fontSize:30}}> Grid with Dynamic Data</Text>
//       <ScrollView>
//       <View style={{flex:1, flexDirection:"row", flexWrap:"wrap"}}>

//         {
//           users.map ((item)=><Text style={style.item}>{item.name}</Text>)
//         }


//       </View>
//       </ScrollView>
//     </View>
//   )
// }

// const style = StyleSheet.create({
//   item: {
//     color: "white",
//     fontSize: 25,
//     borderColor: "blue",
//     borderWidth: 10,
//     backgroundColor:"green",
//     padding: 5,
//     margin: 5,
//     borderRadius: 10,
//     textAlignVertical:"center",
//     textAlign:"center",
//     width:190,
//     height:190

//   }

// })
// export default App;

/***Loop With Flatlist */

// import React from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';
// import UserData from './Components.js/UserData';

// const App = () => {

//   const users = [
//     {
//       id: 1,
//       name: "avinash",
//       email: "avi@gmail.com"
//     },
//     {
//       id: 2,
//       name: "arun",
//       email: "arun@gmail.com"
//     },
//     {
//       id: 3,
//       name: "rakesh",
//       email: "roy@gmail.com"
//     },
//     {
//       id: 4,
//       name: "rahul",
//       email: "rahul@gmail.com"
//     },
//   ]
//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>Loop With FlatList</Text>
//       <FlatList
//         data={users}
//         renderItem={({ item }) => <UserData item={item} />}
//       />
//     </View>
//   )
// }



// export default App;


/*** Section List ***/

// import React from 'react';
// import { FlatList, SectionList, Text, View } from 'react-native';

// const App = () => {

//   const users = [
//     {
//       id: 1,
//       name: "Prajwal",
//       data: ["java", "php", "angular"]
//     },
//     {
//       id: 2,
//       name: "Rakesh",
//       data: ["javascript", "kotlin", "native"]
//     },
//     {
//       id: 3,
//       name: "Vishal",
//       data: ["react.js", "bootstrap", "Html"]
//     },
//     {
//       id: 4,
//       name: "Rahul",
//       data: ["css", "express", "node"]
//     },

//   ]

//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}> Section List</Text>
//       <SectionList
//         sections={users}
//         renderItem={({ item }) => <Text style={{ fontSize: 30, marginLeft: 20 }}>{item}</Text>}
//         renderSectionHeader={({ section: { name } }) => (
//           <Text style={{ fontSize: 30, color: "red" }}>{name}</Text>
//         )}
//       />
//     </View>
//   )
// }
// export default App;




// import React from 'react';
// import { SectionList, StyleSheet, Text, View } from 'react-native'


// const App = () => {

//   const users = [
//     {
//       id: 1,
//       name: "Avinash",
//       data: ["java", "javascript", "php"]
//     },
//     {
//       id: 2,
//       name: "rakesh",
//       data: ["sql", "dotnet", "kotlin"]
//     },
//     {
//       id: 3,
//       name: "rahul",
//       data: ["bootstrap", "html", "css"]
//     }
//   ]
//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>SectionList in React native</Text>
//       <SectionList
//         sections={users}
//         renderItem={({item}) => <Text style={{ fontSize: 30, color:"blue" }}>{item}</Text>}
//         renderSectionHeader={({ section: { name } }) => (<Text style={{ fontSize: 30, color: "red" }}>{name}</Text>)}
//       />
//     </View>
//   )
// }
// export default App;


/*** Lifecycle methods in react native */
/*** useEffect in react native ****/

// import React, { useEffect, useState } from "react";
// import {View, Text, Button} from 'react-native';

// const App =()=>{

//   const[count,setCount]=useState(0)

//   useEffect(()=>{
//     console.warn("Hello Avinash")
//   },[])
//   return (
//     <View>
//       <Text style={{fontSize:30}}> useEffect in react-native component Did Mount {count}</Text>
//       <Button title="Update Button" onPress={()=>setCount(count+1)}/>
//     </View>
//   )
// }

// export default App;


/**** UseEffect in Componet Did update ***/

// import React, { useEffect, useState } from "react";
// import { View, Text, Button } from "react-native";

// const App = () => {
//   const [count, setCount] = useState(10)
//   const [data, setData] = useState(20)

//   // useEffect (()=> {
//   //   console.warn("hello Avinash")
//   // },[count]);

//   // useEffect (()=> {
//   //   console.warn("hello rahul")
//   // },[data]);


//   return (
//     <View>
//       <Text style={{ fontSize: 30, color: "green" }}>{data} Componet Did update {count}</Text>
//       <Button title="Update Counter" onPress={() => setCount(count + 1)} />
//       <Button title="Update Data" onPress={() => setData(data + 1)} />
//       <User info={{ data, count }} />
//     </View>
//   )
// }

// const User = (props) => {
//   // console.warn(props.info)
//   useEffect(() => {
//     console.warn("hello goodBoy")
//   },[props.info.count])

//   useEffect(() => {
//     console.warn("hello badBoy")
//   },[props.info.data])
//   return (
//     <View>
//       <Text style={{ fontSize: 30, color: "red" }}> New Componet</Text>
//       <Text style={{ fontSize: 30, color: "red" }}>data: {props.info.data} </Text>
//       <Text style={{ fontSize: 30, color: "red" }}>count: {props.info.count}</Text>
//     </View>
//   )
// }
// export default App;

/**Toggle show /hide Component***/

// import React, { useState } from 'react';
// import { Button, StyleSheet, Text, View } from 'react-native';

// const App = () => {
//   const [show,setShow]=useState(true)
//   return (
//     <View>
//       <Text style={{fontSize:30,color:"green"}}>Toggle show/hide button</Text>
//       {/* <Button title='Hide Button' onPress={()=> setShow(false)}/>
//       <Button title='Show Button' onPress={()=> setShow(true)}/> */}
//       <Button title='Toggle Button' onPress={()=> setShow(!show)}/>
//         {
//           show ? <User/> : null
//         }

//     </View>
//   )
// }

// const User =()=> {
//   return(
//     <View>
//       <Text style={{fontSize:40, color:"blue"}}>Componet</Text>
//     </View>
//   )
// }

// export default App

/*** component Did unmount ***/

// import React, { useEffect, useState } from 'react';
// import { Button, StyleSheet, Text, View } from 'react-native';


// const App = () => {
//   const[show,setShow]=useState(true)
//   return (
//     <View>
//       <Text style={{fontSize:30,color:"green"}}>component DidMount</Text>
//       <Button title='Toggle Button' onPress={()=>setShow(!show)}/>
//         {
//           show ? <Student/> : null
//         }

//     </View>
//   )
// }


// const Student =()=>{
//   let timer = setInterval (()=>{
//     console.warn("hello goodBoy")
//   },2000)


//   useEffect(()=>{
//     return()=> clearInterval(timer)
//     // return()=> {console.warn("timer called")}
//     // console.warn("timer called")
//   })
//   return(
//     <View>
//       <Text style={{fontSize:30, color:"blue"}}> Components</Text>
//     </View>
//   )

// }


// export default App;

/***responsive layout with flexbox****/

// import React from 'react';
// import {View,Text, StyleSheet} from "react-native";

// const App=()=>{
//   return(
//     <View style={Style.main}>
//       <View style={Style.box1}>
//       <View style={Style.innerBox}>
//       <View style={Style.innerBox3}></View>

//       </View>
//       <View style={Style.innerBox2}></View>


//       </View>

//       <View style={Style.box2}></View>
//       <View style={Style.box3}></View>

//     </View>
//   )
// }


// const Style= StyleSheet.create({
//     main:{
//       flex:1,
//       // flexDirection:"row"
//     },
//     box1:{
//       flex:2,
//       backgroundColor:"green", flexDirection:"row"
//     },
//     box2:{
//       flex:1,
//       backgroundColor:"red"
//     },
//     box3:{
//       flex:1,
//       backgroundColor:"blue"
//     },
//     innerBox:{
//       flex:1,
//       backgroundColor:"skyblue",margin:20
//     },
//     innerBox2:{
//       flex:1,
//       backgroundColor:"yellow",margin:10
//     },
//     innerBox3:{
//       flex:1,
//       backgroundColor:"black",margin:20
//     }



// })

// export default App;

/**Touchable Highlights with style Button */

// import React from 'react';
// import { View,Text, Button, TouchableHighlight, StyleSheet } from 'react-native';

// const App=()=>{
//   return(
//     <View>
//       <TouchableHighlight>
//         <Text style={style.button}> Button</Text>
//       </TouchableHighlight>

//       <TouchableHighlight>
//         <Text style={[style.button,style.Success]}> Success</Text>
//       </TouchableHighlight>

//       <TouchableHighlight>
//         <Text style={[style.button,style.Submit]}> Submit</Text>
//       </TouchableHighlight>

//       <TouchableHighlight>
//         <Text style={[style.button,style.Primary]}> Primary</Text>
//       </TouchableHighlight>

//       <TouchableHighlight>
//         <Text style={[style.button,style.Clear]}> Clear</Text>
//       </TouchableHighlight>

//     </View>
//   )
// }

// const style=StyleSheet.create({
//   button:{
//     fontSize:28,
//     backgroundColor:"skyblue",
//     textAlign:"center",
//     padding:10,
//     margin:10,
//     borderRadius:10,
//     shadowColor:"black",
//     shadowOpacity:5,
//     elevation:10
//   },
//   Success:{backgroundColor:"green"},
//   Submit:{backgroundColor:"blue"},
//   Primary:{backgroundColor:"yellow"},
//   Clear:{backgroundColor:"red"}
// })
// export default App;

/***Radio Button React native***/

// import React, { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity,  View } from 'react-native';


// const App = () => {

//   const [selectedRadio, setSelectedRadio]=useState()

//   return (
//     <View style={style.main}>
//       <TouchableOpacity onPress={()=> setSelectedRadio(1)}>
//         <View style={style.radioWrapper}>
//           <View style={style.radio}>
//             {
//               selectedRadio=== 1 ? <View style={style.radioBg}></View> : null
//             }
//           </View>
//         <Text style={style.radioText}>Radio 1</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={()=> setSelectedRadio(2)}>
//         <View style={style.radioWrapper}>
//           <View style={style.radio}>
//           {
//               selectedRadio=== 2 ? <View style={style.radioBg}></View> : null
//             }
//           </View>
//         <Text style={style.radioText}>Radio 2</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   )
// }

// const style = StyleSheet.create({
//   main: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   radioText:{
//     fontSize:30
//   },
//   radio:{
//     height:40,
//     width:40,
//     borderColor:"black",
//     borderWidth:2,
//     borderRadius:20,
//     margin:10
//   },
//   radioWrapper:{
//     flexDirection:"row" , alignItems:"center"
//   },
//   radioBg:{
//     height:30,
//     width:30,
//     backgroundColor:"blue",
//     borderRadius:20,
//     margin:3

//   }

// })

// export default App;

/**practise */

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// const App = () => {

//   const[selectedRadio,setSelectedRadio]=useState()

//   return (
//     <View style={style.main}>
//       <TouchableOpacity onPress={()=> setSelectedRadio(1)}>
//         <View style={style.radioWrapper}>
//           <View style={style.radio}>
//             {
//               selectedRadio=== 1 ? <View style={style.radioBg}></View> :null
//             }

//           </View>

//           <Text style={style.RadioText}> Radio 1</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
//         <View style={style.radioWrapper}>
//           <View style={style.radio}>
//           {
//               selectedRadio=== 2 ? <View style={style.radioBg}></View> :null
//             }

//           </View>

//           <Text style={style.RadioText}> Radio 2</Text>
//         </View>
//       </TouchableOpacity>

//     </View>
//   )
// }
// const style = StyleSheet.create({
//   main: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   RadioText: {
//     fontSize: 30
//   },
//   radio:{
//     height:40,
//     width:40,
//     borderColor:"black",
//     borderWidth:2,
//     borderRadius:20,
//     margin:10
//   },
//   radioWrapper:{
//     flexDirection:"row" , alignItems:"center"
//   },
//   radioBg:{
//     height:30,
//     width:30,
//     backgroundColor:"black",
//     borderRadius:20,
//     margin:3

//   }
// })
// export default App;

/****dynamic radio button ****/

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// const App = () => {

//   const Skills = [
//     {
//       id: 1,
//       name: "Python",
//     },
//     {
//       id: 2,
//       name: "PHP",
//     },
//     {
//       id: 3,
//       name: "java",
//     },
//     {
//       id: 4,
//       name: "react native",
//     },
//     {
//       id: 5,
//       name: "javaScript",
//     }
//   ]
//   const [selectedRadio, setSelectedRadio] = useState()
//   return (
//     <View style={style.main}>
//       {
//         Skills.map((item, index) => <TouchableOpacity key={index} onPress={() => setSelectedRadio(item.id)}>
//           <View style={style.radioWrapper}>
//             <View style={style.radio}>
//               {
//                 selectedRadio === item.id ? <View style={style.radioBg}></View> : null
//               }
//             </View>
//             <Text style={style.RadioText}> {item.name}</Text>
//           </View>
//         </TouchableOpacity>)
//       }
//     </View>
//   )
// }
// const style = StyleSheet.create({
//   main: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   RadioText: {
//     fontSize: 30
//   },
//   radio: {
//     height: 40,
//     width: 40,
//     borderColor: "black",
//     borderWidth: 2,
//     borderRadius: 20,
//     margin: 10
//   },
//   radioWrapper: {
//     flexDirection: "row", alignItems: "center"
//   },
//   radioBg: {
//     height: 30,
//     width: 30,
//     backgroundColor: "black",
//     borderRadius: 20,
//     margin: 3
//   }
// })
// export default App;


/*** activity Indicator */
/***practise */
// import React, { useState } from 'react';
// import { Text, View, StyleSheet, ActivityIndicator, Button } from 'react-native';

// const App = () => {
//   const [show, setShow] = useState(false)
//   const displayLoader = () => {
//     setShow(true);

//     setTimeout(() => {
//       setShow(false)
//     }, 3000)


//   }
//   return (
//     <View style={style.main}>
//       <ActivityIndicator size={50} color={"red"} animating={show} />
//       {
//         show ? <ActivityIndicator size={100} color={"blue"} animating={show} /> : null
//       }
//       <Button title='show Loader' onPress={displayLoader} />

//     </View>
//   )
// }
// const style = StyleSheet.create({
//   main: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// })
// export default App;

/*** modal /dialoge box in reactnative ***/

// import React, { useState } from 'react';
// import { Button, StyleSheet, Modal, Text, View } from 'react-native';

// const App = () => {
//   const [showModal,setShowModal]=useState(false)
//   return (
//     <View style={styles.main}>
//       <Modal transparent={true} 
//       visible={showModal}
//       animationType="slide"
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.textView}>Hello Code Step By Step</Text>
//             <Button title='Close modal' onPress={()=>setShowModal(false)} />
//           </View>
//         </View>
//       </Modal>

//       <View style={styles.buttonView}>
//         <Button title='Open Modal' onPress={()=>setShowModal(true)} />
//       </View>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//   },
//   buttonView: {
//     flex: 1,
//     justifyContent: "flex-end"
//   },
//   textView: {
//     fontSize: 30,
//     marginBottom: 8
//   },
//   centeredView: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   modalView: {
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 20,
//     shadowColor: "black",
//     elevation: 5

//   }
// })
// export default App;

/****Pressible or Long Press */

// import React from "react";
// import {View, Text, Pressable, StyleSheet} from "react-native";

// const App=()=>{
//   return (
//     <View style={Styles.main}>
//       <Pressable
//       // onPress={()=>console.warn("normal press")}
//       // onLongPress={()=>{console.warn("Long Press")}}
//       onPressIn={()=>{console.warn("On press In")}}
//       onPressOut={()=>{console.warn("On press Out")}}
//       >
//         <Text style={Styles.pressableBtn}> Pressable</Text>
//       </Pressable>
//     </View>
//   )
// }

// const Styles=StyleSheet.create({
// main:{
//   flex:1,
//   justifyContent:"center"
// },
// pressableBtn:{
//   backgroundColor:"blue",
//   color:"white",
//   fontSize:20,
//   textAlign:"center",
//   padding:10,
//   margin:10,
//   borderRadius:10,
//   shadowColor:"black",
//   elevation:5
// }
// })
// export default App;

/****Status Bar****/
// import React, { useState } from "react";
// import {View,Text, StatusBar, Button, StyleSheet} from "react-native";

// const App=()=>{
//   const[hide,setHide]=useState(false)
//   const[barStyle,setBarStyle]=useState("default")
//   return(
//     <View style={style.main}>
//       <StatusBar
//       backgroundColor="blue"
//       barStyle={barStyle}
//       hidden={hide}
//       />
//       <Button title="Toggle Button" onPress={()=>setHide(!hide)}/>
//       <Button title="Update style" onPress={()=>setBarStyle("dark-content")}/>
//     </View>
//   )
// }
// const style=StyleSheet.create({
//   main:{
//     flex:1,
//     justifyContent:"center",
//     margin:10,
//   }
// })
// export default App;

/***Platform/check OS in react-native***/


// import React from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';

// const App = () => {
//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>Platform:{Platform.OS}</Text>
//       {
//         Platform.OS==="android"?
//         <View style={{backgroundColor:"green", height:100,width:100}}></View>
//         :
//         <View style={{backgroundColor:"blue",height:100,width:100}}></View> 
//       }

//       <Text style={style.text}>Hello Good Boy</Text>
//       <Text style={{fontSize:20}}>{JSON.stringify(Platform)}</Text>
//     </View>
//   );
// };

// const style=StyleSheet.create({
//   text:{
//     fontSize:30,
//     color:Platform.OS==="android"? "blue" : "yellow"
//   }
// })
// export default App;


/***Packages in react-native ***/

// import React from 'react';
// import { Text, View } from 'react-native';
// import {WebView} from 'react-native-webview';

// const App = () => {
//   return (
//   <WebView source={{uri:"https://reactnative.dev/docs/"}}/>

//   );
// };
// export default App;

/***Custom modal dialogue box***/

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button, Touchable, TouchableOpacity,  } from 'react-native'

// const App = () => {
//   const[show,setShow]=useState(false)
//   return (
//     <View style={style.container}>
//       {
//         show ?
//         <View style={style.modal}>
//         <View style={style.body}>
//           <Text>Hello Good Evening</Text>
//           <Button title='Close Dialog' onPress={()=>setShow(false)} />
//         </View>
//       </View>
//       : null
//       }
//       <Button title='Open Dialog' onPress={()=>setShow(true)} />
//         <TouchableOpacity style={style.button}>
//           <Text style={style.text}>Open Modal</Text>
//         </TouchableOpacity>
//     </View>
//   )
// }
// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     marginTop:50
//   },
//   modal: {
//     flex: 1,
//     backgroundColor: "rgba(50,50,50,.5)",
//     justifyContent:"center",
//     alignItems:"center"
//   },
//   text:{
//     color:"white",
//     fontSize:15,
//     textAlign:"center",
//     fontWeight:"700"

//   },
//   button:{
//     backgroundColor:"green",
//     width:"30%",
//     height:120,
//     borderRadius:60,
//     alignSelf:"center",
//     margin:30,
//     shadowColor:"black",
//     shadowOpacity:20,
//     shadowRadius:70,
//     elevation:30

//   },
//   body: {
//     backgroundColor:"white",
//     width:300,
//     height:300,
//     padding:20,
//     borderRadius:20
//   }
// })
// export default App;

/***stack navigation ***/

// import React from "react";
// import { View, Text, Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// const Home = () => {
//   return (
//     <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
//       <Text style={{fontSize:30}}> Home Screen</Text>
//     </View>
//   )
// }

// const Login = (props) => {
//   return (
//     <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
//       <Text style={{ fontSize:30}}>Login Screen</Text>
//       <Button title="Go to HomeScreen" onPress={()=>props.navigation.navigate("Home")}/>
//     </View>
//   )
// }
// export default App;


// import { Button, StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Screen } from 'react-native-screens';

// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//        screenOptions={{title:"Home Screen",
//         headerStyle:{
//           backgroundColor:"blue"
//         },
//         headerTintColor:"yellow",
//         headerTitleStyle:{
//           fontSize:30
//         }
//       }}
//       >
//         <Stack.Screen name="Login" component={Login}
//         options={{title:"User Login",
//           headerStyle:{
//             backgroundColor:"red"
//           },
//           headerTintColor:"black",
//           headerTitleStyle:{
//             fontSize:30
//           }
//         }}

//         />
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// const Home = () => {
//   return (
//     <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
//       <Text style={{fontSize:30}}>Welcome to Avinash Home Screen</Text>
//     </View>
//   )
// }
// const Login = (props) => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text style={{fontSize:30}}>Login Screen</Text>
//       <Button title='Go to Home Screen' onPress={()=>props.navigation.navigate("Home")}/>
//     </View>
//   )
// }
// export default App;

// practice://*    */

// import React from "react";
// import { Text, View, Button, TextInput } from "react-native";
// import { NavigationContainer } from "@react-navigation/native"
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import { Colors } from "react-native/Libraries/NewAppScreen";

// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: "blue"
//           },
//           headerTintColor: "white",
//           headerTitleStyle: {
//             fontSize: 30
//           }
//         }
//         }
//       >
//         <Stack.Screen name="Login" component={Login}
//           options={{
//             headerTitle: () => <Button onPress={Btn} title="Left" />,
//             headerRight: () => <Button onPress={Color} title="right" />,

//             // headerRight: () => <Header />,
//             title: "Login Screen",
//             headerStyle: {
//               backgroundColor: "yellow"
//             },
//             headerTintColor: "white",
//             headerTitleStyle: {
//               fontSize: 25
//             }
//           }
//           }
//         />
//         <Stack.Screen name="Home" component={Home}
//           options={{
//             title: "Login Screen",
//             headerStyle: {
//               backgroundColor: "green"
//             },
//             headerTintColor: "white",
//             headerTitleStyle: {
//               fontSize: 30
//             }
//           }
//           } />

//       </Stack.Navigator>

//     </NavigationContainer>
//   )
// }

// const Header = () => {
//   return (
//     <TextInput placeholder="name" />
//   )
// }
// const Login = (props) => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text style={{ fontSize: 30 }}> Login Screen</Text>
//       <Button title="Go to Home Screen" onPress={() => props.navigation.navigate("Home")} />
//     </View>
//   )
// }
// const Home = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text style={{ fontSize: 30 }}> Welcome to Home Screen</Text>

//     </View>
//   )
// }

// const Btn = () => {
//   console.warn("Btn Success")

// }
//  const Color = ()=> {
//   console.warn("btn unsucessfull")
//  }
// export default App;

// import React, { useState } from "react";
// import { View, Text, Button,TextInput } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Home } from "./Components.js/Home";
// import { Login } from "./Components.js/Login";

// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} 
//         options={{
//           headerTitle:()=><Button onPress={Header} title="Left"/>,
//           headerRight:()=><Button onPress={Color} title="Right"/>,

//           title: "UserLogin",
//           headerStyle: {
//             backgroundColor: "green"
//           },
//           headerTitleStyle: {
//             fontSize: 30
//           },
//           headerTintColor: "orange"
//         }} />

//         <Stack.Screen name="Home" component={Home}
//           options={{
//             title: "UserLogin",
//             headerStyle: {
//               backgroundColor: "blue"
//             },
//             headerTitleStyle: {
//               fontSize: 30
//             },
//             headerTintColor: "orange"
//           }} />   

//       </Stack.Navigator>  
//     </NavigationContainer>
//   )
// };

// const Header =()=>{
//   return(
//     // <TextInput placeholder="name"/>
//     // <Button title="Hello"></Button>
//     console.warn("Btn successful")

//   )
// }
// const Color =()=>{
//   return(
//     console.warn("Btn Unsuccessful")
//   )
// }
// // const Home = () => {
// //   return (
// //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //       <Text style={{ fontSize: 30 }}> Welcome to Home Screen </Text>

// //     </View>
// //   )
// // }
// // const Login = (props) => {
// //   return (
// //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //       <Text style={{ fontSize: 30 }}>Login Screen </Text>
// //       <Button title="Go to Home Screen" onPress={() => props.navigation.navigate("Home")} />
// //     </View>
// //   )
// // }
// export default App;

// import React from "react";
// import {View,Text,} from "react-native";
// import {NavigationContainer} from "@react-navigation/native";
// import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// // import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

// const Tab= createBottomTabNavigator();
// const App=()=>{
//   return (
//     <NavigationContainer> 
//       <Tab.Navigator>
//         <Tab.Screen name="LoginScreen" component={LoginScreen}/>
//         <Tab.Screen name="SignUpScreen" component={SignUpScreen}/>
//         <Tab.Screen name="LogoutScreen" component={LogoutScreen}/>

//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// const LoginScreen=()=>{
//   return(
//     <View style={{flex:1, alignItems:"center",justifyContent:"center"}}>
//       <Text style={{fontSize:30,}}>LoginScreen </Text>
//     </View>
//   )
// }
// const SignUpScreen=()=>{
//   return(
//     <View style={{flex:1, alignItems:"center",justifyContent:"center"}}>
//       <Text style={{fontSize:30}}>SignUpScreen </Text>
//     </View>
//   )
// }
// const LogoutScreen=()=>{
//   return(
//     <View style={{flex:1, alignItems:"center",justifyContent:"center"}}>
//       <Text style={{fontSize:30}}>LogoutScreen </Text>
//     </View>
//   )
// }

//  export default App;


/** API call***/
// import React, { useEffect, useState } from "react";
// import { View, Text } from "react-native";

// const App = () => {
//   const [data,setData]=useState("undefined");

//   const getAPIData = async () => {
//     const url = "https://jsonplaceholder.typicode.com/posts/1";
//     let result = await fetch(url);
//     result = await result.json();
//     // console.warn(result);
//     setData(result)
//   }

//   useEffect(() => {
//     getAPIData();
//   }, [])


//   return (
//     <View>
//       <Text style={{fontSize:30}}>API call </Text>
//       {
//         data ? <View>
//           <Text style={{fontSize:25}}>{data.id}</Text>
//           <Text style={{fontSize:25}}>{data.userId}</Text>
//           <Text style={{fontSize:25}}>{data.title}</Text>
//           <Text style={{fontSize:25}}>{data.body}</Text>
//            </View> :null
//       }
//     </View>
//   )
// }

// export default App;

// List With Api call***///

// import React, { useState,useEffect} from "react";
// import { View, Text, ScrollView } from "react-native";

// const App = () => {
//   const [data, setData] = useState("");

//   const getAPIData = async () => {
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result);
//   }

//   useEffect(()=>{
//     getAPIData()
//   },[])

//   return (
//     <ScrollView>
//       <Text style={{fontSize:30}}>List With API</Text>
//       {
//         data.length ?
//           data.map((item) => <View style={{padding:10, borderBottomColor:'green',borderBottomWidth:5}}>
//             <Text style={{ fontSize: 20,backgroundColor:"red" }}>Id:{item.id}</Text>
//             <Text style={{ fontSize: 20 }}>Title:{item.title}</Text>
//             <Text style={{ fontSize: 20 }}>Body:{item.body}</Text>
//           </View>
//           )
//           : null
//       }
//     </ScrollView>
//   )
// }
// export default App;

///*** FLATLIST RENDER ITEM */

// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList } from "react-native";

// const App = () => {
//   const [data, setData] = useState([]);

//   const getAPIData = async () => {
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result);
//   }
//   useEffect(() => {
//     getAPIData();
//   })

//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>FLATLIST WITH APIDATA</Text>
//       {
//         data.length ?
//           <FlatList
//             data={data}
//             renderItem={({item }) => <View style={{borderBottomColor:"orange",borderBottomWidth:5,padding:7}}>
//               <Text style={{ fontSize: 25,backgroundColor:"skyblue"}}> {item.id}</Text>
//               <Text style={{ fontSize: 20 }}> {item.title}</Text>
//               <Text style={{ fontSize: 20 }}> {item.body}</Text>
//             </View>}
//           />
//           : null
//       }
//     </View>
//   )
// }
// export default App;

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





























