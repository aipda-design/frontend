import React, {useEffect, useState} from 'react';
import miniLogo from "../assets/miniLogo.svg";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FaArrowCircleLeft} from "react-icons/fa";


const navData = [
    {
        title: "A propos",
        link: "/about",
    },
    {
        title: "Missions",
        link: "/mission",
    },
    {
        title: "Projets",
        link: "/projet",
    }
]

const NavList: React.FC = () => {

    const [isHidden, setIsHidden] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();
    console.log("location", location.pathname);
    const shouldHideNav = (path: string): boolean => path !== "/";

    useEffect(() => {
        setIsHidden(shouldHideNav(location.pathname));

    }, [location.pathname]);
    return (
        <div className="flex w-full justify-center flex-wrap md:flex-nowrap">
            <div className="flex items-center m-1 md:ml-[27px] md:mt-[27px] md:w-full">
                <div
                    className="md:h-[60px] md:w-[60px] md:bg-[#AEC1FF1F] md:flex items-center justify-center rounded-[13px]">
                    <img
                        src={miniLogo}
                        alt="logo"
                        className="object-contain w-[40px] h-[40px]"
                    />
                </div>

                {/*avant y'avait p-4 en dessous*/}
                <div
                    className="bg-[#AEC1FF] text-europe-dark-bleu font-bold rounded-[13px] ml-2 md:w-[97px] md:h-[109px] md:flex flex-col items-center justify-center ">
                    {navData.map((infos, index) => (
                        <Link to={infos.link} key={index}
                              className="m-3 md:m-1"> {infos.title}</Link>
                    ))}
                </div>
            </div>

            {isHidden && <div
                className="flex items-center cursor-pointer mb-4 md:mr-[27px] md:mt-[27px] "
                onClick={() => navigate("/")}
            >
                <FaArrowCircleLeft className={`text-[#AEC1FF]`}/>{" "}
                <span className={`ml-2 text-[#AEC1FF]`}>
					Retour
                </span>
            </div>}
        </div>
    );
};

export default NavList;