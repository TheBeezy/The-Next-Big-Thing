import Layout from '../components/Layout.js'
import Link from 'next/link'
import Fetch from 'isomorphic-unfetch'

export default () => (
    
    <Layout>
        <head>
            <title>Home</title>
        </head>
        <p>
            <button name="Search">Search</button>
            <input type="text" size="100"></input>
        </p>
        <style jsx>{`
            h1, a {
                font-family: "Arial";
                margin: 20px;
                padding: 10;
            }

            ul {
                padding: 0;
            }

            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: blue;
            }

            a:hover {
                opacity: 0.6;
            }
            
        `}</style>
    </Layout>
)