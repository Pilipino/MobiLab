import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Icon, Image, StatusBar, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import firebase from 'firebase';

import StatusBarBackground from '../components/StatusBarBackground';


export default class HomeScreen extends Component {
	
	static navigationOptions = ({navigation}) => ({ 

		headerRight: <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}> 
		<Image source={require("../resources/Offline.png")} 
					style={{width: 30, height: 30, margin: 20}}/> 
					</TouchableOpacity>,

	   headerTitleStyle: {
	      color: 'white',
	   },
	   headerStyle: {
	      backgroundColor: '#A0558B',
	      shadowColor: 'transparent',
	      borderBottomWidth: 0,
	   },
	   headerTintColor: 'white',
	});


	constructor() {

		super();

	
		this.state = {
			email: '',
			password: '',
		}


	}

	render() {

		const {navigation} = this.props;

		return(

			<View style={styles.container}>


			
				<StatusBarBackground/>
					<Image source={require("../resources/Brain.png")} 
					style={styles.logo} />
					<Text style={styles.subheader}> MobiLab </Text>
					<TextInput style={styles.loginInput} onChangeText={(typedText) => {this.setState({email: typedText})}}
					placeholder={"Email"} placeholderTextColor={"white"} underlineColorAndroid='rgba(0,0,0,0)'
					/>

					<TextInput style={styles.loginInput} onChangeText={(typedText) => {this.setState({password: typedText})}} 
					placeholder={"Passsword"} placeholderTextColor= {"white"} underlineColorAndroid='rgba(0,0,0,0)'
					secureTextEntry={true}/>

					<TouchableOpacity style={styles.button} onPress={() => 

					firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            		.then(() => { navigation.navigate("Dashboard") })
          
                    .catch((error) => {
                        alert("Authentication has failed.");
                    })
            		}>
					
						<Text style={styles.text}> Login </Text>

					</TouchableOpacity>

					<TouchableOpacity style={styles.signup} onPress={()=> navigation.navigate("Register")}>
					
						<Text style={styles.text}> Signup </Text>

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
		height: 85,
		width: 85,
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


