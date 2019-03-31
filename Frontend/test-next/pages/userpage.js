import Layout from '../components/Layout'

export default () => (
    <Layout>
		<html>
		<head>
			<title>
				Profile
			</title>
		</head>
		<body>
			<h1>Juancho Ramirez</h1>
			<h6> valued user since December 14, 2018</h6>
			<p>Hey guys!</p>
			<p>My name is Juancho. I'm a student in LSU and I would like to keep my meetings short and to the point.</p>
			<p>I prefer to meet at the Union or Middleton and I'm available at all hours of the day.</p>
			<p>I added my paypal option to  my profile. When payment comes through I will meet.</p>
			<p>I will pursue chargebacks to the fullest extend of the law.</p>
            <div>
				<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=XHPRF8RJZKBHS&lc=US&item_name=CSGO%20Nades&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted" target="_blank">
					<img id="paypal" src = "static/paypalLogo.png" width="108" height="108"/>
				</a>
			</div>
			<form action="/editUserPage">
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