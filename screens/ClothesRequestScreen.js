import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import MyHeader from '../components/Header';
import db from '../config';
import firebase from 'firebase';

export default class FoodRequestScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            emailID: firebase.auth().currentUser.email,
            gender: "",
            clothSize: "",
            clothName: "",
        }
    }

    addFoodRequest=()=>{
        db.collection("requestedFoods").add({
            "foodName": this.state.foodName,
            "synopsis": this.state.synopsis,
            "requesterID": this.state.emailID,
            "date": firebase.firestore.FieldValue.serverTimestamp()
        })
        this.setState({
            foodName: "",
            synopsis: "",
        })
        return Alert.alert("Food item requested successfully!!");
    }

    
    render(){
        return(
            <View>
                <MyHeader text="FOOD" />
                <TextInput placeholder="Enter type or name of cloth" style={styles.input1}
                onChangeText={(text)=>{
                    this.setState({foodName: text})
                }}/>

                <TextInput placeholder="Male or Female" style={styles.input1}
                onChangeText={(text)=>{
                    this.setState({foodName: text})
                }}/>

                <TextInput placeholder="Enter size" style={styles.input1}
                onChangeText={(text)=>{
                    this.setState({foodName: text})
                }}/>

                <TextInput placeholder="Any other preferences (optional)" 
                style={[styles.input1, {}]}
                onChangeText={(text)=>{
                    this.setState({foodName: text})
                }}/>

                <TouchableOpacity style={styles.button} 
                onPress={()=>{
                    this.addFoodRequest();
                    this.setState({
                        foodName: "",
                        synopsis: "",
                    })
                }}>
                    <Text style={styles.buttonText}>REQUEST FOOD ITEM</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input1: {
        borderWidth: 3,
        borderColor: "#0080ff",
        width: "90%",
        margin: 20,
        marginTop: 40,
        borderRadius: 10,
        textAlign: "center",
        height: "12%",
        fontWeight: "bold",
        fontSize: 18
    },
    button: {
        borderRadius: 10,
        backgroundColor: "#0080ff",
        width: "60%",
        height: "5%",
        alignSelf: "center",
        marginTop: 20
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        marginTop: 6
    }
})