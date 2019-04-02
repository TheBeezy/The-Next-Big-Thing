import Layout from '../components/Layout'
import UserpageOptions from '../components/UserpageOptions'


const userStyle = {
    fontFamily: 'Verdana',
}

const userBodyStyle = {
	fontFamily: 'Verdana',
	textAlign: 'left'
}





export default () => (
    <Layout>
		<html>
		<head>
			<title>
				User Page
			</title>
		</head>
		<body>
			<h1 >Thank you for using Bookmill!</h1>
			<div style={userBodyStyle}>
				<UserpageOptions/>
			</div>
			<br/>
			<br/>
			<br/>
		</body>
		</html>
    </Layout>
)