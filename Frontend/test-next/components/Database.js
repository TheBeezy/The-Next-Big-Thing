import firebase from 'firebase'
import data from '../FireBaseConfig.json'

// CSS Styling
const boxStyle = {
  width : '150px',
  margin: '1',
};

// Initalizes firebase only once using the firebase config file
if (!firebase.apps.length) {
    firebase.initializeApp(data);
  }

// Need to include a reference to the database
var database = firebase.database();
var db = firebase.firestore();

class Database extends React.Component {
    constructor(props) {
      super(props);
      // Holds the values from the text fields
      this.state = {name:'', ed:'', subj:'', prof:''};
  
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
      // Creates a document in textbooks (database/textbooks/{name of document})
      var newTextBook = database.ref('textbooks/' + this.state.name);
      // Sets the document's contents based on the text fields
      var info = {
        name: this.state.name,
        edition: this.state.ed,
        subject: this.state.subj,
        professor: this.state.prof
      }
      // Sets the data
      var setTextBook = db.collection('textbooks').doc(this.state.name).set(info);
    }
   
  // Form for submitting information (note the names)
  render() {
    return (
      <div style={boxStyle}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
              <input
              name="name"
              type="text"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Edition:
              <input
              name="ed"
              type="text"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Subject:
              <input
              name="subj"
              type="text"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Professor:
              <input
              name="prof"
              type="text"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      );
    }
  }

export default Database;
