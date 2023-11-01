import { Link } from 'react-router-dom';
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
// import { FaSquareXTwitter } from 'react-icons/fa';
import logo from "../assets/images/logo.jpg";

const socialLinks = [
    {
        path: "https://www.youtube.com",
        icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
    },

    {
        path: "https://www.instagram.com",
        icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
    },
    {
        path: "https://www.twitter.com",
        icon: <AiOutlineTwitter className="group-hover:text-white w-4 h-5" />,
    }

]

const quickLinks1 = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/doctors',
        display: 'Find a Doctor'
    },
    {
        path: '/services',
        display: 'Explore our Services'
    },
    {
        path: '/contact',
        display: 'Contact Us'
    },
];

const Footer = () => {


    return (
        <footer className="pb-16 pt-10">
            <div className="container">
                <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">

                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-heading">Quick Links</h2>
                        <ul>{quickLinks1.map((item, index) => (<li key={index} className="mb-4"><Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link></li>))}</ul>
                    </div>

                    <div>
                        <img className="object-scale-down h-20 w-60 mix-blend-multiply" src={logo} alt="" />
                        <p className="text-[16px] leading-7 font-[400] text-textColor mt-4"> EliteCare dev. Liam Risdon 2023</p>
                        <div className="flex item-center gap-3 mt-4">
                            {socialLinks.map((link, index) => <Link to={link.path} key={index} className="w-9 h-9 border border-solid border-[black] rounded-full flex items-center justify-center group hover:bg-primary hover:border-none">{link.icon}</Link>)}
                        </div>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer