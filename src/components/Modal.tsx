import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {paysAfrique, paysEurope} from "../utils/table";
import {useUsers} from "../service/userContexte/useUsers";

interface IModalProps {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    formTextColor?: string;
    backgroundColor?: string;
    bouttonColor?: string;
    selectColor?: string;
}

export const Modal: React.FC<IModalProps> = ({
                                                 showModal,
                                                 setShowModal,
                                                 formTextColor,
                                                 backgroundColor,
                                                 bouttonColor,
                                                 selectColor,
                                             }) => {
    const [getByContinent, setGetByContinent] = useState<string[] | undefined>(
        undefined
    );
    const [country, setCountry] = useState<string>("");
    const [userInfosData, setUserInfosData] = useState({name: "", email: "", profession: ""});

    const [messageErreur, setMessageErreur] = useState<string>("");
    const [continent, setContinent] = useState<string>("");


    const navigate = useNavigate();

    const url = useLocation();

    const {handleSubmit, results} = useUsers()

    useEffect(() => {
        switch (url.pathname) {
            case "/af":
                setGetByContinent(paysAfrique);
                setContinent("Afrique")
                break;
            case "/eu":
                setGetByContinent(paysEurope);
                setContinent("Europe")
                break;
            default:
                setGetByContinent(undefined);
                break;
        }
    }, [url.pathname]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInfosData({...userInfosData, [event.target.name]: event.target.value})
    }

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCountry(event.target.value);
    };

    const handleSubmitFrom = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newFormData = {
            name: userInfosData.name,
            email: userInfosData.email,
            profession: userInfosData.profession,
            countryName: country,
            continentName: continent,
        };

        console.log("forme data is", newFormData)

        if (Object.values(newFormData).some(value => value.trim() === "")) {
            setMessageErreur("Vous avez pas bien remplie vos champs")
            return;
        }


        if (country) {
            console.log("je suis ici");
            handleSubmit(newFormData)
            navigate("/result", {state: {option: country}});
            setShowModal(false);
        } else {
            alert("OUPS choisie un pays ");
        }
        console.log("result of the request is :", results);

    };
    if (messageErreur) {
        alert(messageErreur)
    }

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden px-2 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <form
                                onSubmit={handleSubmitFrom}
                                className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-${backgroundColor} outline-none focus:outline-none md:w-[50vw]`}
                            >
                                {/*header*/}
                                <div
                                    className={`flex items-start justify-between p-5 border-b border-solid border-${bouttonColor} rounded-t`}
                                >
                                    <h3
                                        className={`text-3xl font-semibold text-${formTextColor}`}
                                    >
                                        Autres Pays
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
										<span
                                            className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className={`border-b border-${formTextColor} py-3`}>
                                        <input
                                            type="text"
                                            className={`
									appearance-none bg-transparent border-none w-full placeholder-${formTextColor} text-${formTextColor} font-normal
										mr-3 py-1 px-2 leading-tight focus:outline-none 
										`}
                                            placeholder="Nom et prenoms"
                                            aria-label="name"
                                            name="name"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className={`border-b border-${formTextColor} py-3`}>
                                        <input
                                            type="email"
                                            className={`
									appearance-none bg-transparent border-none w-full placeholder-${formTextColor} text-${formTextColor} font-normal
										mr-3 py-1 px-2 leading-tight focus:outline-none 
										`}
                                            placeholder="Email"
                                            aria-label="email "
                                            name="email"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className={`border-b border-${formTextColor} py-3`}>
                                        <input
                                            type="text"
                                            className={`
									appearance-none bg-transparent border-none w-full placeholder-${formTextColor} text-${formTextColor} font-normal
										mr-3 py-1 px-2 leading-tight focus:outline-none 
										`}
                                            placeholder="Profession"
                                            aria-label="Profession "
                                            name="profession"
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="w-full min-w-[200px] py-3">
                                        <label
                                            htmlFor="country-select"
                                            className={`block text-sm font-medium text-${formTextColor} mb-1 px-2`}
                                        >
                                            Selectionne ton pays
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="country-select"
                                                className={`
                            w-full bg-${backgroundColor} text-${bouttonColor} border border-${bouttonColor} rounded-md shadow-sm 
                            focus:outline-none 
                            text-sm p-2.5 appearance-none cursor-pointer
                        `}
                                                size={6} // Définit 6 options visibles avant scroll
                                                style={{
                                                    maxHeight: "10rem", // Hauteur maximale pour activer le scroll
                                                    overflowY: "auto", // Active le scroll vertical
                                                }}
                                                onChange={handleChange}
                                                value={country}
                                            >
                                                {getByContinent?.map((country, index) => (
                                                    <option
                                                        key={index}
                                                        value={country}
                                                        className={`py-1 px-2 opacity-100 border-b-[0.5px] border-${selectColor} hover:bg-${bouttonColor} hover:text-${backgroundColor} active:bg-${backgroundColor} focus:bg-${backgroundColor}`}
                                                    >
                                                        {country}
                                                    </option>
                                                ))}
                                            </select>
                                            <div
                                                className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-gray-400"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div
                                    className={`flex items-center justify-end p-6 border-t border-solid border-${bouttonColor} rounded-b`}>
                                    <button
                                        className={`text-${bouttonColor} background-transparent font-bold uppercase px-6 py-2 text-sm outline-none`}
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Fermer
                                    </button>
                                    <button
                                        className={`bg-${backgroundColor}  border-[1px]  border-${bouttonColor}  text-${bouttonColor} hover:bg-${bouttonColor} hover:text-${backgroundColor} active:bg-${bouttonColor} font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                                        type="submit"
                                    >
                                        Envoyer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};
