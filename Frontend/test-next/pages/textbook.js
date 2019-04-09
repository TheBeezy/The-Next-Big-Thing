import Layout from '../components/Layout'
import {withRouter} from 'next/router'
import TextbookRater from '../components/TextbookRater'
import Textbook from '../components/Textbook'
import Seller from '../components/Seller'
import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp(data)
}
const textbook = withRouter(props => (
    <Layout> 
        <Textbook id={props.router.query.id} db={firebase.firestore()} auth={firebase.auth()}/>
		<p>Looking for this book?  See who's selling below!</p>
        <Seller id={props.router.query.id}/>
		<br/>
		<p>Used this book? Leave a rating</p>
		<TextbookRater id={props.router.query.id}/>
		<br/>
    </Layout>
))
export default textbook
