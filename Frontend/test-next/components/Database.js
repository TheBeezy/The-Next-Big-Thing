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

class Database extends React.Component {
  constructor(props) {
    super(props);
    // Holds the values for the text fields
    this.state = { name: '', edition: '', subject: '', classNum: '', professor: '' };
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
    var setTextBook = db.collection('textbooks').doc(this.state.name).set({
      name: this.state.name,
      edition: this.state.edition,
      subject: this.state.subject,
      classNum: this.state.classNum,
      professor: this.state.professor,
    })
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
              name="edition"
              type="text"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Class Subject:
              <input
              name="subject"
              type="text"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Class Number:
              <input
              name="classNum"
              type="text"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Professor:
              <input
              name="professor"
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
