import {useLocation, useNavigate} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import CloseButtonToast from "../components/CloseButtonToast";
import {useCallback, useEffect, useState} from "react";
import {showCustomToastMission} from "../components/toastNotifications";
import {formatTile} from "../utils/formate";
import Footer from "../components/Footer";

const table = [
    {
        title: "Diffuser le Design",
        subTitle: "Rendre le design Accessible à tous",
        details: "Faire en sorte que le design ne soit plus simplement perçu comme un processus esthétique d'embellissement, mais comme un atout stratégique qui apporte des avantages tangibles à un produit, un service, une entreprise, un marché, un secteur, une économie.\n"
    },
    {
        title: "Renforcer les capacités",
        subTitle: "Mettre en place des programmes d’éducation",
        details: "Intégrer l'excellence du design à divers niveaux, que ce soit à l'échelle individuelle, organisationnelle, sectorielle, voire au niveau communautaire ou national."
    },
    {
        title: "Encourager l’innovation",
        subTitle: "Créer des cadres et environnements d’expression\n",
        details: "Favoriser la création de plateformes propices au développement, à la mise en œuvre et à la promotion de solutions innovantes, que ce soit dans un cadre éducatif, professionnel ou institutionnel.\n",
    },
    {
        title: "Contribuer au développement\n",
        subTitle: "Accompagner l’économie",
        details: "Recourir aux principes du design pour élaborer des solutions répondant aux besoins des collectivités locales. Des solutions conçues pour stimuler l'économie, améliorer la qualité de vie et favoriser le progrès.\n",
    }
]

const MissionPage = () => {
    const [toastPosition, setToastPosition] = useState<"bottom-right" | "bottom-center">("bottom-right");
    const [small, setSmall] = useState<boolean>(false);


    const navigate = useNavigate();
    const url = useLocation()


    const title = formatTile(url).toUpperCase()

    const updateToastPosition = useCallback(() => {
        if (window.innerWidth < 768) {
            setToastPosition("bottom-center");
            setSmall(true);
        } else {
            setToastPosition("bottom-right");
        }
    }, []);

    useEffect(() => {

        updateToastPosition(); // Vérifie initialement
        window.addEventListener("resize", updateToastPosition);
        // Afficher la notification 5 secondes après que la page se charge
        const timer = setTimeout(() => {
            showCustomToastMission(navigate, toastPosition);
        }, 5000);

        // Nettoyage du timer à la suppression du composant
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", updateToastPosition)
        }
    }, [navigate, toastPosition, updateToastPosition]);

    return (
        <>
            <div className="p-4 lg:w-inherit 2xl:pl-28 text-[#000827] ">
                <div className="">
                    <h1 className={"font-bold text-3xl tracking-wider mb-3"}>{title.toUpperCase()}</h1>
                    <h2 className="font-bold text-xs tracking-wider mb-2 ">MISSION PRINCIPALE</h2>
                    <div className="mt-6  mb-6 max-w-[667px] lg:mb-[68px]">
                    <span className="text-[32px] ">
                        Renforcer la présence du Design en Afrique, dans les territoires afrodescendants tout en
                        soutenant les acteurs.
                    </span>
                    </div>
                    <h2 className="font-bold text-xs tracking-wider ">AXES DE DEVELOPPEMENT</h2>
                    <div className="mt-6 lg:mt-0 lg:flex flex-wrap gap-8">
                        {/*Crée un tableau avec les infos */}
                        {table.map((item, index) => (
                            <div key={index} className="mt-6 mb-6 ">
                                <div className={"mb-4"}>
                                    <h3 className="text-2xl">{item.title}</h3>
                                    <span className={"text-xs font-bold"}>{item.subTitle}</span>
                                </div>
                                <span className="block w-[306px] max-h-[179px]">{item.details}</span>
                            </div>
                        ))}

                    </div>
                </div>
                <ToastContainer closeButton={CloseButtonToast} style={small ? {zIndex: 1} : {}}/>

            </div>
            <Footer/>
        </>
    );
};

export default MissionPage;