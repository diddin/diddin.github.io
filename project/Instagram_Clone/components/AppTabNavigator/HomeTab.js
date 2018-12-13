import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon : ({ tintColor }) => ( <Icon
        name='home'
        type='fontawesome'
        color='#517fa4'
        /> ),
    }

    render(){
        return(
            <View style={styles.view}>
            <Text>Home Tab</Text>
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