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
            <div>
				<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=XHPRF8RJZKBHS&lc=US&item_name=CSGO%20Nades&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted" target="_blank">
					<img id="paypal" src = "static/paypalLogo.png" width="108" height="108"/>
				</a>
			</div>
			<form action="/editUserpage">
				<input type="submit" value="Edit Profile Page" />
			</form>
		</body>
		<footer id="userfooter">
			<p>Contact us!</p>
			<p>fakebusiness@gmail.com</p>
			<p>(314) 159 - 2653</p>
		</footer>
		</html>
    </Layout>
)