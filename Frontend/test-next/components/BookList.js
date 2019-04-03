import firebase from 'firebase'
import data from '../FireBaseConfig.json'

// Initialize firebase
if (!firebase.apps.length) {
    firebase.initializeApp(data);
}
var db = firebase.firestore();


class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {books: []}
    };
  
    click(e) {
        e.preventDefault();

        var searchQuery = document.getElementById("searchbar").value.toUpperCase();

        //Figure out the query and it's immediate successor, so we can return only 
        //books that begin with the query term. JS-query can enable more complex searches.
        var len = searchQuery.length;
        var front = searchQuery.slice(0, len-1);
        var back = searchQuery.slice(len - 1, len);
        var start = searchQuery;
        var end = front + String.fromCharCode(back.charCodeAt(0) + 1);

        var query = db.collection("textbooks")
            .where("name", ">=", start)
            .where("name", "<", end)
            .limit(25).get();
            
        var component = this;
        Promise.resolve(query.then(function(snapshot) { 
            var books = []
            snapshot.forEach( function(book) {
                books.push(book.data());
            })
            component.setState( {books: books})
        }));
    }

    render() {
        return(
            <div>
                <form action="">
                    <input type="text" id="searchbar"/>
                    <button type="submit" onClick={(e) => this.click(e)} >Search </button>
                </form>
                <ol>
                    {
                        this.state.books.map(function(book) {
                            console.log(book)
                            //return <li key="1">Loll</li>
                            return <li key={book.isbn}>{book.name} 
                            <p> Edition: {book.edition}, Publisher: {book.publisher}</p></li>;
                        }) 
                    }
                </ol>
            </div>
        )
    }
 }

export default Search