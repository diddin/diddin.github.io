import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class ProfileTab extends Component {
    static navigationOptions = {
        tabBarIcon : ({ tintColor }) => ( <Icon
        name='user'
        type='evilicon'
        color='#517fa4'
        /> ),
    }
    render(){
        return(
            <View style={styles.view}>
            <Text>ProfileTab</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view : {
    backgroundColor: 'skyblue',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 60,
    },
})