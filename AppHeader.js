import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AppHeader extends React.Component{
    render(){
        return(
            <View
            style={styles.bg}>
                <Text
                style = {styles.title}>
                    Barter App
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        paddingTop: 40,
        fontSize: 30,
        textAlign: "center"
    },
    bg: {
        width: 400,  
        marginTop: 10,      
    }
});