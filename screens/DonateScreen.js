import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MyHeader from '../components/Header';

export default class DonateScreen extends React.Component {
    render(){
        return(
            <View>
                <MyHeader text="DONATE ITEMS" />
                <Text>LIST OF ALL ITEMS</Text>
            </View>
        )
    }
}