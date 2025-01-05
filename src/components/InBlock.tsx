import {useCountries} from "../service/continentContexte/useContries";


/**
 * Note : mettre a 375 breakpoint , la taille des image/logo a 8rem
 * et reduire la taille de certaines pour ça fit
 * pour l'annimation de se composant voir /https://rombo.co/tailwind/ et pour tous les autre animations
 * @returns
 */

const InBlock = ({
                     color,
                     numberColor,
                 }: {
    color?: string;
    numberColor?: string;
}) => {
    const {getInfos} = useCountries();

    /**avant au niveau de la taille width du bas de page xl:max-w-[352px] */
    return (
        <>
            <div className={`title text-${color}`}>
                <p className="text-[15px] md:text-[17px] font-bold 3xl:text-5xl ">
                    {getInfos?.infos_title}
                </p>
                <p className="text-[15px] md:text-[17px] font-normal mb-7 lg:mb-3 3xl:text-4xl">
                    {getInfos?.infos_sub_title}
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                    {getInfos?.liste &&
                        Object.entries(getInfos.liste).map(([_, value], index) => (
                            <div key={index} className="flex items-center lg:mb-1">
                                <div className="relative h-8 w-8 md:h-9 md:w-9 3xl:h-14 3xl:w-14">
                                    {/*<img
										src={ellipse}
										alt="ellipse"
										className="object-contain h-full w-full text-black"
									/>*/}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 100"
                                        className={`fill-${numberColor} object-contain h-full w-full`}
                                    >
                                        <circle cx="50" cy="50" r="40"/>
                                    </svg>
                                    <span
                                        className="text-[12px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm md:text-base 3xl:text-2xl">
										{index + 1}
									</span>
                                </div>

                                <p
                                    className={`text-[10px] lg:ml-3 max-w-[120px] md:max-w-[352px] lg:text-[16px] font-bold ${
                                        index === 1 ? "max-w-min" : ""
                                    }`}
                                >
                                    {value}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default InBlock;
