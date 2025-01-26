import {useCallback, useEffect, useMemo, useState} from "react";
import Title from "./Title";
import {useCountries} from "../service/continentContexte/useContries";
import {useLocation, useNavigate} from "react-router-dom";
import InBlock from "./InBlock";
import AccordionComponent from "./AccordionComponent";
import {CountryData, ITitle} from "../service/continentContexte/Interface";
import Logo from "./Logo";
import {Modal} from "./Modal";
import {FaArrowCircleLeft} from "react-icons/fa";

const Content = () => {
    const [datas, setDatas] = useState<CountryData | undefined>(undefined);
    const pathname = useLocation().pathname;
    const {getCountryByLink} = useCountries();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const getContent = useCallback(() => {
        const data = getCountryByLink(pathname);
        if (data) setDatas(data);
    }, [getCountryByLink, pathname]);

    const textFormat = (title: ITitle | undefined): string | undefined => {
        if (title) {
            return title.t_1 + "<br/>" + title.t_2;
        }
    };

    const formattedTitle = useMemo(
        () => textFormat(datas?.title),
        [datas?.title]
    );

    useEffect(() => {
        getContent();
    }, [getContent]);

    return (
        <>
            <div
                className={`bg-${datas?.bgHeader} min-h-screen flex items-center justify-center w-full overflow-hidden z-50`}
            >
                <div
                    className="rounded-2xl lg:rounded-[28px] m-2 md:m-4 h-[calc(100vh - 16px)] lg:h-[calc(100vh-36px)]  w-full overflow-hidden">
                    <div
                        className={`grid items-stretch lg:grid lg:grid-cols-2 w-full h-full bg-${datas?.bgColor}`}
                    >
                        <div className="flex flex-col md:flex-col md:justify-between p-4 lg:pb-8 lg:pl-8 ">
                            <div className="mb-5 lg:mb-0 lg:flex-none">
                                <Logo/>
                            </div>
                            <div className="space-y-4 mt-8 lg:mt-0">
                                <div
                                    className="flex items-center cursor-pointer mb-4 "
                                    onClick={() => navigate("/")}
                                >
                                    <FaArrowCircleLeft className={`text-${datas?.textColor}`}/>{" "}
                                    <span className={`ml-2 text-${datas?.textColor}`}>
										Retour
									</span>
                                </div>
                                <Title title={formattedTitle} color={datas?.textColor}/>
                            </div>
                        </div>
                        <div className="flex flex-col  p-4 rounded-lg space-y-6 x:justify-bet lg:pb-8 lg:pr-8">
                            <div className="relative mb-4 lg:mb-4">
                                <InBlock
                                    color={datas?.textColor}
                                    numberColor={datas?.defaultOf}
                                />
                            </div>

                            <AccordionComponent
                                bgColor={datas?.defaultOf}
                                textColor={datas?.textColor}
                                lineColor={datas?.bgColor}
                            />
                            <div
                                className={`flex flex-col items-center bg-${datas?.defaultOf} p-6  rounded-[14px] sm:flex-row justify-between sm:p-1 lg:h-[98px] lg:rounded-3xl lg:p-[32px] `}
                            >
								<span
                                    className={`3xl:text-2xl text-[13px] lg:text-[17px] text-${datas?.textColor} mb-4 lg:mb-0`}
                                >
									Votre pays n’est pas dans la liste “pays AIPDA” ?
								</span>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className={`bg-${datas?.textColor} text-${datas?.defaultOf}  p-2 rounded-lg 3xl:text-2xl 3xl:w-auto min-w-full lg:min-w-fit  `}
                                >
                                    Enregistrez-vous ici
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                setShowModal={setShowModal}
                showModal={showModal}
                formTextColor={datas?.defaultOf}
                backgroundColor={datas?.textColor}
                bouttonColor={datas?.bgColor}
                selectColor={datas?.defaultOf}
            />
        </>
    );
};

export default Content;
