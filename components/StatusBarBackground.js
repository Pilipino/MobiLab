import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class StatusBarBackground extends Component {

	render() {
		return(
			<View style={styles.StatusBarBackground}>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	StatusBarBackground: {
		height: 20,
	}
}); 


