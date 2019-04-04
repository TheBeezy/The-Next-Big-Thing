import Layout from '../components/Layout'
import AddListing from '../components/AddListing'

export default (props) => (
    <div>
		<title>Add a Listing!</title>
		Give us a description of your book, including its condition and price, to add your listing
		<AddListing bookTitle={props.router.query.id}/>
	</div>
)