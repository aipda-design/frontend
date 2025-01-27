// toastNotifications.tsx
import {toast} from "react-toastify";
import {NavigateFunction} from "react-router-dom";

/*Main page toast */
export const showCustomMainToast = (navigate: NavigateFunction) => {
    toast(
        <div className="text-[#000827] md:text-[#AEC1FFBF]">
            <p className="text-xs font-bold leading-4 md:text-[16px]  lg:mb-2 lg:text-[18px]">S'ENGAGER AVEC
                L'AIPDIA</p>
            <span className="text-[16px] block max-w-[202px] md:w-full  mb-4">Vous souhaitez rejoindre une représentation ?</span>
            <button
                onClick={() => {
                    toast.dismiss(); // Ferme la notification
                    navigate('/otherContinent');  // Redirige vers une autre page
                }}
                className="bg-[#000827]   text-[#AEC1FF] w-full rounded-lg p-2 md:bg-[#AEC1FF]  md:text-[#000827]  hover:bg-europe-blanc hover:text-[#000827]"
            >
                Enregistrez-vous ici
            </button>
        </div>,
        {
            autoClose: false, // La notification reste affichée jusqu'à fermeture manuelle
            closeOnClick: true, // Fermer en cliquant dessus
            closeButton: true, // Bouton de fermeture
            position: "bottom-right", // Position sur l'écran
            className: "bg-[#AEC1FF] w-[98%] mr-1 rounded-2xl mb-14 md:w-full   lg:mr-7", // Style personnalisé
        }
    );
};

/*Normal notification About*/
export const showCustomToast = (navigate: NavigateFunction, toastPosition: "bottom-right" | "bottom-center") => {
    console.log("toast position is :", toastPosition);
    toast(
        <div className="text-[#000827] w-fill ">
            <p className="text-xs font-bold leading-4 mb-4 md:text-[16px]  lg:mb-2 lg:text-[18px]">S'ENGAGER AVEC
                L'AIPDIA</p>
            <span
                className="text-[16px] w-[200px] block  md:w-full mb-4">Vous souhaitez rejoindre une représentation ?</span>
            <button
                onClick={() => {
                    toast.dismiss(); // Ferme la notification
                    navigate('/');  // Redirige vers une autre page
                }}
                className="bg-[#000827] top text-[#AEC1FF]   w-full rounded-lg p-2 hover:bg-[#AEC1FF] hover:text-[#000827] md:hover:bg-[#000827] md:hover:text-[#AEC1FF]"
            >
                Enregistrez-vous ici
            </button>
        </div>,
        {
            autoClose: false, // La notification reste affichée jusqu'à fermeture manuelle
            closeOnClick: true, // Fermer en cliquant dessus
            closeButton: true, // Bouton de fermeture
            position: toastPosition, // Position sur l'écran
            className: "bg-[#D4DEFF] w-[85%] rounded-2xl -top-12 md:top-0 mr-1  md:w-full  lg:mr-7", // Style personnalisé
        }
    );
};


/*Normal notification, mision*/

export const showCustomToastMission = (navigate: NavigateFunction, toastPosition: "bottom-right" | "bottom-center") => {
    console.log("toast position is :", toastPosition);
    toast(
        <div className="text-[#000827] w-fill ">
            <p className="text-xs font-bold leading-4 mb-4 md:text-[16px]  lg:mb-2 lg:text-[18px]">S'ENGAGER AVEC
                L'AIPDIA</p>
            <span
                className="text-[16px] w-[200px] block  md:w-full mb-4">Vous souhaitez rejoindre une représentation ?</span>
            <button
                onClick={() => {
                    toast.dismiss(); // Ferme la notification
                    navigate('/');  // Redirige vers une autre page
                }}
                className="bg-[#000827] top text-[#AEC1FF]   w-full rounded-lg p-2 hover:bg-europe-blanc hover:text-[#000827] md:hover:bg-[#000827] md:hover:text-[#AEC1FF]"
            >
                Enregistrez-vous ici
            </button>
        </div>,
        {
            autoClose: false, // La notification reste affichée jusqu'à fermeture manuelle
            closeOnClick: true, // Fermer en cliquant dessus
            closeButton: true, // Bouton de fermeture
            position: toastPosition, // Position sur l'écran
            className: "bg-[#D4DEFF] w-[85%] rounded-2xl -top-12 md:top-0 mr-1  md:w-full  lg:mr-7", // Style personnalisé
        }
    );
};

/*Normal notification */
/*Pour cette partie, je vais les séparer en 2 pour les faire venir à deux temps different   */


export const showCustomToastProjectPart1 = (navigate: NavigateFunction, toastPosition: "bottom-right" | "bottom-center") => {
    toast(
        <div className={"text-[#000827] w-fill"}>

            <p className={"text-xs font-bold leading-4 mb-4 md:text-[16px] lg:mb-2 lg:text-[18px]"}>SOUTENIR UN
                PROJET</p>
            <span
                className={"text-[15px] block w-[200px] md:w-full  mb-4"}>Vous souhaitez soutenir un projet ?</span>

            <button
                onClick={() => {
                    toast.dismiss(); // Ferme la notification
                    navigate('/');  // Redirige vers une autre page
                }}
                className={"bg-[#000827]   text-[#AEC1FF]  w-full rounded-lg p-2 hover:bg-[#AEC1FF] hover:text-[#000827] "}>
                Écrivez-nous ici
            </button>

        </div>,
        {
            autoClose: false, // La notification reste affichée jusqu'à fermeture manuelle
            closeOnClick: true, // Fermer en cliquant dessus
            closeButton: true, // Bouton de fermeture
            position: toastPosition, // Position sur l'écran
            className: "bg-[#D4DEFF] rounded-2xl w-[85%] mr-1 -top-12 md:top-0 md:w-full lg:mr-7 mb-3 block", // Style personnalisé
        }
    );

}

export const showCustomToastProjetPart2 = (navigate: NavigateFunction, toastPosition: "bottom-right" | "bottom-center") => {
    toast(
        <div className="text-[#000827] w-fill ">
            <p className="text-xs font-bold leading-4 mb-4 md:text-[16px]  lg:mb-2 lg:text-[18px]">S'ENGAGER AVEC
                L'AIPDIA</p>
            <span
                className="text-[15px] block w-[200px] md:w-full  mb-4">Vous souhaitez rejoindre une représentation ?</span>
            <button
                onClick={() => {
                    toast.dismiss(); // Ferme la notification
                    navigate('/');  // Redirige vers une autre page
                }}
                className={"bg-[#000827] text-[#AEC1FF]    w-full rounded-lg p-2  hover:bg-[#AEC1FF] hover:text-[#000827] "}>

                Enregistrez-vous ici
            </button>
        </div>,
        {
            autoClose: false, // La notification reste affichée jusqu'à fermeture manuelle
            closeOnClick: true, // Fermer en cliquant dessus
            closeButton: true, // Bouton de fermeture
            position: toastPosition, // Position sur l'écran
            className: "bg-[#D4DEFF] rounded-2xl w-[85%] -top-12 md:top-0 mr-1  md:w-full lg:mr-7 block", // Style personnalisé
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
