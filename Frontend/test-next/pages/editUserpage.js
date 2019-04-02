import Layout from '../components/Layout'

export default () => (
    <Layout>
		<html>
		<head>
			<title>
				Edit Profile Page
			</title>
		</head>
		<body>
		<h2>Input the following information:</h2>
			<div>
				<form>
				  First name:
				  <input type="text" placeholder="Mickey"></input>
				  <br/>
				  <br/>
				  Last name:
				  <input type="text" placeholder="Mouse"></input>
				  <br/>
				  <br/>
				  Description:
				  <input type="text" placeholder="Describe yourself and what someone should expect in a transaction"></input>
				  <br/>
				  <br/>
				  email:
				  <input type="email" placeholder = 'user@domain.xxx'></input>
				  <input type="submit" value="Submit"></input>
				</form> 
			</div>
		</body>
		</html>
    </Layout>
)