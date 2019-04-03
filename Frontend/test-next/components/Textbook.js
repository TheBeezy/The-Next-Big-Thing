import firebase from 'firebase'
import data from '../FireBaseConfig.json'

// Initialize firebase
if (!firebase.apps.length) {
    firebase.initializeApp(data);
}

class Textbook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            listings: 0.0,
            rating: 0.0,
        }
        var textbookRef = firebase.firestore().collection('textbooks').where('isbn','==',props.id)
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
            <h1>{this.state.title}</h1>
        )
    }
}

export default Textbook