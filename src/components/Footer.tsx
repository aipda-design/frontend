import {NavLink} from "react-router-dom";

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
    return (
        <footer className={"fixed bottom-4 p-3 z-20 rounded-2xl bg-[#2B365D] md:hidden  flex justify-center"}>

            <div className={"flex flex-wrap gap-1"}>
                {footerItems.map((item, i) => (
                    <NavLink key={i} to={item.link}
                             className={({isActive}) =>
                                 `text-[#000827] rounded-[10px] p-1 border border-[#000827] text-xs ${
                                     isActive ? 'bg-europe-dark-bleu text-[#AEC1FF] rounded-lg md:w-fill text-center' : 'hover: hover:bg-[#AEC1FF]'
                                 }`}>
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </footer>
    );
};

export default Footer;