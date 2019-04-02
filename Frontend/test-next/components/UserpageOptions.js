import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import data from '../FireBaseConfig.json'
import Layout from './Layout.js';

if (!firebase.apps.length) {
  firebase.initializeApp(data);
}

class UserpageOptions extends React.Component {
	
	state = {
		isSignedIn: false,
		standardMsg: 'Awaiting Response...',
		response : '',
		affirmativeResponse: '',
		negativeResponse: '',
		affirmativeVisible: 'hidden',
		negativeVisible: 'hidden',
		
	}
	
	uiConfig = {
		signInFlow: 'popup',
		signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
		callbacks: {
			signInSuccessWithAuthResult: () => false
		}
    };

	componentDidMount() {
		this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
			(user) => this.setState({isSignedIn: !!user})
		);
	}
  
	componentWillUnmount() {
		this.unregisterAuthObserver();
	}

	render() {
		if (this.state.response == 1){
			this.state.standardMsg = 'Continue to the ',
			this.state.affirmativeResponse = 'Sign In page.',
			this.state.negativeResponse = ''
		}
		if (this.state.response == 2){
			this.state.standardMsg = "You're new here! Continue to the next page to ",
			this.state.negativeResponse = 'register!',
			this.state.affirmativeResponse = ''
		}
		console.log(firebase.auth().currentUser);
		if (!this.state.isSignedIn) {
			return(
				<div>
					<h1>Thank you for using Bookmill!</h1>
					<div>
						<h4>Please respond to the question to take you to the appropriate page.</h4>
						<p>Are you currently a member of bookmill?</p>
					</div>
					<form>
						<select onChange = {e => this.setState({response : e.target.selectedIndex})}>
							<option selected hidden disabled> -- Select one of the following. --</option>
							<option value = 'Sign-In Page'>Yes</option>
							<option value = 'Registration Page'>No</option>
						</select>
					</form>
					<div>
						<p>{this.state.standardMsg} <a id="yesLink" href="/signin">{this.state.affirmativeResponse}</a> <a id="noLink" href="/editUserpage">{this.state.negativeResponse}</a></p>
					</div>
					<br/>
					<br/>
				</div>
			);
		}	
		return(
		<div>
			<p>Welcome {firebase.auth().currentUser.displayName}, to your profile page.</p>
			<button onClick={() => firebase.auth().signOut()}>Sign-out</button>
		</div>

		);
	}
}

export default UserpageOptions
