import React, { Component } from 'react';
import { Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen'
import Dashboard from './screens/Dashboard'
import Register from './screens/Register'
import Settings from './screens/Settings'
import DetailsMenu from './screens/DetailsMenu'
import CBCMenu from './screens/CBCMenu'
import CountMenu from './screens/Count/CountMenu'
import RBC from './screens/Count/RBC'
import RBCAnalysis from './screens/Count/RBCAnalysis'



import { StackNavigator } from 'react-navigation';


const Navigation = StackNavigator( {
	Home: {screen: HomeScreen},
	Dashboard: {screen: Dashboard},
	Register: {screen: Register},
	Settings: {screen: Settings},
	DetailsMenu: {screen: DetailsMenu},
	CBCMenu: {screen: CBCMenu},
	Count: {screen: CountMenu},
	RBC: {screen: RBC},
	RBCAnalysis: {screen: RBCAnalysis},
});

export default Navigation;