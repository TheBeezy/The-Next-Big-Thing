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
    this.state = {
	description: '', 
	price: '', 
	title: props.title
    };
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
	const self = this;
	console.log(self.state.title);
	db.collection('textbooks').doc(self.state.title).get()
	.then(doc => {
		if(!doc.exists) {
			console.log("no document");
		} else {
			console.log("found");
			db.collection('textbooks').doc(self.state.title).collection('listings').doc('user3').set({
				price: this.state.price,
				description: this.state.description	
			});
		}
	});
  }

  // Form for submitting information (note the names)
  render() {
    return (
      <div style={boxStyle}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Description:
              <input
              name="description"
			  id="description-box"
              type="text"
			  width="400"
			  height="200"
              onChange={this.handleInputChange} />
	    Price:
		<input name = "price" id = "price-box" type = "text" width = "400" height = "200" onChange={this.handleInputChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddListing;
