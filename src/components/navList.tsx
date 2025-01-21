import React, {useEffect, useState} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {FaArrowCircleLeft} from "react-icons/fa";
import miniLogo from "../assets/miniLogo.svg"


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
        link: "/projets",
    }
]

const NavList: React.FC = () => {

    const [isHidden, setIsHidden] = useState<boolean>(false);
    const [isHome, setIsHome] = useState<boolean>(false);
    //const [bugerMenu, setBugerMenu] = useState<boolean>(false);

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
                                className=" flex  w-inherit justify-start p-2 m-1 md:flex-grow md:items-center md:justify-normal md:ml-[27px] md:mt-[27px]  "
                            >
                                <div className={"group md:w-[200px] w-inherit flex"}>
                                    <div
                                        className={`flex h-[60px] w-[60px] bg-[#000827] xs:flex items-center justify-center rounded-[13px]`}
                                    >
                                        <img
                                            src={miniLogo}
                                            alt="logo"
                                            className="object-contain w-[40px] h-[40px] cursor-pointer"
                                        />
                                    </div>
                                    {/* Navigation */}
                                    {/*La navigation va disparaitre pour les petits écrans pour la placer une autre manière */}
                                    {/*La navigation va disparaitre pour les petits écrans pour la placer une autre manière */}
                                    {/*
                                    className="hidden lg:invisible lg:group-hover:visible md:bg-[#AEC1FF] md:text-[12px] md:text-europe-dark-bleu md:font-bold md:rounded-[13px]  md:ml-2 md:mr-2 inline-flex md:p-0 md:w-[97px] md:h-[109px] md:flex md:flex-col items-center justify-center flex-auto md:flex-initial"

                                    */}

                                    <div
                                        className="hidden lg:invisible lg:group-hover:visible md:bg-[#AEC1FF] md:text-[12px] md:text-europe-dark-bleu md:font-bold md:rounded-[13px]  md:ml-2 md:mr-2  md:p-0 md:w-[97px] md:h-[109px] md:flex md:flex-col items-center justify-center flex-auto md:flex-initial"
                                    >
                                        {navData.map((infos, index) => (
                                            <NavLink
                                                to={infos.link}
                                                key={index}
                                                className={({isActive}) =>
                                                    `m-1 hover:bg-europe-dark-bleu hover:text-[#AEC1FF] hover:rounded-lg p-2 md:p-1 ${
                                                        isActive
                                                            ? "bg-europe-dark-bleu text-[#AEC1FF] rounded-lg md:w-fill text-center"
                                                            : "md:hover:w-fill hover:text-center text-center"
                                                    }`
                                                }
                                            >
                                                {infos.title}
                                            </NavLink>
                                        ))}
                                    </div>

                                </div>

                                {/*Burger Melun en suspend*/}
                                {
                                    /*
                                        Avant la classe de la div ci-dessous était :
                                        className="hidden h-[60px] w-[60px] bg-[#AEC1FF1F] flex items-center justify-center rounded-[13px] cursor-pointer z-50"
                                   */
                                }
                                {/*<div
                                    className="hidden h-[60px] w-[60px] bg-[#AEC1FF1F]  items-center justify-center rounded-[13px] cursor-pointer z-50"
                                    onClick={() => setBugerMenu(!bugerMenu)}
                                >
                                    <TiThMenu size={26}/>
                                </div>*/}

                            </div>
                            {/*mettre au niveau de la classe en dessous lg:mr-[83px]*/}


                        </div>
                    </>)
                :
                (
                    <>


                        <div className="flex w-full justify-center md:justify-start flex-wrap md:flex-nowrap">
                            <div
                                className=" justify-around flex items-center p-2 m-1 md:ml-[27px] md:mt-[27px]  w-inherit md:justify-normal"
                            >


                                <div className={"group md:w-[200px] w-inherit flex"}>
                                    <div
                                        className="flex h-[60px] w-[60px] bg-[#AEC1FF1F] xs:flex items-center justify-center rounded-[13px]"
                                    >
                                        <img
                                            src={miniLogo}
                                            alt="logo"
                                            className="object-contain w-[40px] h-[40px] cursor-pointer"
                                        />
                                    </div>
                                    {/* Navigation */}
                                    {/*La navigation va disparaitre pour les petits écrans pour la placer une autre manière */}
                                    {/*La navigation va disparaitre pour les petits écrans pour la placer une autre manière */}
                                    {/*
                                    className="hidden lg:invisible lg:group-hover:visible md:bg-[#AEC1FF] md:text-[12px] md:text-europe-dark-bleu md:font-bold md:rounded-[13px]  md:ml-2 md:mr-2 inline-flex md:p-0 md:w-[97px] md:h-[109px] md:flex md:flex-col items-center justify-center flex-auto md:flex-initial"

                                    */}

                                    <div
                                        className="hidden lg:invisible lg:group-hover:visible md:bg-[#AEC1FF] md:text-[12px] md:text-europe-dark-bleu md:font-bold md:rounded-[13px]  md:ml-2 md:mr-2  md:p-0 md:w-[97px] md:h-[109px] md:flex md:flex-col items-center justify-center flex-auto md:flex-initial"
                                    >
                                        {navData.map((infos, index) => (
                                            <NavLink
                                                to={infos.link}
                                                key={index}
                                                className={({isActive}) =>
                                                    `m-1 hover:bg-europe-dark-bleu hover:text-[#AEC1FF] hover:rounded-lg p-2 md:p-1 ${
                                                        isActive
                                                            ? "bg-europe-dark-bleu text-[#AEC1FF] rounded-lg md:w-fill text-center"
                                                            : "md:hover:w-fill hover:text-center text-center"
                                                    }`
                                                }
                                            >
                                                {infos.title}
                                            </NavLink>
                                        ))}
                                    </div>

                                </div>
                                {/* Logo */}


                                {/* Div central avec flex-grow */}
                                <div className="flex-grow"></div>
                                {/* Dernière div */}
                                {isHidden && (
                                    <div className={" md:h-full"}>
                                        {/*La fleche retour restera */}
                                        <div
                                            className="flex items-center cursor-pointer md:mb-4 md:mr-[27px] md:mt-[17px] ml-auto"
                                            onClick={() => navigate("/")}
                                        >
                                            <FaArrowCircleLeft className="text-[#AEC1FF]"/>
                                            <span className="ml-2 text-[#AEC1FF]">Retour</span>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>


                        {/*mettre au niveau de la classe en dessous lg:mr-[83px]*/}

                    </>
                )}
        </>
    );
};

export default NavList;