import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {ToastContainer} from "react-toastify";
import CloseButtonToast from "../components/CloseButtonToast";
import {showCustomToast} from "../components/toastNotifications";
import Footer from "../components/Footer";


const AboutPage = () => {
    //const url = useLocation()
    const navigate = useNavigate();


    const title: string = "A propos"


    useEffect(() => {
        // Afficher la notification 5 secondes après que la page se charge
        const timer = setTimeout(() => {
            showCustomToast(navigate);
        }, 5000);

        // Nettoyage du timer à la suppression du composant
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <>
            <div className="p-4 lg:grid grid-cols-2">
                {/*avant : <div className={"lg:ml-[83px] lg:mb-[26px] text-[#AEC1FF]"}>*/}
                <div className={"lg:pl-24 text-[#AEC1FF]"}>
                    <h1 className={"font-bold text-2xl tracking-wider mb-3"}>{title}</h1>
                    <h2 className={" font-bold mb-[23px] tracking-wider "}>MANIFESTE AIPDA</h2>
                    <div className="max-h-[592px] overflow-scroll">
                        <p className=" ">
                        <span>
                            Le monde entier assiste à un changement de paradigme politique,
                        culturel, économique, social et
                        environnemental. L'Afrique, quant à elle, émerge et prend conscience de ses atouts grâce à sa
                        jeunesse dynamique, sa diaspora et ses citoyens engagés. Toutes les indications convergent pour
                        affirmer que l'Afrique est le continent de l'avenir. Cependant, la Banque mondiale souligne
                        régulièrement la nécessité pour les autorités publiques de résoudre les défis multifacettes de
                        l'Afrique subsaharienne. Cela requiert des réformes globales visant à promouvoir la prospérité
                        économique, à réduire la pauvreté et à créer des opportunités d'emploi durables dans la région.
                        Pour l'institution financière internationale, cela implique la mise en place d'un écosystème
                        favorable à la création, à la stabilité et à la croissance des entreprises, ainsi que le
                        développement de compétences en phase avec les besoins du marché.
                        </span>
                            <span className={"lg:block lg:mt-3"}>
                        Parallèlement, le design prend de plus en plus d'importance en tant qu'outil essentiel de
                        réflexion stratégique. Non pas parce que la réflexion stratégique est impossible sans le design,
                        mais parce qu'en l'intégrant, elle cherche à considérer de manière holistique l'ensemble des
                        acteurs d'un environnement donné. Pourquoi ? Parce que chaque partie prenante mérite une
                        expérience optimale, dans le respect des normes d'attractivité, d'utilité, de performance (coût,
                        qualité et délai) et d'éthique clairement définies. Dans ce contexte, ne serait-il pas judicieux
                        de considérer le design comme un levier de performance et de croissance, en l'intégrant en amont
                        sur chaque territoire en Afrique subsaharienne ? En d'autres termes, ne serait-il pas nécessaire
                        d'anticiper et d'utiliser le design comme un catalyseur pour favoriser un environnement propice
                        à la création, à la stabilité et à la croissance des entreprises ?
                        </span>
                            <span className={"lg:block lg:mt-3"}>
                        Face à ces interrogations, nous avons jugé pertinent de fonder une organisation de design
                        d'utilité publique qui aborderait chaque aspect de la problématique de manière approfondie, afin
                        d’y apporter des solutions.</span>
                        </p>

                    </div>
                    <div className={"mt-4 text-[#AEC1FF]  "}>
                        <h2 className={"font-bold"}>Elie KOUAME</h2>
                        <span className="mb-8 block">Président et Coordinateur général</span>
                    </div>

                </div>
                {/*<div className="mt-3 lg:flex flex-col justify-end items-end lg:mr-[83px] lg:mb-[90px] text-[#AEC1FFBF] ">
                <div className={"bg-[#AEC1FF1C] rounded-2xl"}>
                    <div className={"p-4 "}>
                        <p className={"text-xs font-bold"}>S'ENGAGER AVEC L'AIPDIA </p>
                        <span className={"text-[17px] block mb-4"}>Vous souhaitez rejoindre une représentation ?</span>

                        <button
                            onClick={() => navigate('/')}
                            className={"bg-[#AEC1FF] text-[#000827] w-full rounded-lg p-2 hover:bg-[#000827] hover:text-[#AEC1FF]"}>
                            <span>Enregistrez-vous ici</span>
                        </button>

                    </div>
                </div>
            </div>
            */}

                <ToastContainer closeButton={CloseButtonToast}/>

            </div>
            <Footer/>

        </>
    );
};

export default AboutPage;