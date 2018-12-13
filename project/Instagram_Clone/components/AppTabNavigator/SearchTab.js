import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class SearchTab extends Component {
    static navigationOptions = {
        tabBarIcon : ({ tintColor }) => ( <Icon
        name='search'
        type='evilicon'
        color='#517fa4'
        /> ),
    }
    render(){
        return(
            <View style={styles.view}>
            <Text>SearchTab</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view : {
    backgroundColor: 'powderblue',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 60,
    },
})