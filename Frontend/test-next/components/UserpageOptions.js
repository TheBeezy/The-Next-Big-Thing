class UserpageOptions extends React.Component {
	
	state = {
		standardMsg: 'Awaiting Response...',
		response : '',
		affirmativeResponse: '',
		negativeResponse: ''
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
		return(
			<div>
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
}

export default UserpageOptions
