import Layout from '../components/Layout'
import UserpageOptions from '../components/UserpageOptions'

export default () => (
    <Layout>
		<html>
		<head>
			<title>
				User Page
			</title>
		</head>
		<body>
			<h1>Thank you for using Bookmill!</h1>
			<div>
				<UserpageOptions/>
			</div>
			<br/>
			<br/>
			<br/>
		</body>
		<footer id="userfooter">
			<div>
				<a href="/about">Contact us!</a>
			</div>
		</footer>
		</html>
    </Layout>
)