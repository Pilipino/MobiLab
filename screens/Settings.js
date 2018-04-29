import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

import StatusBarBackground from '../components/StatusBarBackground';

import firebase from 'firebase';

export default class Settings extends Component {

	static navigationOptions = {
		
	   headerTitleStyle: {
	      color: 'white',
	   },
	   headerStyle: {
	      backgroundColor: '#A0558B',
	      shadowColor: 'transparent',
	      borderBottomWidth: 0,
	   },
	   headerTintColor: 'white',
	}

	constructor() {
		super();
		this.state = {
			signedIn: false,
			firstName: '',
			lastName: '',
			email: ''
		}

		firebase.auth().onAuthStateChanged((user) => {
		  if (user) {
		   this.state.signedIn = true;
		   this.state.email = user.email;
		  } else {
		    this.state.signedIn = false;
		  }
		});
	}


	render() {

		const {navigation} = this.props;
		var user = firebase.auth().currentUser;

		return(

			<View style={styles.container}>
				<StatusBarBackground/>
					<Text style={styles.subheader}> Settings </Text>
				
					
					<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("DetailsMenu")}
					>

						<Text style={styles.text}> Edit Details </Text>

					</TouchableOpacity>

					<TouchableOpacity style={styles.button} 
					>

						<Text style={styles.text}> Set Location </Text>

					</TouchableOpacity>

					<TouchableOpacity style={styles.button}
					onPress={()=> this.state.signedIn ? 
						
					firebase.auth().signOut()
            		.then(() => { navigation.navigate("Home") })
          
                    .catch((error) => {
                        alert("Authentication has failed.");
                    })	: alert("You are not online.")

					}

				

					>

						<Text style={styles.text}> Signout </Text>

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
		margin: 8,
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


