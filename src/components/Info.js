import userImg from "../images/user.png";
import email from "../images/Mail.svg";

export default function Info() {
	return (
		<div className="info">
			<img src={userImg} alt="user" className="user-img" />
			<div className="container">
				<h2>Laura Smith</h2>
				<h4>Frontend Developer</h4>
				<h6>laurasmith.website</h6>

				<a href="mailto:" className="mail">
					<img src={email} alt="email icon" />
					<span>Email</span>
				</a>
			</div>
		</div>
	);
}
