import Left from "../../assets/images/LogoLeft.svg";
import Right from "../../assets/images/LogoRight.svg";

export const Logo = () => {
	return (
		<div className="inline-flex gap-2 items-center">
			<img src={Right} alt="logo" />
			<img src={Left} alt="logo" />
		</div>
	);
};
