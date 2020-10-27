import * as React from 'react';
import {Header} from 'react-native-elements';

export default class MyHeader extends React.Component {
    render(){
        return (
            <Header 
            centerComponent={{text: this.props.text, 
                style:{fontWeight: "bold", fontSize: 20, color: "darkblue"}}}
            backgroundColor="lightblue"/>
        )
    }
}