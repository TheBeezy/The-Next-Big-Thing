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
		madeProfile: false,
		madeLink: false,
		standardMsg: 'Awaiting Response...',
		response : '',
		affirmativeResponse: '',
		negativeResponse: '',
		describe: '',
		domainURL: 'https://www.paypal.me/',
		endingURL: '',
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
		var startPPLink = this.state.domainURL;
		var endingPPLink = this.state.endingURL;
		var ppLink = startPPLink.concat(endingPPLink);
		if (this.state.response == 1){
			this.state.standardMsg = 'Welcome back! Continue to the next page to ',
			this.state.affirmativeResponse = 'sign in.',
			this.state.negativeResponse = ''
		}
		if (this.state.response == 2){
			this.state.standardMsg = "You're new here! Continue to the next page to ",
			this.state.negativeResponse = 'register.',
			this.state.affirmativeResponse = ''
		}
		if (this.state.madeLink){
			var userDatabase = firebase.auth().currentUser.displayName;
			var linkDatabase = this.state.endingURL;
			firebase.database().ref('/dataUsers/' + userDatabase + '/link').set(linkDatabase);
			return(
				<div>
					<p>Welcome {firebase.auth().currentUser.displayName}, to your profile page.</p>
					<p>Valued member since {firebase.auth().currentUser.metadata.creationTime}.</p>
					<form>
						<p>Description: 
						<br/>
						<br/>
						{this.state.describe}</p>
						<br/>
						<br/>
						<p>Paypal Link:</p>
						<a href={ppLink} target="_blank">
							<img id="paypal" src = "static/paypalLogo.png" width="108" height="108"/>
						</a>
						<br/>
						<br/>
					</form>	
					<p></p>
					<br/>
					<br/>
					<button onClick={() => firebase.auth().signOut()}>Sign-out</button>
				</div>
			);
		}
		if (this.state.madeProfile) {
			var userDatabase = firebase.auth().currentUser.displayName;
			var descripDatabase = this.state.describe;
			firebase.database().ref('/dataUsers/' + userDatabase + '/description').set(descripDatabase);
			return(
				<div>
					<p>Welcome {firebase.auth().currentUser.displayName}, to your profile page.</p>
					<p>Valued member since {firebase.auth().currentUser.metadata.creationTime}.</p>
					<form>
						<p>Description: 
						<br/>
						<br/>
						{this.state.describe}</p>
						<br/>
						<p>For digital transactions, type in PayPal link:</p>
						<p> {this.state.domainURL}  <input id='linkInput' style={{ width: 300}}></input> </p>
						
						<br/>
						<br/>
						<button onClick= {e => this.setState({endingURL: document.getElementById('linkInput').value,
															  madeLink : true})}>Enter</button>
					</form>	
					<p></p>
					<br/>
					<br/>
					<br/>
					<br/>
					<button onClick={() => firebase.auth().signOut()}>Sign-out</button>
				</div>
			);
		}
		if (this.state.isSignedIn) {
			return(
				<div>
					<p>Welcome {firebase.auth().currentUser.displayName}, to your profile page.</p>
					<p>Valued member since {firebase.auth().currentUser.metadata.creationTime}.</p>
					<form>
						<p>Description:</p>
						<input id='descripInput' style={{ width: 500}} placeholder='Say some things you think other users should know.'></input>
						<br/>
						<br/>
						<button onClick= {e => this.setState({describe: document.getElementById('descripInput').value,
															  madeProfile : true})}>Enter</button>
					</form>	
					<p></p>
					<br/>
					<br/>
					<br/>
					<br/>
					<button onClick={() => firebase.auth().signOut()}>Sign-out</button>
				</div>
			);			
		} 
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
					<p>{this.state.standardMsg} <a id="yesLink" href="/signin">{this.state.affirmativeResponse}</a> <a id="noLink" href="/signin">{this.state.negativeResponse}</a></p>
				</div>
				<br/>
				<br/>
			</div>
		);		

	}
}

export default UserpageOptions
