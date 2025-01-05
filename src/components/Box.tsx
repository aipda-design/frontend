import {Link} from "react-router-dom";
import {FaPlus} from "react-icons/fa6";

import image from "../assets/images/cardcontinent-rectangle-31.svg";
import {useCountries} from "../service/continentContexte/useContries";

export default function Box({
                                title,
                                actionAnnonce,
                                insideColor,
                                textColor,
                                bgColor,
                                link,
                            }: {
    title: string;
    actionAnnonce: string;
    insideColor: string;
    textColor: string;
    bgColor: string;
    link: string;
}) {
    const {getCountryByLink} = useCountries();

    return (
        <div className={` ${link === "af" || link === "eu" ? "box" : null}`}>
            <Link
                to={link}
                className={` flex flex-col items-start  xs:w-min md:max-w-min min-h-[180px]  p-3 rounded-2xl bg-${bgColor} ${
                    link === "as" || link === "am"
                        ? `pointer-events-none opacity-30 bg-[#010928] mix-blend-normal`
                        : null
                }`}
                onClick={() => getCountryByLink(link)}
            >
                <div
                    className={`h-[68px] relative flex items-center justify-center rounded-xl font-black self-stretch ${
                        link === "as" || link === "am"
                            ? `bg-white bg-opacity-15 text-white`
                            : `bg-${insideColor}`
                    }`}
                >
					<span className={`text-${textColor} text-[14px] 2xl:text-sm z-10 `}>
						{title}
					</span>
                    <img
                        src={image}
                        alt="image"
                        className="absolute top-[0.81rem] right-3"
                    />
                </div>
                <div className=" flex  items-end gap-3 self-stretch mt-4 ">
                    <span className={`font-bold text-${textColor}`}>{actionAnnonce}</span>
                    <div className={`text-${textColor}`}>
                        <FaPlus/>
                    </div>
                </div>
            </Link>
        </div>
    );
}
