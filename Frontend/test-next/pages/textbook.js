import Layout from '../components/Layout'
import firebase from 'firebase'
import {withRouter} from 'next/router'
import data from '../FireBaseConfig.json'
import Textbook from '../components/Textbook'

if (!firebase.apps.length) {
    firebase.initializeApp(data);
}

const textbook = withRouter(props => (
    <Layout>
        <Textbook id={props.router.query.id}/>
		<p>Selling this book?<a href ='/sellerPortal'>Add a Listing!</a></p>
		<br/>
		<p>Looking for this book?  See who's selling below!</p>
    </Layout>
))
export default textbook