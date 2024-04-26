import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer items-center p-4 
            mb-4 rounded-xl bg-[#F6D155]">
            <aside className="items-center text-[#FF6F61] text-xl font-bold grid-flow-col">
                <p>Mariya Sultana</p>
            </aside>

            <nav className="grid-flow-col gap-4 md:place-self-center 
            md:justify-self-end text-xl">


                <a href="https://github.com/mariyasf">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/mariyasf/">
                    <FaLinkedin />
                </a>
            </nav>
        </footer>
    );
};

export default Footer;