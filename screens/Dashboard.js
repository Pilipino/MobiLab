import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

import StatusBarBackground from '../components/StatusBarBackground';


import firebase from 'firebase';

export default class Dashboard extends Component {

	static navigationOptions = ({navigation}) => ({
		headerRight: <TouchableOpacity 
		onPress={() => navigation.navigate("Settings")}> 
		<Image source={require("../resources/Settings.png")} 
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
			signedIn: false,
			hasError: false
		}

		var user = firebase.auth().currentUser;

		
		firebase.auth().onAuthStateChanged((user) => {
			  if (user) {
			    // User is signed in.
			    this.state.signedIn = true;
			  } else {
			    // No user is signed in.
			    this.state.signedIn = false;
			  }
			});
	}

	render() {



		const {navigation} = this.props;
		
		return(

			<View style={styles.container}>
				<StatusBarBackground/>
					<Text style={styles.subheader}> Mabuhay! </Text>
					<Text style={styles.para}> You could edit your details in Settings! </Text>

					<TouchableOpacity style={styles.button}>

						<Text style={styles.text}> Input Data </Text>

					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("CBCMenu")}>

						<Text style={styles.text}> Complete Blood Count </Text>

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
		fontSize: 50,
		margin: 15,
		textAlign: 'center',
		flexWrap: "wrap",
		
	},

	para : {
		fontFamily: 'Avenir',
		fontWeight: '500',
		color: 'white',
		fontSize: 20,
		margin: 15,
		textAlign: 'center',
		flexWrap: "wrap",
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


