import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class LikesTab extends Component {
    static navigationOptions = {
        tabBarIcon : ({ tintColor }) => ( <Icon
        name='heart'
        type='evilicon'
        color='#517fa4'
        /> ),
    }
    render(){
        return(
            <View style={styles.view}>
            <Text> LikesTab</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view : {
    backgroundColor: '#eef',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 60,
    },
})