import firebase from 'firebase'
import data from '../FireBaseConfig.json'
import SellerListing from './SellerListing.js';
import Link from 'next/link'

// Initialize firebase
if (!firebase.apps.length) {
    firebase.initializeApp(data);
}
var db = firebase.firestore();

class Seller extends React.Component {
    // Use the results to display a grid of textbook pages
	constructor(props){
		super(props);
		this.state = {
			title: props.id,
			sellerListings: [],
		}
	}

    handleInputChange = () => {
        this.setState({
            sellerListings: [],
        }, () => {
		console.log('title ' + this.state.title);
		 var tbQuery = db.collection('textbooks').doc(this.state.title).collection('listings');
                var getDoc = tbQuery.get()
                    .then(snapshot => {
                        if (snapshot.empty) {
                            console.log('No matching documents!')
                        } else {
                            snapshot.forEach(doc => {
                                console.log(doc.id, '=>', doc.data());
                                var docData = doc.data()        
                                this.setState(prevState => ({
                                    sellerListings: [...prevState.sellerListings,docData]
                            }))
                            console.log('Document data:', this.state.results)
                           
                        })}
                    })
                    .catch(err => {
                        console.log('Error getting document', err)
                    });
                
        })
    }
    render() {
        return (
		<form>
			Search:
			<input
			    type = "button" value = "Get Listing" onClick = {this.handleInputChange}
                />
			<SellerListing sellerListings = {this.state.sellerListings}/>
	  </form>
        )
    }

}

export default Seller
