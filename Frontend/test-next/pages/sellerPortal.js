import Layout from '../components/Layout'
import AddListing from '../components/AddListing'




class sellerPortal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title : props.title,
			description: '',
			price : ''
		}
	}
	render() {
		return (
			<div>
			<title>Add a Listing!</title>
			<AddListing title = {this.state.title}/> 
			</div>
		)
	}
}
export default sellerPortal
