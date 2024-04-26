import { IoHomeOutline } from 'react-icons/io5';
import profile from '../../assets/images/profile.png'
import './navbar.css'
import { FaFacebook, FaFileArchive, FaGithubSquare, FaLinkedin, FaRegAddressCard } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img className='lg:w-full' src={profile} alt="Image" />
            </div>

            <div className="sidebar-content">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <a href="#" className="navbar-brand">MSF</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link flex items-center justify-between" href="#header">
                                    <span>Home</span>
                                    <IoHomeOutline />
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link flex items-center justify-between" href="#about">
                                    <span>About</span>
                                    <FaRegAddressCard />
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link flex items-center justify-between" href="#portfolio">
                                    <span>Portfolio</span>
                                    <FaFileArchive />
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link flex items-center justify-between" href="#contact">
                                    <span>Contact</span>
                                    <MdOutlineEmail />
                                </a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>

            <div className="sidebar-footer">

                <a href="#">
                    <FaFacebook />
                </a>
                <a href="#">
                    <FaLinkedin />
                </a>
                <a href="#">
                    <FaGithubSquare />
                </a>
            </div>
        </div>
    );
};

export default Sidebar;