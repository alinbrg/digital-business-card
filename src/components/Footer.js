import facebook from "../images/Facebook Icon.svg";
import instagram from "../images/Instagram Icon.svg";
import linkedin from "../images/Linkedin Icon.svg";
import github from "../images/GitHub Icon.svg";

export default function footer() {
	return (
		<div className="footer ">
			<div className="container">
				<a href="facebook">
					<img src={facebook} alt="facebook" />
				</a>
				<a href="instagram">
					<img src={instagram} alt="instagram" />
				</a>
				<a href="linkedin">
					<img src={linkedin} alt="linkedin" />
				</a>
				<a href="github">
					<img src={github} alt="github" />
				</a>
			</div>
		</div>
	);
}
