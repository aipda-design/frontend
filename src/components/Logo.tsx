//import logo from "@/assets/logo.png";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Logos from "@/assets/Logo1.svg?react";

{
    /*import group2 from "@/assets/images/group-2.png";
import group from "@/assets/images/group.png";
import image from "@/assets/images/img.png";

*/
}

interface ILogoProps {
    color?: string
}

export default function Logo({color}: ILogoProps) {
    const url = useLocation();
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (url.pathname === "/") {
            setActive(true);
        }
    }, []);
    return (
        <div
            className={`logo relative flex items-center justify-center  ${
                active ? "lg:justify-center w-full h-full" : "lg:justify-start w-28"
            }`}
        >
            {/* Vector SVG positioned absolutely around the images */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
				<img src={Vector} alt="Vector background" className="w-full h-full" />
			</div> */}
            {/*<img src={logo} alt="Logo" className="object-content" />*/}
            {/*<img src={logo} alt="Logo" className="object-contain"/>*/}
            <Logos
                style={{filter: `${color ? 'invert(1) hue-rotate(182deg) brightness(1.2) contrast(0.9)' : 'invert(0)'}`}}/>

            {/* c'est ici que je veux afficher les images de mon groupe */}
            {/* Center group of images */}
            {/* Center group of images */}
            {/*<div className="relative z-10 flex items-center justify-center">
				<img src={image} alt="Image" className="3xl:w-[10rem]" />

				Added flex column container for group images 
				<div className="flex flex-col">
					<img
						src={group}
						alt="Group"
						className="object-contain 3xl:w-[20rem]"
					/>
					<img
						src={group2}
						alt="Group 2"
						className="object-contain 3xl:w-[20rem]"
					/>
				</div>
			</div>*/}
        </div>
    );
}
