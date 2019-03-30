import firebase from 'firebase'
import data from '../FireBaseConfig.json'

// CSS Styling
const boxStyle = {
  width: '150px',
  margin: '1',
};

// Initalizes firebase only once using the firebase config file
if (!firebase.apps.length) {
  firebase.initializeApp(data);
}

// Need to include a reference to the database
var db = firebase.firestore();

class TextbookRater extends React.Component {
  constructor(props) {
    super(props);
    // Holds the values for the text fields
    this.state = { avgRating: 0.0,numRatings: 0,rating: 0.0};
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
	var textbook = db.collection('textbooks').doc('a').get().then(function(doc) {
		if (doc.exists) {
			console.log("Document data:", doc.data());
			var dbNumRatings = parseFLoat(textbook.data().numRatings);
			var dbAvgRating = parseFLoat(textbook.data().rating);
			this.setState({
				avgRating: (dbNumRatings*dbAvgRating+rating)/dbNumRatings
			})
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	}).catch(function(error) {
		console.log("Error getting document:", error);
	});
    var setTextBookRating = db.collection('textbooks').doc('this.state.name').set({
		name: this.state.name,
        avgRating: this.state.avgRating,
    })
	
  }
  
  handleOptionChange = changeEvent => {

    this.setState({

      selectedOption: changeEvent.target.value

    });

  };

  // Form for submitting information (note the names)
  render() {
    return (
      <div style={boxStyle}>
        <form onSubmit={this.handleSubmit}>
          <label>
            TBName:
              <input
              name="name"
              type="text"
              onChange={this.handleInputChange} />
          </label>
		  <label>
            Rating:
			  <br/>
              <input
              name="rating"
              type="radio"
			  value="option1"
			  checked={this.state.selectedOption === "option1"}
			  onChange={this.handleOptionChange} /> 1
			  <br/>
			  <input
              name="rating"
              type="radio"
			  value="option2"
			  checked={this.state.selectedOption === "option2"}
			  onChange={this.handleOptionChange} /> 2
			  <br/> 
			  <input
              name="rating"
              type="radio"
			  value="option3"
			  checked={this.state.selectedOption === "option3"}
			  onChange={this.handleOptionChange} /> 3
			  <br/> 
			  <input
              name="rating"
              type="radio"
			  value="option4"
			  checked={this.state.selectedOption === "option4"}
			  onChange={this.handleOptionChange} /> 4
			  <br/> 
			  <input
              name="rating"
              type="radio"
			  value="option5"
			  checked={this.state.selectedOption === "option5"}
			  onChange={this.handleOptionChange} /> 5
			  <br/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default TextbookRater;
