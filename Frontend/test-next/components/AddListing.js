import firebase from 'firebase'
import data from '../FireBaseConfig.json'

// CSS Styling
const boxStyle = {
  width: '150px',
  fontSize: '12pt',
};

// Initalizes firebase only once using the firebase config file
if (!firebase.apps.length) {
  firebase.initializeApp(data);
}

// Need to include a reference to the database
var db = firebase.firestore();

class AddListing extends React.Component {
  constructor(props) {
    super(props);
    // Holds the values for the text fields
    this.state = {description: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handles whenever the text fields are changed
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // Adds a new textbook
  handleSubmit(event) {
    // Stops the page from refreshing
    event.preventDefault();
    // Sets the data based on text fields
    /*var setTextBook = db.collection('textbooks').doc(this.state.description).set(prevState => ({
             listings: [...prevState.listings,this.state.description],
        }))*/
	db.runTransaction(function(tx) {
		
		tx.get(db.collection('listings')).add({
			book: this.props.listing,
			date: new Date().toISOString(),
			description: document.getElementById('description-box').value,
			user: 1234
		}).then(function(listing) {
			
			tx.get(db.collection('textbooks').doc("the textbook id").doc(listing)).add({
				//add the listing to the set of listings
				
			})
	
		}
    }
  }

  // Form for submitting information (note the names)
  render() {
    return (
      <div style={boxStyle}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Desription:
              <input
              name="description"
			  id="description-box"
              type="text"
			  width="400"
			  height="200"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddListing;
