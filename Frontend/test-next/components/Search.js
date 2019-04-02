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
            query: this.search.value,
            results: [],
        }, () => {
            if(this.state.query && this.state.query.length > 0) {
                var tbQuery = db.collection('textbooks').where('subject','==',this.state.query.toUpperCase())
                if(this.state.query.split(" ").length > 1) {
                    var tbQuery = db.collection('textbooks').where("subject",'==',this.state.query.split(" ")[0])
                    .where('class','==',this.state.query.split(" ")[1].toUpperCase())
                }
                var getDoc = tbQuery.get()
                    .then(snapshot => {
                        if (snapshot.empty) {
                            console.log('No matching documents!')
                        } else {
                            snapshot.forEach(doc => {
                                console.log(doc.id, '=>', doc.data());
                                var docData = doc.data()
                                this.setState(prevState => ({
                                    results: [...prevState.results,docData]
                            }))
                            console.log('Document data:', this.state.results)
                        })}
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
                Search:
                <input
                    placeholder="(i.e. ASTR 1102)"
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
            </form>
        )
    }
}

export default Search