class UserpageOptions extends React.Component {
	
	state = {
		response: "Awaiting Response...",
		responseAffirmative: 'S',
		responseNegative: 'R'
	}
	

	render() {
		return(
			<div>
				<div>
					<h4>Please respond to the following questions to take you to the appropriate page.</h4>
					<p>Are you currently a member of bookmill?</p>
				</div>
				<form>
					<select onChange = {e => this.setState({response : e.target.value})}>
						<option value = "Continue to the">Yes</option>
						<option value = "Continue to the">No</option>
					</select>
				</form>
				<div>
					<p id="foo">{this.state.response} <a id="yesLink" href="/signin">{this.state.responseAffirmative}</a> <a id="noLink" href="/MeetingSchedule">{this.state.responseNegative}</a></p>
				</div>
				<br/>
				<br/>
			</div>
		);
	}
}

export default UserpageOptions
