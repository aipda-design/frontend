import {Outlet, useLocation} from "react-router-dom";
import NavList from "../components/navList";
import {clsx} from "clsx";


export default function Page() {
    const url = useLocation();
    const pathname = url.pathname;
    const isNotHomePage = pathname !== "/"
    return (
        <div
            className={clsx(
                "min-h-screen lg:h-screen flex items-center justify-center w-full p-1 md:p-2",
                isNotHomePage ? "bg-[#AEC1FF]" : "bg-[#EFF2FF]"
            )}
        >
            <div
                className={clsx(
                    "min-h-[calc(100vh-16px)] 2xl:h-[calc(100vh-36px)] flex flex-col items-center rounded-[28px] m-2 w-full relative",
                    isNotHomePage ? "bg-[#000827]" : "bg-[#EFF2FF]"
                )}
            >

                <NavList/>
                <>
                    <Outlet/>
                </>

            </div>
        </div>
    );
}
