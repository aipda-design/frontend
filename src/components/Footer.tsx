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
        name: 'Mentions légales',

    },

]
const Footer = () => {


    return (
        <>
            <footer
                className={`fixed bottom-4 p-3 z-50 rounded-2xl w-[85%] bg-[#000827] md:hidden  flex justify-around`}>

                <div className={"flex flex-wrap gap-1 justify-evenly w-fill"}>
                    {footerItems.map((item, i) => (
                        <NavLink key={i} to={item.link}
                                 className={({isActive}) =>
                                     `rounded-[10px] p-1 border border-[#D4DEFF] text-xs ${
                                         isActive ? 'text-[#D4DEFF] bg-europe-dark-bleu  rounded-lg  text-center font-bold' : 'bg-[#D4DEFF] text-europe-dark-bleu font-bold hover:text-[#000827] hover:bg-[#AEC1FF]'
                                     }`}>
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </footer>
        </>
    );
};

export default Footer;