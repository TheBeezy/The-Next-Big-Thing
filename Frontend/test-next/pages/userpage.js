import Layout from '../components/Layout.js'
import UserpageOptions from '../components/UserpageOptions.js'

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