import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
export const Login = (props) => {
    const [name, setName] = useState("");
    const age = 30;
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>Login Screen </Text>
            <TextInput style={{ fontSize: 20, borderWidth: 3, borderColor: "Black" }}
                onChangeText={(text) => setName(text)} placeholder="Enter name" />
            <Button title="Go to Home Screen"
                onPress={() => props.navigation.navigate("Home", { name, age })} />
        </View>
    )
}