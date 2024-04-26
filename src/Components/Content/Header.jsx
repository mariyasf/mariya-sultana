import { FaDownload, FaHandsHelping } from 'react-icons/fa';
import './CSS/Header.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Header = () => {
    const [typed_text] = useTypewriter({
        words: ['Frontend Developer.', 'Competitive Programmer.'],
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
                        As a passionate student at IIUC, I wear multiple hats, serving as a Teaching Assistant and Competitive Programming Bootcamp Trainer. In my role as a mentor and trainer, I'm trying to guide aspiring programmers on their path to mastering competitive programming, fostering an environment of learning and growth.

                        Together, we embark on the exciting journey of solving complex problems, enhancing our coding skills, and building a vibrant community of problem solvers.
                    </div>
                </div>

            </div>

            <div className="large-btn">
                <div className="content-inner">
                    <a className="btn" href="#">
                        <FaDownload />
                        Resume
                    </a>
                    <a className="btn" href="#">
                        <FaHandsHelping />
                        Hire Me</a>
                </div>
            </div>
        </div>
    );
};

export default Header;