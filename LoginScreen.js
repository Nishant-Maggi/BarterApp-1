import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import db from '../config';
import * as firebase from "firebase";

import AppHeader from '../AppHeader';

export default class LoginScreen extends React.Component{

    constructor(){
        super();

        this.state = {
            email : "",
            password: "",
            isModalVisible: false
        }
    }

    userRegister = async()=>{
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((response)=>{
            return(
                Alert.alert("User Added Successfuly", "" , [{text: "OK", onPress: ()=>{
                    this.setState({
                        isModalVisible: true
                    })
                }}])               
            );
        })
        .catch((error)=>{
            return(
                Alert.alert(error.message)
            );
        })
    }

    userLogin = async()=>{
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((response)=>{
            return(
                Alert.alert("Logged in Succesfully")
            );
        })
        .catch((error)=>{
            return(
                Alert.alert(error.message)
            );
        })
    }

    registerForm = async()=>{
        db.collection("users").add({
            email: this.state.email,
            passcode: this.state.password
        })
    }

    showModal = ()=>{
        return(

            <Modal
            animationType="fade"
            transparent={true}
            visible = {this.state.isModalVisible}>

                <View
                style={styles.modalContainer}>

                    <ScrollView
                    style={{width: '100%'}}>

                        <KeyboardAvoidingView
                        style={styles.KeyboardAvoidingView}>

                            <Text
                            style={styles.modalTitle}>
                                Registration
                            </Text>

                            <TextInput
                            placeholder = "First Name"
                            style={styles.registrationTextInput}>
                            </TextInput>

                            <TextInput
                            placeholder = "Last Name"
                            style={styles.registrationTextInput}>
                            </TextInput>

                            <TextInput
                            placeholder = "Phone Number"
                            style={styles.registrationTextInput}>
                            </TextInput>

                            <TextInput
                            placeholder = "Address"
                            style={styles.registrationTextInput}>
                            </TextInput>

                            <TextInput
                            value = {this.state.email}
                            style = {styles.registrationTextInput}>
                            </TextInput>

                            <TextInput
                            value = {this.state.password}
                            secureTextEntry = {true}
                            style = {styles.registrationTextInput}>
                            </TextInput>

                            <TextInput
                            placeholder = "Confirm Password"
                            secureTextEntry = {true}
                            style = {styles.registrationTextInput}>

                            </TextInput>

                            <TouchableOpacity
                            style={styles.loginButton}>
                                <Text
                                style={styles.loginButtonText}
                                onPress={()=>{
                                    this.registerForm();
                                }}>
                                    Register
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                            style={styles.loginButton}
                            onPress={()=>{
                                this.setState({
                                    isModalVisible: false
                                });
                            }}>
                                <Text
                                style={styles.loginButtonText}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>

                        </KeyboardAvoidingView>

                    </ScrollView>

                </View>

            </Modal>
        );
    }
    render(){
        return(
            <View
            style={{backgroundColor: '#FEE0B4', height: '110%'}}>
                <View
                style={{justifyContent :'center', alignItems : 'center'}}>
                    {this.showModal()}
                </View>                
                <AppHeader/>
                <View>
                    <TextInput
                    style={styles.emailBox}
                    placeholder="xyz@gmail.com"
                    keyboardType='email-address'
                    onChangeText = {(text)=>{
                        this.setState({
                            email: text
                        })
                    }}>
                    </TextInput>

                    <TextInput
                    style={styles.passwordBox}
                    placeholder="Password"
                    secureTextEntry = {true}
                    onChangeText = {(text)=>{
                        this.setState({
                            password: text
                        })
                    }}>
                    </TextInput>

                    <TouchableOpacity
                    style={styles.loginButton}
                    onPress={()=>{
                        this.userLogin();
                    }}>
                        <Text
                        style={styles.loginButtonText}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={()=>{
                        this.userRegister();
                    }}>
                        <Text
                        style={styles.loginButtonText}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    emailBox: {
        borderBottomWidth: 2,
        marginTop: 100,
        marginBottom: 20,
        height: 30,
        width: 250,
        marginLeft: 60
    },
    passwordBox:{
        borderBottomWidth: 2,
        marginTop: 20,
        marginBottom: 20,
        height: 30,
        width: 250,
        marginLeft: 60
    },
    loginButton: {
        marginBottom: 10,
        marginTop: 70,
        backgroundColor: "#FBC02D",
        width: 150,
        height: 50,
        marginLeft: 100,
        borderRadius : 15,
    },
    loginButtonText: {
        padding: 10,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    signUpButton: {
        marginBottom: 10,
        marginTop: 30,
        width: 150,
        height: 50,
        marginLeft: 100,
        backgroundColor: "#FBC02D",
        borderRadius : 15,
    },
    modalContainer: {
        
    },
    modalTitle: {
        backgroundColor: 'red'
    },
    registrationTextInput: {
        borderWidth: 2,
        marginTop: 0.2
    }
});