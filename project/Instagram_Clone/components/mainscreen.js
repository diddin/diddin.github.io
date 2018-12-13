import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import AddMediaTab from './AppTabNavigator/AddMediaTab.js';
import HomeTab from './AppTabNavigator/HomeTab.js';
import LikesTab from './AppTabNavigator/LikesTab.js';
import ProfileTab from './AppTabNavigator/ProfileTab.js';
import SearchTab from './AppTabNavigator/SearchTab.js';

class HeadTitle extends Component {
  render(){
    return(
      <Text style={{ 
        flex: 1, 
        textAlign:'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight:"bold", 
        height: 30 }}>Instagram</Text>
    );
  }
}

export default class MainScreen extends Component {
  static navigationOptions = {
  headerTitle: <HeadTitle/>,
  headerLeft : <Icon
  iconStyle= {{paddingLeft:10}}
  name='camera'
  type='feather'
  onPress={() => alert('This is a button!')}
/>,
  headerRight : <Icon
  iconStyle= {{paddingRight:10}} 
  type='feather' 
  name={"send"} />,}
    render() {
        return(
          <AppContainer/>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
  HomeTab: HomeTab,
  SearchTab: SearchTab,
  AddMediaTab:AddMediaTab,
  LikesTab:LikesTab,
  ProfileTab:ProfileTab,
},{
  animationEnabled: true,
  swipeEnabled:true,
  tabBarPosition:'bottom',
  tabBarOptions: {
    activeTintColor:'#000',
    inactiveTintColor:'#eee',
    showLabel:false,
    showIcon:true,
  },
}
);

const AppContainer =  createAppContainer(TabNavigator);




   

