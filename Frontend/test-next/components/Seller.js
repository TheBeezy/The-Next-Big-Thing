import firebase from 'firebase'
import data from '../FireBaseConfig.json'


// Initialize firebase
if (!firebase.apps.length) {
    firebase.initializeApp(data);
}
var db = firebase.firestore();

class Seller extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        sellerListing: [],
      }

      var sellerRef = db.collection('listings').doc('NOn3ar02fCxtuTbHFgQQ');
      var sellerDoc = sellerRef.get()
      .then(doc => {
          if (!doc.exists) {
            console.log('No such document!');
          } else {
            console.log('Document data:', doc.data());
            this.setState({
                sellerListing: doc.data().user,
            

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
          <a href="javascript:window.open('/reviewPortal','mypopuptitle','width=600,height=400')">User: {this.state.sellerListing}</a>
         
          </div>
      )
  }
}

export default Seller