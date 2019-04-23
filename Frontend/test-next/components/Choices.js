//Unused
class Choices extends React.Component {
	state = {
		location : 'PFT', hour : '1', minutes : '00', month : 'January', date : '1', period: 'AM'
	}

	render() {
		return(
			<div>
			<p>Select a location to meet</p> 
			<select onChange = {e => this.setState({location : e.target.value})} className = "form-control">
				<option value = "PFT">PFT</option>
				<option value = "Union">Union</option>
				<option value = "Middleton">Middleton</option>
			</select>
			<p> Select a time to meet</p>
			<select onChange = {e => this.setState({hour : e.target.value})} className = "form-control">
				<option value = "1">1</option>
				<option value = "2">2</option>
				<option value = "3">3</option>
				<option value = "4">4</option>
				<option value = "5">5</option>
				<option value = "6">6</option>
				<option value = "7">7</option>
				<option value = "8">8</option>
				<option value = "9">9</option>
				<option value = "10">10</option>
				<option value = "11">11</option>
				<option value = "12">12</option>

			</select>
			<select onChange = {e => this.setState({minutes : e.target.value})} className = "form-control">
				<option value = "00">00</option>
				<option value = "15">15</option>
				<option value = "30">30</option>
				<option value = "45">45</option>
			</select>
			<select onChange = {e => this.setState({period : e.target.value})} className = "form-control">
				<option value = "AM">AM</option>
				<option value = "PM">PM</option>
			</select>
			<p> Select a date to meet</p>
			<select onChange = {e => this.setState({month : e.target.value})} className = "form-control">
				<option value = "January">January</option>
				<option value = "February">February</option>
				<option value = "March">March</option>
				<option value = "April">April</option>
				<option value = "May">May</option>
				<option value = "June">June</option>
				<option value = "July">July</option>
				<option value = "August">August</option>
				<option value = "September">September</option>
				<option value = "October">October</option>
				<option value = "November">November</option>
				<option value = "December">December</option>

			</select>
			<select onChange = {e => this.setState({date : e.target.value})} className = "form-control">
				<option value = "1">1</option>
				<option value = "2">2</option>
				<option value = "3">3</option>
				<option value = "4">4</option>
				<option value = "5">5</option>
				<option value = "6">6</option>
				<option value = "7">7</option>
				<option value = "8">8</option>
				<option value = "9">9</option>
				<option value = "10">10</option>
				<option value = "11">11</option>
				<option value = "12">12</option>
				<option value = "13">13</option>
				<option value = "14">14</option>
				<option value = "15">15</option>
				<option value = "16">16</option>
				<option value = "17">17</option>
				<option value = "18">18</option>
				<option value = "19">19</option>
				<option value = "20">20</option>
				<option value = "21">21</option>
				<option value = "22">22</option>
				<option value = "23">23</option>
				<option value = "24">24</option>
				<option value = "25">25</option>
				<option value = "26">26</option>
				<option value = "27">27</option>
				<option value = "28">28</option>
				<option value = "29">29</option>
				<option value = "30">30</option>
				<option value = "31">31</option>
			</select>
			<br/>
			The meeting place for this exchange will be at {this.state.location} at {this.state.hour}:{this.state.minutes} {this.state.period} on {this.state.month} {this.state.date}.
			<br/>
			</div>
		);
	}

}
export default Choices
