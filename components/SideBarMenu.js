import * as React from 'react';
import {DrawerItems} from 'react-navigation-drawer';

export default class SideBarMenu extends React.Component{
    render(){
        return(
            <View>
                <DrawerItems {...this.props}/>
            </View>
        )
    }
}