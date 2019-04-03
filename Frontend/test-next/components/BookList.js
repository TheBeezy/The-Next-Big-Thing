import firebase from 'firebase'
import data from '../FireBaseConfig.json'

if (!firebase.apps.length) {
    firebase.initializeApp(data);
}
var db = firebase.firestore();


class Search extends React.Component {
    constructor() {
        super ();
        this.state = {}   
    };

    render() {
        return (
            <div>
                <form>
                    <input type="text" id="searchbar"/>
                    <button type="submit">Search
                    </button>
                </form>
            </div>
        )
    }
}

export default Search;