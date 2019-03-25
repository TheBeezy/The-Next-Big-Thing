import Layout from '../components/Layout'
import Database from '../components/Database'

export default () => (
    <Layout>
        <title>Database Entry Example</title>
        <div>
        <h1>Database Entry Example</h1>
        <Database />
        </div>
        <style jsx>{`
            h1, a {
                font-family: "Arial";
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