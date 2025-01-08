import React, {useEffect, useState} from 'react';
import miniLogo from "../assets/miniLogo.svg";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
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
        <div className=" flex w-full justify-start flex-wrap md:flex-nowrap">
            <div className=" group md:flex-grow flex items-center p-2 m-1 md:ml-[27px] md:mt-[27px] md:w-[200px]">
                <div
                    className="hidden  md:h-[60px] md:w-[60px] md:bg-[#AEC1FF1F] md:flex items-center justify-center rounded-[13px]">
                    <img
                        src={miniLogo}
                        alt="logo"
                        className="object-contain w-[40px] h-[40px] cursor-pointer"
                    />
                </div>

                {/*avant y'avait p-4 en dessous*/}
                <div
                    className="lg:hidden lg:group-hover:flex  bg-[#AEC1FF] text-[14px] text-europe-dark-bleu font-bold rounded-[13px] p-2 ml-2 md:p-0 md:w-[97px] md:h-[109px] md:flex flex-col items-center justify-center ">
                    {navData.map((infos, index) => (
                        <NavLink to={infos.link} key={index}
                                 className={({isActive}) =>
                                     `m-1 md:m-1 hover:bg-europe-dark-bleu hover:text-[#AEC1FF] hover:rounded-lg p-2 md:p-1 ${
                                         isActive ? 'bg-europe-dark-bleu text-[#AEC1FF] rounded-lg' : ''
                                     }`
                                 }> {infos.title}
                        </NavLink>
                    ))}
                </div>
            </div>
            {/*mettre au niveau de la classe en dessous lg:mr-[83px]*/}

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