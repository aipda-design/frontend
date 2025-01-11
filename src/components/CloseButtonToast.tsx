import {CloseButtonProps} from 'react-toastify';
import {FaTimesCircle} from "react-icons/fa";


const CloseButtonToast = ({closeToast}: CloseButtonProps) => {
    return (
        <>
            <button
                aria-label="remove"
                type="button"
                className="absolute top-4 right-4"
                onClick={() => {
                    // we are passing true to close toast, the closure reason is optional
                    // you can specify any closure reason you want or simply omit it
                    // by convention, true is used to tell that it was removed by a user action
                    closeToast(true);
                }}
            >
                <FaTimesCircle className="text-[#AEC1FF]"/>
            </button>
        </>
    );
};

export default CloseButtonToast;