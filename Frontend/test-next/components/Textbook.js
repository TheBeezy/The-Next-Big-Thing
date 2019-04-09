import SellerPortal from '../pages/sellerPortal.js'
import Seller from '../components/Seller.js'
const boxStyle = {
  width: '150px',
  fontSize: '12pt',
};
class Textbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
	    description: '', 
      price: '',
      db: props.db,
      auth: props.auth,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    var db = this.state.db
    var textbookRef = db.collection('textbooks').where('isbn', '==', props.id)
    var textbookDoc = textbookRef.get().then(snapshot => {
      if (snapshot.empty) {
        console.log('No such document!');
      } else {
        snapshot.forEach(doc => {
          console.log('Document data:', doc.data());
          this.setState({
            title: doc.data().name,
            isbn: doc.data().isbn
          })
        })
      }
    }).catch(err => {
      console.log('Error getting document', err);
    });
  }

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
    var db = this.state.db
    console.log(this.state.title);
    db.collection('textbooks').doc(this.state.title).get()
      .then(doc => {
        if (!doc.exists) {
          console.log("no document");
        } else {
          console.log("found");
          db.collection('textbooks').doc(this.state.title).collection('listings').doc(this.state.auth.currentUser.displayName).set({
            price: this.state.price,
            description: this.state.description
          });
        }
      });
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>Post a listing for this book!</p>
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
		<input name="price" id="price-box" type="text" width="400" height="200" onChange={this.handleInputChange} />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default Textbook