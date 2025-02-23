import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {IoSendSharp} from "react-icons/io5";
import {useLocation, useNavigate} from "react-router-dom";
import {useUsers} from "../service/userContexte/useUsers";

interface AccordionProps {
    title: string;
    isOpen: boolean;
    onClick: () => void;
    hidden: boolean;
    textColor?: string;
    formTextColor?: string;
    lineColor?: string;
}

/**
 * enlever le min-h-[230px] de la partie qui prend lopen et mettre a la place un padding quelques chose
 * @param param0
 * @returns
 */
const Accordion: React.FC<AccordionProps> = ({
                                                 title,
                                                 isOpen,
                                                 onClick,
                                                 hidden,
                                                 textColor,
                                                 formTextColor,
                                                 lineColor,
                                             }) => {


    const [messageErreur, setMessageErreur] = useState<string>("");
    const [userInfosData, setUserInfosData] = useState({name: "", email: "", profession: ""});
    const [continent, setContinent] = useState<string>("");


    const {handleSubmit} = useUsers()

    const navigate = useNavigate();
    const url = useLocation();

    useEffect(() => {
        switch (url.pathname) {
            case "/af":
                setContinent("Afrique")
                break;
            case "/eu":
                setContinent("Europe")
                break;
            default:
                break;
        }
    }, [url.pathname]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInfosData({...userInfosData, [event.target.name]: event.target.value})
    }

    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newFormData = {
            name: userInfosData.name,
            email: userInfosData.email,
            profession: userInfosData.profession,
            countryName: title,
            continentName: continent,
        };


        if (Object.values(newFormData).some(value => value.trim() === "")) {
            setMessageErreur("Vous avez pas bien remplie vos champs")
            return;
        }


        handleSubmit(newFormData)


        navigate("/result", {state: {option: title}});
    };
    if (messageErreur) {
        alert(messageErreur)
    }
    return (
        <>
            <div
                className={`py-2 lg:py-[0.05rem] transition-all duration-300 ease-in-out border-b-2  border-${lineColor} ${
                    hidden ? "hidden" : "block"
                }`}
            >
                <button
                    className="flex w-full justify-between items-center"
                    onClick={onClick}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-content-${title}`}
                >
					<span
                        className={` text-[25px] md:text-[32px] text-${textColor} lg:text-[40px] 3xl:text-[50px] 3xl:p-2`}
                    >
						{title}
					</span>
                    {/*Mettre un svg pour faire en sort que ça devienne smooth */}

                    {isOpen ? (
                        <span
                            id="icon-2"
                            className="text-slate-800 transition-transform duration-300"
                        >
							<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                className="w-[24px] h-[24px] lg:w-[34px] lg:h-[34px] fill-white"
                            >
								<path d="M2.75 7.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5Z"/>
							</svg>
						</span>
                    ) : (
                        <span
                            id="icon-1"
                            className="text-slate-800 transition-transform duration-300"
                        >
							<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                className="w-[24px] h-[24px] lg:w-[34px] lg:h-[34px] fill-white"
                            >
								<path
                                    d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"/>
							</svg>
						</span>
                    )}
                </button>
                {/*J'ai rajouter un min-h-[230px] pour que les informations fit avec l'écran */}
                <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out bg-${formTextColor} ${
                        isOpen
                            ? "grid-rows-[1fr] opacity-100 min-h-[217px] md:min-h-[230px]"
                            : "grid-rows-[0fr] opacity-0"
                    }`}
                    id={`accordion-content-${title}`}
                    role="region"
                    aria-labelledby={`accordion-header-${title}`}
                >
                    <form
                        onSubmit={handleSubmitForm}
                        className="flex flex-col justify-around h-full overflow-hidden p-2 "
                    >
                        {/*Mettre en place en fonction de la couleur  */}
                        <div className={`border-b border-${textColor}`}>
                            <input
                                type="text"
                                className={`
									appearance-none bg-transparent border-none w-full text-${textColor} placeholder-${textColor} font-normal
										mr-3 py-1 px-2 leading-tight focus:outline-none 
										`}
                                placeholder="Nom et prenoms"
                                aria-label="name"
                                name="name"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={`border-b border-${textColor}`}>
                            <input
                                type="email"
                                className={`
									appearance-none bg-transparent border-none w-full placeholder-${textColor} text-${textColor} font-normal
										mr-3 py-1 px-2 leading-tight focus:outline-none 
										`}
                                placeholder="Email"
                                aria-label="email "
                                name="email"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={`border-b border-${textColor}`}>
                            <input
                                type="text"
                                className={`
									appearance-none bg-transparent border-none w-full placeholder-${textColor} text-${textColor} font-normal
										mr-3 py-1 px-2 leading-tight focus:outline-none 
										`}
                                placeholder="Profession"
                                aria-label="Profession "
                                name="profession"
                                onChange={handleInputChange}
                            />
                        </div>
                        {/*Voir comment utiliser diirectement les svg en tout cas gerer un etet pour les couleur  */}
                        <button
                            type="submit"
                            className={`group flex items-center justify-center px-2 border-[1px] rounded-md h-[49px] border-${textColor}  hover:bg-${textColor}`}
                        >
							<span
                                className={`font-bold text-${textColor} group-hover:text-${formTextColor}`}
                            >
								Envoyer
							</span>
                            <IoSendSharp
                                className={`ml-1 fill-${textColor} group-hover:fill-${formTextColor} 
							`}
                                width={20}
                                height={20}
                            />
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Accordion;
