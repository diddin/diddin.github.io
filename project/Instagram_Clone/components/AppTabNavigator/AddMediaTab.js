import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class AddMediaTab extends Component {
    static navigationOptions = {
        tabBarIcon : ({ tintColor }) => ( <Icon
        name='plus'
        type='evilicon'
        color='#517fa4'
        /> ),
    }
    render(){
        return(
            <View style= {styles.view}>
            <Text>AddMediaTab Tab</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view : {
    backgroundColor: '#eee',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 60,
    },
})