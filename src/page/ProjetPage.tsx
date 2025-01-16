import {ToastContainer} from "react-toastify";
import CloseButtonToast from "../components/CloseButtonToast";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {showCustomToastProjectPart1, showCustomToastProjetPart2} from "../components/toastNotifications";
import {formatTile} from "../utils/formate";

const tableCourtTerme = [
    {
        title: "Djembé",
        subTitle: "La caisse de résonance du design en Afrique. Recevoir et amplifier la mission du Design.",
        details: "Programme audiovisuel qui concilie design et économie en Afrique et sur les territoires afrodescendants. Format : Webinaire, Podcast, Reportage, Documentaire."
    },
    {
        title: "Owod",
        subTitle: "Le catalogue universel du design en Afrique. Valoriser et soutenir les acteurs du design.",
        details: "Plateforme qui met en lumière les acteurs du design. Organisé par catégorie expertise, et secteur d’activité elle présente leurs démarches, facilite des synergies de développement."
    },
    {
        title: "Café+Design",
        subTitle: "Les matinées du design en Afrique Networking et documentation continue.",
        details: "Rencontres formelles pour créer du lien et enrichir les connaissances sur le design. Le temps d’une matinée, la bienveillance, l’échange et le partage prennent le contrôle autour d’un café.",
    },

]


const tableLongTerme = [
    {
        title: "Reinvent Design",
        subTitle: "La conférence annuelle des approches créatives novatrices. Former et sensibiliser au design.",
        details: "Conférence annuelle sur le design en Afrique. Présentée sous forme d’un salon avec des talks, des tables rondes et des ateliers de formation. Elle embarque le design comme outil de développement et de performance stratégique par excellence."
    },
    {
        title: "Design Growth of Africa",
        subTitle: "Les bureaux Départementaux du design en Afrique Catalyser la croissance et le développement local.",
        details: "programme d’accompagnement par le design des secteurs d’activité en Afrique et sur les territoires afrodescendants. Présenté sous la forme de centre de recherche & développement décentralisé. Chaque entité se positionne comme le bras opérationnel de l’AIPDA"
    },
    {
        title: "Label ENEDEL",
        subTitle: "Label des Entreprises Engagés  pour le Développement Local. Vulgariser la pratique du Design.",
        details: "label décerné aux entreprises qui intègre dans leur stratégie la démarche design et contribuent par la même occasion au développement des marchés et secteurs d’activités de leurs territoires d'implantation.",
    },
]


const ProjetPage = () => {
    const navigate = useNavigate();
    const url = useLocation()


    const title = formatTile(url).toUpperCase()


    useEffect(() => {
        // Afficher la notification 5 secondes après que la page se charge
        const timer = setTimeout(() => {
            showCustomToastProjectPart1(navigate);
        }, 5000);


        const timer2 = setTimeout(() => {
            showCustomToastProjetPart2(navigate);
        }, 7000);


        // Nettoyage du timer à la suppression du composant
        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);

        }
    }, [navigate]);

    return (
        <>
            {/*
                Avant sans les nouvelles modifications
                <div className={"text-[#AEC1FF] mt-[27px] p-4 lg:flex lg:w-inherit lg:pl-24 lg:pr-24"}>
            */}
            <div className={"text-[#AEC1FF]  p-4 lg:flex w-inherit 2xl:pl-28 2xl:pr-24"}>
                <div>
                    <h1 className={"font-bold text-2xl tracking-wider mb-2"}>{title}</h1>

                    <div className={"md:grid grid-cols-2 gap-4 lg:flex flex-col"}>

                        <div className={"lg:flex flex-col "}>
                            <h2 className={"text-xs font-bold"}>A COURT TERME</h2>
                            {/*mettre sous 3 colonnes s*/}
                            <div className={"lg:flex gap-7 "}>
                                {tableCourtTerme.map((item, index) => (
                                    <div key={index} className="mt-6 mb-6 ">
                                        <div className={"mb-4"}>
                                            <h3 className="text-2xl">{item.title}</h3>
                                            <div className={"max-w-[319px]"}>
                                                <span className={"text-xs font-bold"}>{item.subTitle}</span>

                                            </div>
                                        </div>
                                        <span className="block w-[306px] max-h-[179px]">{item.details}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={"lg:flex flex-col"}>
                            <h2 className={"text-xs font-bold"}>A MOYEN ET LONG TERME</h2>
                            {/*mettre sous 3 colonnes */}
                            <div className={"lg:flex gap-7"}>
                                {tableLongTerme.map((item, index) => (
                                    <div key={index} className="mt-6 mb-6 ">
                                        <div className={"mb-4"}>
                                            <h3 className="text-2xl">{item.title}</h3>
                                            <div className={"max-w-[319px]"}>
                                                <span className={"text-xs font-bold"}>{item.subTitle}</span>

                                            </div>
                                        </div>
                                        <span className="block w-[304px] max-h-[179px]">{item.details}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
                <ToastContainer closeButton={CloseButtonToast}/>
            </div>

        </>

    );
};

export default ProjetPage;