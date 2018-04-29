import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, TextInput } from 'react-native';

import StatusBarBackground from '../components/StatusBarBackground';
import Button from '../components/Button';




export default class MainContainer extends Component {


	_onPressButton() {
		alert("Hello");
	}

	render() {
		return(

			<View style={styles.container}>
			
				<StatusBarBackground/>
					<Image source={require("../resources/Brain.png")} 
					style={styles.logo} />
					
					<Text style={styles.subheader}> MobiLab </Text>
					<TextInput style={styles.loginInput} 
					placeholder={"Username"} placeholderTextColor={"white"} underlineColorAndroid='rgba(0,0,0,0)'/>

					<TextInput style={styles.loginInput} 
					placeholder={"Passsword"} placeholderTextColor= {"white"} underlineColorAndroid='rgba(0,0,0,0)'
					secureTextEntry={true}/>

					<TouchableHighlight style={styles.button} onPress={this._onPressButton}>
					
						<Text style={styles.text}> Login </Text>

					</TouchableHighlight>

					<TouchableHighlight style={styles.signup} onPress={this._onPressButton}>
					
						<Text style={styles.text}> Signup </Text>

					</TouchableHighlight>

					


			</View>
		)
	}

}

const styles = StyleSheet.create( {
	container : {
		flex: 1, 
		backgroundColor: '#A0558B', 
		alignItems: 'center',
		justifyContent: 'center',
		
	},

	subheader : {
		fontFamily: 'Avenir',
		fontWeight: '900',
		color: 'white',
		fontSize: 60,
		height: 65,
		marginBottom: 15
		
	},

	logo: {
		alignSelf: 'center',
		height: 100,
		width: 100,
		marginBottom: '5%'
	},

	loginInput: {
		marginTop: 30,
		padding: 15, 
		paddingLeft: 40,
		backgroundColor: '#E879C3', 
		borderRadius: 40, 
		width: '80%',
		color: 'white'
	},

	button: {
		marginTop: 40, 
		padding: 15, 
		backgroundColor: '#EA7CDD', 
		borderRadius: 30, 
		width: '80%',
	},

	text: {
		color: 'white',
		textAlign: 'center',
	},

	signup: {
		marginTop: 10, 
		padding: 15, 
		backgroundColor: '#A0558B', 
		borderRadius: 40, 
		width: '80%',
	}

});


