import firebase from 'firebase'
import data from '../FireBaseConfig.json'

if (!firebase.apps.length) {
    firebase.initializeApp(data);
  }
var database = firebase.database();

class Database extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name:'', ed:'', subj:'', prof:''};
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    } 

    handleSubmit(event) {
        event.preventDefault();
        alert('A textbook was added: ' + this.state.name);
        var newTextBook = database.ref('textbooks/' + this.state.name);
        newTextBook.set({
            name: this.state.name,
            edition: this.state.ed,
            subject: this.state.subj,
            professor: this.state.prof
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
