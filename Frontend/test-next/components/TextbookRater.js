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
	var textbookRef = db.collection('textbooks').where('isbn', '==', props.id)
    var textbookDoc = textbookRef.get().then(snapshot => {
      if (snapshot.empty) {
        console.log('No such document!');
      } else {
        snapshot.forEach(doc => {
          console.log('Document data:', doc.data());
          this.setState({
            title: doc.data().name,
            isbn: doc.data().isbn,
			numRatings: parseFloat(doc.data().numRatings),
			avgRating: parseFloat(doc.data().avgRating)
          }, function() {
		  if(this.state.numRatings==NaN||this.state.avgRating==NaN){
			  this.setState({
				  numRatings: 0,
				  avgRating: 0
			  }, function() {
				  //console.log(this.state.avgRating)   space used to test
				 })
			  
		  }
		  
			  
		  })
		  
		  
		  
        })
      }
    }).catch(err => {
      console.log('Error getting document', err);
    });
  }

  // Handles whenever the text fields are changed
    //I believe this is unused but don't want to break anything so leaving it here.
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
      //Calculates new rating
	var newAvgRating = (((this.state.numRatings * this.state.avgRating) + this.state.rating) / (this.state.numRatings+1));
	var newNumRatings = this.state.numRatings+1;
    this.setState({
		avgRating: newAvgRating,
		numRatings: newNumRatings
    }, function() {
		console.log("New Rating: "+this.state.avgRating)
		var setTextBookRating = db.collection('textbooks').doc(this.state.title).set({ //sets new rating in db
        numRatings: this.state.numRatings,
        avgRating: this.state.avgRating,
		}, { merge: true }) //without erasing all previous values!
		
	})
	
    
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
