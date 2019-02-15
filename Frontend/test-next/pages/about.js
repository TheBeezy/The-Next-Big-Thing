import Layout from '../components/Layout.js'

export default () => (
    <Layout>
        <head>
            <title>About Us</title>
        </head>
        <p>About Us</p>
	Select a meeting location:
		<select id = "myList" onchange = "meetingLocation()">
			<option>PFT</option>
			<option>Union</option>
		</select>
    </Layout>
)
