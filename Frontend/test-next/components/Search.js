import firebase from 'firebase'
import data from '../FireBaseConfig.json'
import SearchResults from './SearchResults.js';
import Link from 'next/link';

// Initialize firebase
if (!firebase.apps.length) {
    firebase.initializeApp(data);
}
var db = firebase.firestore();
var textbookName = "";

const h2Style = {
    textAlign: 'center',
}

class Search extends React.Component {
    // Use the results to display a grid of textbook pages
    state = {
        query: '',
        results: [],
    }
	

    handleInputChange = () => {
        this.setState({
            query: this.search.value,
            results: [],
        }, () => {
            // Use search bar to get a query and log the results (not the prettiest, but it works)
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
								textbookName = doc.id;
								console.log(textbookName);
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
			<form><div style = {h2Style}> 
                Search:
                <input
                    placeholder="(i.e. ASTR 1102)"
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
				
                <Link href={'/textbook?title='+textbookName}>
					<a>
						<SearchResults results={this.state.results}/>
					</a>
				</Link>
                </div>
            </form>
        )
    }
}

export default Search