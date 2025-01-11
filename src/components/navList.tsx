import React, {useEffect, useState} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {FaArrowCircleLeft} from "react-icons/fa";
import miniLogo from "../assets/miniLogo.svg"
import {TiThMenu} from "react-icons/ti";


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
    const [isHome, setIsHome] = useState<boolean>(false);
    const [bugerMenu, setBugerMenu] = useState<boolean>(false);

    const location = useLocation();
    const navigate = useNavigate();


    console.log("location", location.pathname);
    const shouldHideNav = (path: string): boolean => path !== "/";
    const putNavAbolusute = (path: string): boolean => path === "/";


    useEffect(() => {
        setIsHidden(shouldHideNav(location.pathname));
        setIsHome(putNavAbolusute(location.pathname));

    }, [location.pathname]);
    console.log("is it home ", isHome);
    return (
        <>
            {isHome ? (
                    <>
                        <div
                            className=" flex w-full md:justify-start flex-wrap md:flex-nowrap lg:absolute lg:block z-50 ">
                            <div
                                className="group flex  w-inherit justify-around p-2 m-1 md:flex-grow md:items-center md:justify-normal md:ml-[27px] md:mt-[27px] md:w-[200px] "
                            >
                                <div className={"md:h-[100px] flex items-start"}>
                                    <div
                                        className=" h-[60px] w-[60px] bg-[#AEC1FF1F]  rounded-[13px] cursor-pointer flex items-center justify-center">
                                        <img
                                            src={miniLogo}
                                            alt="logo"
                                            className="object-contain max-w-[40px] max-h-[40px] cursor-pointer"
                                        />
                                    </div>
                                </div>


                                {/*avant y'avait p-4 en dessous*/}
                                <div
                                    className={`lg:invisible  lg:group-hover:visible bg-[#AEC1FF] text-[14px] text-europe-dark-bleu font-bold rounded-[13px] p-1  ml-2 mr-2 inline-flex md:p-0 md:w-[97px] md:h-[109px] md:flex md:flex-col items-center justify-center  flex-auto md:flex-initial md:visible  ${bugerMenu ? " visible " : " invisible"}`}>
                                    {navData.map((infos, index) => (
                                        <NavLink to={infos.link} key={index}
                                                 className={({isActive}) =>
                                                     `group m-1 md:m-1 hover:bg-europe-dark-bleu hover:text-[#AEC1FF] hover:rounded-lg text-[11px] p-2 md:p-1 ${
                                                         isActive ? 'bg-europe-dark-bleu text-[#AEC1FF] rounded-lg w-fill text-center' : 'hover:w-fill hover:text-center'
                                                     }`
                                                 }> {infos.title}
                                        </NavLink>
                                    ))}
                                </div>
                                <div
                                    className="md:hidden h-[60px] w-[60px] bg-[#AEC1FF1F] flex items-center justify-center rounded-[13px] cursor-pointer z-50"
                                    onClick={() => setBugerMenu(!bugerMenu)}
                                >
                                    <TiThMenu size={26}/>
                                </div>
                            </div>
                            {/*mettre au niveau de la classe en dessous lg:mr-[83px]*/}


                        </div>
                    </>)
                :
                (
                    <>
                        <div className=" flex w-full justify-center md:justify-start flex-wrap md:flex-nowrap">
                            <div
                                className=" group  w-inherit justify-around md:flex-grow flex items-center p-2 m-1 md:ml-[27px] md:mt-[27px] md:w-[200px] md:justify-normal  ">
                                <div
                                    className=" md:h-[60px] md:w-[60px] bg-[#AEC1FF1F] flex items-center justify-center rounded-[13px]">
                                    <img
                                        src={miniLogo}
                                        alt="logo"
                                        className="object-contain w-[40px] h-[40px] cursor-pointer"
                                    />
                                </div>

                                {/*avant y'avait p-4 en dessous*/}
                                <div
                                    className=" lg:invisible lg:group-hover:visible  bg-[#AEC1FF] text-[14px] text-europe-dark-bleu font-bold rounded-[13px] p-1 ml-2  mr-2  inline-flex md:p-0 md:w-[97px] md:h-[109px] md:flex md:flex-col items-center justify-center   flex-auto md:flex-initial ">
                                    {navData.map((infos, index) => (
                                        <NavLink to={infos.link} key={index}
                                                 className={({isActive}) =>
                                                     `m-1 md:m-1 hover:bg-europe-dark-bleu hover:text-[#AEC1FF] hover:rounded-lg p-2 md:p-1 ${
                                                         isActive ? 'bg-europe-dark-bleu text-[#AEC1FF] rounded-lg w-fill text-center' : 'hover:w-fill hover:text-center'
                                                     }`
                                                 }> {infos.title}
                                        </NavLink>
                                    ))}
                                </div>

                                <div className={"flex-grow"}/>
                                {isHidden &&
                                    <div
                                        className="flex items-center cursor-pointer md:mb-4 md:mr-[27px] md:mt-[27px] "
                                        onClick={() => navigate("/")}
                                    >
                                        <FaArrowCircleLeft className={`text-[#AEC1FF]`}/>{" "}
                                        <span className={`ml-2 text-[#AEC1FF]`}>
                                    Retour
                                </span>
                                    </div>
                                }
                            </div>
                        </div>
                        {/*mettre au niveau de la classe en dessous lg:mr-[83px]*/}

                    </>
                )}
        </>
    );
};

export default NavList;