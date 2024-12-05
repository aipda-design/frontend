import { useState } from "react";
import { Logo } from "./Logo";
import Lang from "./Lang";
import Line from "./Line";
import SocialNetwork from "./SocialNetwork";
import mobileMenu from "../../assets/images/mobileMenu.svg";

//changer les couleurs de façon dynamique

/**
 * Ce composant est le composant header
 * qu'on peut retrouvr dans components/Header
 * @returns 0
 */
const HeaderComponent = () => {
	const [isBurgerMenuOpen, setBurgerMenu] = useState(false);

	const handleToggole = () => {
		setBurgerMenu(!isBurgerMenuOpen);
	};
	return (
		<header className="flex flex-shrink-0 items-center justify-between h-[80px] md:px-[50px] px-[27px]  bg-afrique-vert-blanc ">
			<div className="flex items-center">
				<Logo />
			</div>

			<div className="md:hidden" onClick={handleToggole}>
				<img src={mobileMenu} alt="burger menu" />
			</div>

			<div
				className={`${
					isBurgerMenuOpen ? "flex" : "hidden"
				} flex-col md:flex md:flex-row items-center gap-4 absolute md:static top-[80px] left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
			>
				{/* Composant Lang */}
				<Lang />

				{/* Ligne séparatrice */}
				<Line width={1} height={40} className="bg-afrique-Vert-clair" />

				{/* Réseaux sociaux */}
				<SocialNetwork />
			</div>
		</header>
	);
};

export default HeaderComponent;
