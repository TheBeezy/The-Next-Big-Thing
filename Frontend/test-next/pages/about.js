import Layout from '../components/Layout.js'

export default () => (
    <Layout>
        <p>About Page</p>
	Select a meeting location:
		<select id = "myList" onchange = "meetingLocation()">
			<option>PFT</option>
			<option>Union</option>
		</select>
    </Layout>
)
