import { FaDownload, FaHandsHelping } from 'react-icons/fa';
import './CSS/Header.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Header = () => {
    const [typed_text] = useTypewriter({
        words: [
            'Web Developer...',
            'Competitive Programmer...'
        ],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    return (
        <div>
            <div className="header font-poppins" id="header">
                <div className="content-inner p-12">
                    <p>I'm</p>
                    <h1>Mariya Sultana</h1>
                    <div className="typed_text mb-5">
                        <h2>
                            {
                                typed_text
                            }
                            <Cursor className="typed-cursor" />
                        </h2>

                    </div>
                    <div>
                        As a versatile student at IIUC, I serve as a Teaching Assistant and Competitive Programming Bootcamp Trainer, nurturing aspiring programmers.
                        Passionate about front-end development, particularly in React.js, I continually seek to expand my skills and contribute to the development community. Eager to bring this passion to a full-time role, I strive for excellence in every project.
                    </div>
                </div>

            </div>

            <div className="large-btn">
                <div className="content-inner">
                    <a className="btn" href="/Mariya-Sultana.pdf" download >
                        <FaDownload />
                        Resume
                    </a>
                    <a className="btn"
                        target="_blank"
                        href="https://www.linkedin.com/in/mariyasf/">
                        <FaHandsHelping />
                        Hire Me</a>
                </div>
            </div>
        </div>
    );
};

export default Header;