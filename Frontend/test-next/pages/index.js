import Layout from '../components/Layout.js'
import Link from 'next/link'
import Fetch from 'isomorphic-unfetch'

export default () => (
    <Layout>
        <h1>BookMill</h1>
        <p>
            <button name="Search">Search</button>
            <input type="text" size="100"></input>
        </p>
    </Layout>
)