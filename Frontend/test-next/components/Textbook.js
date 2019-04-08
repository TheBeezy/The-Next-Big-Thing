<<<<<<< HEAD
=======
import firebase from 'firebase'
import data from '../FireBaseConfig.json'
import Link from 'next/link'
import SellerPortal from '../pages/sellerPortal.js' 

// Initialize firebase
if (!firebase.apps.length) {
    firebase.initializeApp(data);
}
var db = firebase.firestore();

>>>>>>> 0ba48505911629544aad7b492859e8ff435697a2
class Textbook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.id,
            listings: 0.0,
            rating: 0.0,
        }
        var textbookRef = db.collection('textbooks').where("name",'==',this.state.title)
        var textbookDoc = textbookRef.get().then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
<<<<<<< HEAD
              snapshot.forEach(doc => {
                console.log('Document data:', doc.data());
                if(doc.data().listings != null && doc.data().rating != null) {
                  this.setState({
                    title: doc.data().name,
                    listings: doc.data().listings+1,
                    rating: doc.data().rating,
                  })
                }
                else {
                  this.setState({
                    title: doc.data().name,
                  })
                }
=======
              console.log('Document data:', doc.data());
              this.setState({
                  title: doc.data().name,
                  listings: doc.data().listings,
                  rating: doc.data().rating,
>>>>>>> 0ba48505911629544aad7b492859e8ff435697a2
              })
            }
          })
          .catch(err => {
            console.log('Error getting document', err);
          });

    }
    render() {
        return (
            <div>
<<<<<<< HEAD
              <h1>{this.state.title}</h1>
              <p>Listings: {this.state.listings}</p>
              <p>Rating: {this.state.rating}</p>
=======
            <h1>{this.state.title}</h1>
	    <p>Post a listing for this book!</p>
		<SellerPortal title = {this.state.title}/>		
>>>>>>> 0ba48505911629544aad7b492859e8ff435697a2
            </div>
        )
    }
}

export default Textbook
