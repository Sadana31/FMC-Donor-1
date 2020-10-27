import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MyHeader from '../components/Header';

export default class MedicineRequestScreen extends React.Component {
    render(){
        return(
            <View>
                <MyHeader text="MEDICINES" />
                <Text>REQUEST FOR MEDICINES HERE</Text>
            </View>
        )
    }
}