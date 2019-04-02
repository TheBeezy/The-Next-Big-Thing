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
				  <input type="text" name="firstname" placeholder="Mickey"></input>
				  <br/>
				  <br/>
				  Last name:
				  <input type="text" name="lastname" placeholder="Mouse"></input>
				  <br/>
				  <br/>
				  <input type="submit" value="Submit"></input>
				</form> 
			</div>
		</body>
		</html>
    </Layout>
)