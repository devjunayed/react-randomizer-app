import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-3 justify-center text-center  footer items-center p-4 bg-green-600 text-white absolute bottom-0">
            <aside className="mx-auto md:mx-0">
                <div className="">
                    <a className="text-center text-xl uppercase">Randomizer</a>
                </div>
            </aside>
            <div className="text-2xl text-center mx-auto grid-flow-col">
                <a href=""><FaGithub /></a>
                <a href=""><FaLinkedin /></a>
                <a href=""><FaFacebookF /></a>

            </div>
            <div className="w-full flex justify-center  md:justify-end">
                <p className="">Copyright © 2024 - All right reserved <a href="https://devjunayed.com">Devjunayed</a></p>
            </div>
        </footer>
    );
};

export default Footer;