import {NavLink, useLocation} from "react-router-dom";

const footerItems = [
    {
        link: '/about',
        name: 'A propos',
    },
    {
        link: '/mission',
        name: 'Mission',
    },
    {
        link: '/projets',
        name: 'Projets',
    },
    {
        link: '/mention-legal',
        name: 'Mention légale',

    },

    {
        link: '/CGU',
        name: 'CGU',

    }
]
const Footer = () => {

    const url = useLocation();
    const pathname = url.pathname;
    const isNotHomePage = pathname !== "/"

    return (
        <footer
            className={`fixed bottom-4 p-3 z-20 rounded-2xl ${isNotHomePage ? 'bg-[#2B365D] ' : 'bg-[#000827]'} md:hidden  flex justify-center`}>

            <div className={"flex flex-wrap gap-1"}>
                {footerItems.map((item, i) => (
                    <NavLink key={i} to={item.link}
                             className={({isActive}) =>
                                 `rounded-[10px] p-1 border border-[#D4DEFF] text-xs ${
                                     isActive ? 'bg-[#D4DEFF] text-europe-dark-bleu !important rounded-lg  text-center' : 'hover:text-[#000827] hover:bg-[#AEC1FF]'
                                 }`}>
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </footer>
    );
};

export default Footer;