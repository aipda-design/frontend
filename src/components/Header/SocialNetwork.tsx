import Instagram from "../../assets/images/Instagram.svg";
import Youtube from "../../assets/images/Youtube.svg";
import Linkedin from "../../assets/images/Linkedin.svg";

//Cette approche est pour rendre dynamique le site pour des amelioration future
const socialNetwork = [
	{
		title: "Linkedin logo",
		src: Linkedin,
		link: "",
	},
	{
		title: "Youtube logo",
		src: Youtube,
		link: "",
	},
	{
		title: "Instagram logo",
		src: Instagram,
		link: "",
	},
];

/**
 * Cette page est le composant represesantant les réseaux sociaux
 * @returns 0
 */
const SocialNetwork = () => {
	return (
		<div className="inline-flex gap-1 p-2 items-center cursor-pointer ">
			{socialNetwork.map((logo, index) => (
				<img
					src={logo.src}
					alt={logo.title}
					key={index}
					aria-label={logo.title}
					title={logo.title}
					className="hover:scale-110"
				/>
			))}
		</div>
	);
};

export default SocialNetwork;
