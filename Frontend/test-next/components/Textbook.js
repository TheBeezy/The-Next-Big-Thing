import firebase from 'firebase'
import data from '../FireBaseConfig.json'

class Textbook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            listings: 0.0,
            rating: 0.0,
        }
        var db = props.db
        var textbookRef = db.collection('textbooks').where('isbn','==',props.id)
        var textbookDoc = textbookRef.get().then(snapshot => {
            if (snapshot.empty) {
              console.log('No such document!');
            } else {
              snapshot.forEach(doc => {
                console.log('Document data:', doc.data());
                if(doc.data().listings != null && doc.data().rating != null) {
                  this.setState({
                    title: doc.data().name,
                    listings: doc.data().listings,
                    rating: doc.data().rating,
                  })
                }
                else {
                  this.setState({
                    title: doc.data().name,
                    listings: 0,
                    rating: 0,
                  })
                }
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