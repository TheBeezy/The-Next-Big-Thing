import firebase from 'firebase'
import data from '../FireBaseConfig.json'

// CSS Styling
const boxStyle = {
  width: '250px',
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
    // Holds values
    this.state = { selectedOption:'', name: '', avgRating: 0.0, numRatings: 0, rating: 0.0 };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
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
    var textbook = db.collection('textbooks').doc(this.state.name)
    var getTextbook = textbook.get().then(doc => {
      if (doc.exists) {
        var dbNumRatings = parseFloat(doc.data().numRatings);
        var dbAvgRating = parseFloat(doc.data().avgRating);
        this.setState({
          numRatings: dbNumRatings,
          avgRating: (((dbNumRatings * dbAvgRating) + this.state.rating) / (dbNumRatings+1))
        })
        var setTextBookRating = db.collection('textbooks').doc(this.state.name).set({
          name: this.state.name,
          numRatings: this.state.numRatings+1,
          avgRating: this.state.avgRating,
        })
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value,
      rating: parseFloat(changeEvent.target.value),
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
            <input
              name="rating"
              type="radio"
              value="1"
              checked={this.state.selectedOption === "1"}
              onChange={this.handleOptionChange} /> 1
            <input
              name="rating"
              type="radio"
              value="2"
              checked={this.state.selectedOption === "2"}
              onChange={this.handleOptionChange} /> 2
            <input
              name="rating"
              type="radio"
              value="3"
              checked={this.state.selectedOption === "3"}
              onChange={this.handleOptionChange} /> 3
            <input
              name="rating"
              type="radio"
              value="4"
              checked={this.state.selectedOption === "4"}
              onChange={this.handleOptionChange} /> 4
            <input
              name="rating"
              type="radio"
              value="5"
              checked={this.state.selectedOption === "5"}
              onChange={this.handleOptionChange} /> 5
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default TextbookRater;
