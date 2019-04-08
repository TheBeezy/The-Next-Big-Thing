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
        description: [],
        
      }
      var sellerRef = db.collection('textbooks').doc('21ST CENTURY ASTR.:SOLAR...(LL)-PKG., KAY').collection('listing');
//      var sellerRef = db.collection('listings').doc('NOn3ar02fCxtuTbHFgQQ');
      var sellerDoc = sellerRef.get()
      .then(doc => {
          if (!doc.exists) {
            console.log('No such document!');
          } else {
            console.log('Document data:', doc.data());
            this.setState({
                description: doc.data(),
            

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
             {this.state.description}
          </div>
      )
  }
}

export default Seller
