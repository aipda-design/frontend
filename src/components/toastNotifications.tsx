// toastNotifications.tsx
import {toast} from "react-toastify";
import {NavigateFunction} from "react-router-dom";


/*Normal notification */
export const showCustomToast = (navigate: NavigateFunction) => {
    toast(
        <div className="text-[#AEC1FFBF]">
            <p className="text-xs font-bold leading-4 md:text-[16px]  lg:mb-2 lg:text-[18px]">S'ENGAGER AVEC
                L'AIPDIA</p>
            <span className="text-[16px] block mb-4">Vous souhaitez rejoindre une représentation ?</span>
            <button
                onClick={() => {
                    toast.dismiss(); // Ferme la notification
                    navigate('/');  // Redirige vers une autre page
                }}
                className="bg-[#AEC1FF]  text-[#000827] w-full rounded-lg p-2 hover:bg-[#000827] hover:text-[#AEC1FF]"
            >
                Enregistrez-vous ici
            </button>
        </div>,
        {
            autoClose: false, // La notification reste affichée jusqu'à fermeture manuelle
            closeOnClick: true, // Fermer en cliquant dessus
            closeButton: true, // Bouton de fermeture
            position: "bottom-right", // Position sur l'écran
            className: "bg-[#000827] w-[70%] rounded-2xl mr-3 md:w-full lg:bg-[#AEC1FF1C]  lg:mr-7", // Style personnalisé
        }
    );
};

/*Normal notification */
/*Pour cette partie, je vais les séparer en 2 pour les faire venir à deux temps different   */


export const showCustomToastProjectPart1 = (navigate: NavigateFunction) => {
    toast(
        <div className={"text-[#AEC1FFBF]"}>

            <p className={"text-xs font-bold leading-4 md:text-[16px] lg:mb-2 lg:text-[18px]"}>SOUTENIR UN PROJET</p>
            <span className={"text-[15px] block mb-4"}>Vous souhaitez soutenir un projet ?</span>

            <button
                onClick={() => {
                    toast.dismiss(); // Ferme la notification
                    navigate('/');  // Redirige vers une autre page
                }}
                className={"bg-[#AEC1FF] text-[#000827] w-full rounded-lg p-2 hover:bg-[#000827] hover:text-[#AEC1FF]"}>
                Écrivez-nous ici
            </button>

        </div>,
        {
            autoClose: false, // La notification reste affichée jusqu'à fermeture manuelle
            closeOnClick: true, // Fermer en cliquant dessus
            closeButton: true, // Bouton de fermeture
            position: "bottom-right", // Position sur l'écran
            className: "bg-[#000827] rounded-2xl w-[80%] mr-3  lg:bg-[#AEC1FF1C]  md:w-full lg:mr-7 mb-3 block", // Style personnalisé
        }
    );

}

export const showCustomToastProjetPart2 = (navigate: NavigateFunction) => {
    toast(
        <div className="text-[#AEC1FFBF] lg:w-inherit">
            <p className="text-xs font-bold leading-4 md:text-[16px]  lg:mb-2 lg:text-[18px]">S'ENGAGER AVEC
                L'AIPDIA</p>
            <span className="text-[15px] block mb-4">Vous souhaitez rejoindre une représentation ?</span>
            <button
                onClick={() => {
                    toast.dismiss(); // Ferme la notification
                    navigate('/');  // Redirige vers une autre page
                }}
                className="bg-[#AEC1FF]  text-[#000827] w-full rounded-lg p-2 hover:bg-[#000827] hover:text-[#AEC1FF]"
            >
                Enregistrez-vous ici
            </button>
        </div>,
        {
            autoClose: false, // La notification reste affichée jusqu'à fermeture manuelle
            closeOnClick: true, // Fermer en cliquant dessus
            closeButton: true, // Bouton de fermeture
            position: "bottom-right", // Position sur l'écran
            className: "bg-[#000827] rounded-2xl w-[80%] mr-3  lg:bg-[#AEC1FF1C]  md:w-full lg:mr-7 mb-3 block", // Style personnalisé
        }
    );
};


/*export const showCustomToastPrincipal = () => {
    toast(
        <div className="">
            <button
                onClick={() => {
                    toast.dismiss(); // Ferme la notification
                    // Redirige vers une autre page
                }}
                className="bg-[#AEC1FF40]   text-[#000827] w-full rounded-lg p-2 hover:bg-[#000827] hover:text-[#AEC1FF]"
            >
                Mentions légales • CGU
            </button>
        </div>,
        {
            autoClose: false, // La notification reste affichée jusqu'à fermeture manuelle
            position: "bottom-right", // Position sur l'écran
            className: "bg-[#000827] rounded-xl lg:mr-1 hidden md:block", // Style personnalisé
            closeButton: false,


        }
    );
};*/
