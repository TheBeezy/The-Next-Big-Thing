import firebase from 'firebase'
import data from '../FireBaseConfig.json'

// Initalizes firebase only once using the firebase config file
if (!firebase.apps.length) {
    firebase.initializeApp(data);
  }
// Need to include a reference to the database
var database = firebase.database();

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
        // Makes a popup
        alert('A textbook was added: ' + this.state.name);
        // Creates a document in textbooks (database/textbooks/{name of document})
        var newTextBook = database.ref('textbooks/' + this.state.name);
        // Sets the document's contents based on the text fields
        newTextBook.set({
            name: this.state.name,
            edition: this.state.ed,
            subject: this.state.subj,
            professor: this.state.prof
        // Error handling: if fail, log to console; else, log all textbooks to console
        }, function(error) {
            if (error) {
              console.log(error)
            } else {
                database.ref('textbooks').on("value", function(snapshot) {
                    console.log(snapshot.val());
                 }, function (error) {
                    console.log("Error: " + error.code);
                 });
            }
        });
    }
   
    // Form for submitting information (note the names)
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <title>Database Entry Example</title>
            <h1>Database Entry Example</h1>
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
      );
    }
  }

export default Database;
