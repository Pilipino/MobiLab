import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

import StatusBarBackground from '../components/StatusBarBackground';

import firebase from 'firebase';

export default class DetailsMenu extends Component {

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
			email: '',
			uid: ''
		}

		

	}

	componentDidMount() {

		var user = firebase.auth().currentUser;

		if (user) {
		var dbRef = firebase.database().ref();
		

		var usersRef = dbRef.child('users').child(user.uid).child('firstName');

		usersRef.on('value', snap=> {
			this.setState( {
				firstName: snap.val()
			});
		});

		var usersRef = dbRef.child('users').child(user.uid).child('lastName');


		usersRef.on('value', snap=> {
			this.setState( {
				lastName: snap.val()
			});
		});
		
		}

		user ? this.state.email = user.email : this.state.email = '';


	}

	render() {

		const {navigation} = this.props;
		var user = firebase.auth().currentUser;

		firebase.auth().onAuthStateChanged((user) => {
		  if (user) {
		   this.state.signedIn = true;
		   this.state.email = user.email;
		   this.state.uid = user.uid;
		  } else {
		    this.state.signedIn = false;
		  }
		});
	


		return(

			<View style={styles.container}>
				<StatusBarBackground/>

					<Text style={styles.subheader}> Your Details </Text>

					<TextInput style={styles.loginInput} 
					placeholder={"Email"} placeholderTextColor={"white"} underlineColorAndroid='rgba(0,0,0,0)'
					onChangeText={(typedText) => {this.setState({email: typedText})}}
					autoCorrect={false} value={this.state.email}/>

					<TextInput style={styles.loginInput} 
					placeholder={"First Name"} placeholderTextColor={"white"} underlineColorAndroid='rgba(0,0,0,0)'
					onChangeText={(typedText) => {this.setState({firstName: typedText})}}
					autoCorrect={false} value={this.state.firstName}/>

					<TextInput style={styles.loginInput} 
					placeholder={"Last Name"} placeholderTextColor={"white"} underlineColorAndroid='rgba(0,0,0,0)'
					onChangeText={(typedText) => {this.setState({lastName: typedText})}}
					autoCorrect={false} value={this.state.lastName}/>

					


					<TouchableOpacity style={styles.button}
					onPress={()=> user ? 
						user.updateProfile({
  							email: this.state.email,
						}).then((state) => {
							firebase.database().ref().child('users').child(user.uid).set({
    							firstName: this.state.firstName,
    							lastName: this.state.lastName
							});
  							navigation.navigate("Settings");
						}).catch(function(error) {
  							alert(error.message);
						}) : alert("You are currently not online.") }>

						<Text style={styles.text}> Update </Text>

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
		fontSize: 40,
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
		marginTop: 20,
		padding: 15, 
		paddingLeft: 40,
		backgroundColor: '#E879C3', 
		borderRadius: 40, 
		width: '80%',
		color: 'white'
	},

	button: {
		marginTop: 30, 
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













