import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';
import DonateScreen from './DonateScreen';

export default class MedicinesDonateScreen extends React.Component {
    render(){
        return(
            <View>
                <MyHeader text="Donate Medicines" navigation={this.props.navigation}/>
                <Text style={{textAlign: "center", marginTop: 100}}>
                    There are currently no medicine requests
                </Text>
            </View>

        )
    }
}