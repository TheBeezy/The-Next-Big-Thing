import firebase from 'firebase'
import data from '../FireBaseConfig.json'

// Initialize firebase
if (!firebase.apps.length) {
    firebase.initializeApp(data);
}
var db = firebase.firestore();

class Search extends React.Component {
    state = {
        query: '',
        results: [],
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if(this.state.query && this.state.query.length > 0) {
                console.log(this.state.query)
                var tbQuery = db.collection('textbooks').doc(this.state.query)
                var getDoc = tbQuery.get()
                    .then(doc => {
                        if (!doc.exists) {
                            console.log('No such document!')
                        } else {
                            var docData = doc.data()
                            this.setState(prevState => ({
                                results: [...prevState.results,docData]
                            }))
                            console.log('Document data:', this.state.results)
                        }
                    })
                    .catch(err => {
                        console.log('Error getting document', err)
                    });
                } else {
                    this.setState({
                        results: []
                    })
                }
        })
    }

    render() {
        return (
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
            </form>
        )
    }
}

export default Search