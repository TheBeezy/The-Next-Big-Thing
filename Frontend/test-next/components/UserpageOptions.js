class UserpageOptions extends React.Component {
	
	state = {
		standardMsg: 'Awaiting Response...',
		response : 'oof'
	}
	
	
	
	render() {
		if (this.state.standardMsg === 'Continue to the'){
			alert(this.state.response);
		}
		return(
			<div>
				<div>
					<h4>Please respond to the question to take you to the appropriate page.</h4>
					<p>Are you currently a member of bookmill?</p>
				</div>
				<form>
					<select onChange = {e => this.setState({standardMsg : 'Continue to the'})}>
						<option selected hidden disabled> -- Select one of the following. --</option>
						<option value = 'Sign-In Page'>Yes</option>
						<option value = 'Registration Page'>No</option>
					</select>
				</form>
				<div>
					<p>{this.state.standardMsg} <a id="yesLink" href="/signin">{this.state.response}</a> <a id="noLink" href="/MeetingSchedule">{this.state.response}</a></p>
				</div>
				<br/>
				<br/>
			</div>
		);
	}
}

export default UserpageOptions
