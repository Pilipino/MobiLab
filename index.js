import { AppRegistry } from 'react-native';
import App from './App';
import * as firebase from 'firebase';

var config = {
	apiKey: "AIzaSyBeYMs4UTT2kukhVledQa_gham2h8has2E",
    authDomain: "mobilab-cadb0.firebaseapp.com",
    databaseURL: "https://mobilab-cadb0.firebaseio.com",
    projectId: "mobilab-cadb0",
    storageBucket: "mobilab-cadb0.appspot.com",
    messagingSenderId: "1019006413220"
}


firebase.initializeApp(config);

AppRegistry.registerComponent('MobiLab', () => App);
