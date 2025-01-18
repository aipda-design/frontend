import Logo from "../components/Logo";
import Box from "../components/Box";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
import {useEffect} from "react";
import {showCustomMainToast} from "../components/toastNotifications";
import {ToastContainer} from "react-toastify";
import CloseButtonToast from "../components/CloseButtonToast";

const data = [
    {
        title: "AIPDA AFRIQUE",
        link: "af",
        buttonContent: "Rejoindre une représentation africaine",
        bgColor: "afrique-Vert-fonce",
        textColor: "afrique-vert-blanc",
        insideColor: "afrique-Vert-clair",
    },
    {
        title: "AIPDA EUROPE",
        link: "eu",
        buttonContent: "Rejoindre une représentation européenne",
        bgColor: "europe-bleu-fonce",
        textColor: "europe-blanc",
        insideColor: "europe-bleu-clair",
    },
    {
        title: "AIPDA AMERIQUE",
        link: "am",
        buttonContent: "Rejoindre une représentation américaine",
        bgColor: "amerique-rouge-fonce",
        textColor: "amerique-blanc",
        insideColor: "amerique-rouge-clair",
    },
    {
        title: "AIPDA ASIE",
        link: "as",
        buttonContent: "Rejoindre une représentation asiatique",
        bgColor: "asie-jaune-fonce",
        textColor: "asie-blanc",
        insideColor: "asie-jaune-clair",
    },
];

const smallInfos = [{
    number: 1,
    title: "Vous  plongez dans l’univers de l’Alliance Internationale pour la Promotion du Design en Afrique."
}, {
    number: 2,
    title: "Vous découvrez les projets qui vont organiser l’environnement en Afrique."
}, {
    number: 3,
    title: "Vous contribuez activement à la dynamique mondiale autour du\n" +
        "design en Afrique."
}]

const HomePage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // Afficher la notification 5 secondes après que la page se charge
        const timer = setTimeout(() => {
            showCustomMainToast(navigate);
        }, 5000);

        // Nettoyage du timer à la suppression du composant
        return () => clearTimeout(timer);
    }, [navigate]);


    return (
        <>
            <div
                className="flex flex-col items-center gap-8  3xl:gap-[80px] p-4 2xl:p-8 2xl:h-[calc(100vh-36px)]  w-full max-w-[1206px] mx-auto relative">
                <Logo/>
                <div className="flex flex-col items-center gap-4 text-[#AEC1FF]">
                    {/*avant max-w-[688px]px*/}
                    <div className="text-[14px] lg:text-[16px] max-w-[541px] space-y-4">
                        <p className="text-center ">
                            Rejoignez la représentation AIPDA de votre région et devenez membre d’un réseau de plus de
                            500
                            acteurs internationaux engagés pour promouvoir le design en Afrique et dans les territoires
                            afrodescendants.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-center"> En intégrant une représentation AIPDA</h2>
                        <div className="flex justify-center gap-4 flex-wrap">
                            {smallInfos.map((infos, index) => (
                                <div key={index} className="flex flex-col text-center items-center gap-2 max-w-[238px]">
                                    <div className="relative h-8 w-8 md:h-9 md:w-9 3xl:h-14 3xl:w-14">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 100 100"
                                            className={`fill-default-color object-contain h-full w-full`}
                                        >
                                            <circle cx="50" cy="50" r="40"/>
                                        </svg>
                                        <span
                                            className="text-[12px] absolute left-1/2 font-black top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm md:text-base 3xl:text-2xl"
                                        >
											{index + 1}
										</span>
                                    </div>
                                    <div>
                                        <p>{infos.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                <div className="group grid gap-3 md:gap-4 md:grid grid-cols-2 lg:flex flex-wrap justify-center p-2">
                    {data.map((infos, index) => (
                        <Box
                            key={index}
                            title={infos.title}
                            actionAnnonce={infos.buttonContent}
                            insideColor={infos.insideColor}
                            textColor={infos.textColor}
                            bgColor={infos.bgColor}
                            link={infos.link}
                        />
                    ))}
                </div>
                <Link
                    to={"/otherContinent"}
                    className="text-[#AEC1FF] text-center md:text-left"
                >
                    <span className="">Votre région n’est pas encore active </span>
                    <span className=" underline font-bold block md:inline-block">
							Enregistrez-vous ici
						</span>
                </Link>
                <div
                    className="hidden bg-[#000827] rounded-xl  lg:absolute lg:bottom-0 lg:mr-3 md:flex lg:right-0 lg:m-0  xl:w-[95vw] xl:justify-end xl:relative xl:mr-12">
                    <div>
                        <button
                            onClick={() => {
                            }}
                            className="bg-[#AEC1FF40]   text-[#000827] w-full rounded-2xl p-2 hover:bg-[#000827] hover:text-[#AEC1FF]"
                        >
                            Mentions légales
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                            }}
                            className="bg-[#AEC1FF40]   text-[#000827] w-[63px] rounded-2xl p-2 ml-[13px] hover:bg-[#000827] hover:text-[#AEC1FF] "
                        >
                            CGU
                        </button>
                    </div>

                </div>
                <ToastContainer closeButton={CloseButtonToast}/>
                <Footer/>

            </div>

        </>

    );
};

export default HomePage;