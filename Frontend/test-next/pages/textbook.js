import Layout from '../components/Layout'
import firebase from 'firebase'
import {withRouter} from 'next/router'
import data from '../FireBaseConfig.json'

if (!firebase.apps.length) {
    firebase.initializeApp(data);
}

const textbook = withRouter(props => (
    <Layout>
        <h1>{props.router.query.id}</h1>
    </Layout>
))
export default textbook