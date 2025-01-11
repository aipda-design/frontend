import {Outlet} from "react-router-dom";
import NavList from "../components/navList";


export default function Page() {
    return (
        <div className="bg-[#AEC1FF] min-h-screen lg:h-screen flex items-center justify-center w-full p-1 md:p-2">
            <div
                className="bg-monde-bleu-fonce min-h-[calc(100vh-16px)] 2xl:h-[calc(100vh-36px)] flex flex-col items-center rounded-[28px]  m-2 w-full relative
			"
            >

                <NavList/>
                <>
                    <Outlet/>
                </>

            </div>
        </div>
    );
}
