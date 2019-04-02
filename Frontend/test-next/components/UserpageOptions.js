class UserpageOptions extends React.Component {
	
	state = {
		response: 'Awaiting Response...',
		responseAffirmative: '',
		responseNegative: ''
	}

	

	render() {
		if (this.state.response === 'Continue to the'){
			alert(document.getElementById('janedoe').selectedIndex)
		}
		return(
			<div>
				<div>
					<h4>Please respond to the question to take you to the appropriate page.</h4>
					<p>Are you currently a member of bookmill?</p>
				</div>
				<form>
					<select id = 'janedoe' onChange = {e => this.setState({response : 'Continue to the'})}>
						<option selected hidden disabled> -- Select one of the following. --</option>
						<option id = 'danejoe' value = "jeff">Yes</option>
						<option value = "fred">No</option>
					</select>
				</form>
				<div>
					<p>{this.state.response} <a id="yesLink" href="/signin">{this.state.responseAffirmative}</a> <a id="noLink" href="/MeetingSchedule">{this.state.responseNegative}</a></p>
				</div>
				<br/>
				<br/>
			</div>
		);
	}
}

export default UserpageOptions
