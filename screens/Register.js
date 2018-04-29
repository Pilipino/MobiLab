import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

import firebase from 'firebase'

import StatusBarBackground from '../components/StatusBarBackground';




export default class Register extends Component {

	static navigationOptions = {
		headerTintColor: 'white',
		headerStyle: {
			backgroundColor: '#A0558B',
	      	shadowColor: 'transparent',
	      	borderBottomWidth: 0,
		},

	}

	constructor() {

		super();

	
		this.state = {
			email: '',
			password: '',
			passwordVerify: ''
		}


	}


	render() {
		const {navigation} = this.props;

		return(

			<View style={styles.container}>
			
				<StatusBarBackground/>
					<Image source={require("../resources/Brain.png")} 
					style={styles.logo} />

					<TextInput style={styles.loginInput} 
					placeholder={"Email"} placeholderTextColor={"white"} underlineColorAndroid='rgba(0,0,0,0)'
					onChangeText={(typedText) => {this.setState({email: typedText})}}
					autoCorrect={false}/>

					<TextInput style={styles.loginInput} 
					placeholder={"Password"} placeholderTextColor= {"white"} underlineColorAndroid='rgba(0,0,0,0)'
					secureTextEntry={true}
					onChangeText={(typedText) => {this.setState({password: typedText})}} 
					autoCorrect={false}/>

					<TextInput style={styles.loginInput} 
					placeholder={"Passsword Verification"} placeholderTextColor= {"white"} underlineColorAndroid='rgba(0,0,0,0)'
					secureTextEntry={true} 
					onChangeText={(typedText) => {this.setState({passwordVerify: typedText})}}
					autoCorrect={false}/>

					<TouchableOpacity style={styles.button} onPress={(state) => 
					this.state.password === this.state.passwordVerify ? 
					firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            		.then(() => { navigation.navigate("Home") })
          
                    .catch((error) => {
                        alert(error.message);
                    }) : alert("Passwords do not match.")
    


					}>
					
						<Text style={styles.text}> Register </Text>

					</TouchableOpacity>

	

					


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
		marginBottom: '8%'
	},

	loginInput: {
		marginTop: 30,
		padding: 10, 
		paddingLeft: 40,
		backgroundColor: '#E879C3', 
		borderRadius: 40, 
		width: '80%',
		color: 'white'
	},

	button: {
		marginTop: 40, 
		padding: 10, 
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
		padding: 10, 
		backgroundColor: '#A0558B', 
		borderRadius: 40, 
		width: '80%',
	}


});


