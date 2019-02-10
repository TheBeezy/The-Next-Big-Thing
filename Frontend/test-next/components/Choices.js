class Choices extends React.Component {
	state = {
		value : 'PFT'
	}

	render() {
		return(
			<div>
			<select onChange = {e => this.setState({value : e.target.value})} className = "form-control">
					<option value = "PFT">PFT</option>
					<option value = "Union">Union</option>
					<option value = "Middleton">Middleton</option>
			</select>
			<ul clasName = "list-group"> 
			The meeting place for this exchange will be at {this.state.value}
			</ul>
			<br/>
			</div>
		);
	}

}
export default Choices
