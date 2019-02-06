import Layout from '../components/Layout.js'

function meetingLocation() {

	var mylist = document.getElementId("myList");
	document.getElementById("favorite").value = mylist.options[mylist.selectIndex].text;
}

export default () => (
    <Layout>
	<p>Select a meeting location:
		<select id = "myList" onchange = "meetingLocation()">
			<option>PFT</option>
			<option>Union</option>
		</select></p>
	<p>Your meeting location is:
	<input type = "text" id = "favorite" size = "20"/>
	</p>
    </Layout>
)
