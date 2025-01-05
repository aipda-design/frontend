import signature from "../assets/signature.svg"

const AboutPage = () => {
    return (
        <div className="p-4">
            <div>
                <h2 className={"text-[#AEC1FF] font-bold mb-6"}>MANIFESTE AIPDA</h2>
                <div>
                    <p className="text-[#AEC1FFBF]">Le monde entier assiste à un changement de paradigme politique,
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

                        Face à ces interrogations, nous avons jugé pertinent de fonder une organisation de design
                        d'utilité publique qui aborderait chaque aspect de la problématique de manière approfondie, afin
                        d’y apporter des solutions.
                    </p>
                </div>
            </div>
            <div className="text-[#AEC1FF] mt-3">
                <h2 className={"font-bold"}>Elie KOUAME</h2>
                <span className="mb-8">Président et Coordinateur général</span>
                <img src={signature} alt=""/>
            </div>
        </div>
    );
};

export default AboutPage;