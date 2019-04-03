import firebase from 'firebase'
import data from '../FireBaseConfig.json'

// Initialize firebase
if (!firebase.apps.length) {
    firebase.initializeApp(data);
}
var db = firebase.firestore();

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
              console.log(props.id)
            } else {
              console.log('Document data:', doc.data());
              this.setState({
                  title: doc.data().name,
                  listings: doc.data().listings,
                  rating: doc.data().rating,
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
            <h1>{this.state.title}</h1>
            <p>Listings: {this.state.listings}</p>
            <p>Rating: {this.state.rating}</p>
            </div>
        )
    }
}

export default Textbook