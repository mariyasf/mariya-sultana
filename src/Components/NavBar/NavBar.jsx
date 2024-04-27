import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import React from "react";
import { FaFacebook, FaFileArchive, FaGithub, FaLinkedin, FaRegAddressCard, FaUserGraduate } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdMiscellaneousServices, MdOutlineEmail } from "react-icons/md";
import './navbar.css'
import { FcGraduationCap } from "react-icons/fc";

const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul
            className=" mt-2 mb-4 flex flex-col gap-2 ">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal nav-item "
            >

                <a
                    className="nav-link flex items-center justify-between"
                    href="#header">
                    <span>Home</span>
                    <IoHomeOutline className="text-xl" />
                </a>

            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal nav-item"
            >
                <a className="nav-link flex items-center justify-between" href="#education">
                    <span>Education</span>
                    <FaUserGraduate className="text-xl" />
                </a>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal nav-item"
            >
                <a className="nav-link flex items-center justify-between" href="#activities">
                    <span>Activities</span>
                    <MdMiscellaneousServices className="text-xl" />
                </a>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal nav-item"
            >
                <a className="nav-link flex items-center justify-between" href="#portfolio">
                    <span>Portfolio</span>
                    <FaFileArchive className="text-xl" />
                </a>
            </Typography>



            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal nav-item"
            >
                <a className="nav-link flex items-center justify-between" href="#contact">
                    <span>Contact</span>
                    <MdOutlineEmail className="text-xl" />
                </a>
            </Typography>
        </ul>
    );


    return (
        <div className="bg-[#222222]">
            <Navbar className="fixed lg:sticky 
            top-0 z-10 w-full rounded-none px-10 py-2
            lg:px-8 lg:py-4  bg-[#222222]">
                <div className="hidden lg:block">
                    <img
                        className="w-full"
                        src="/images/profile.png" alt="Profile" />
                </div>

                <div className="flex lg:block items-center justify-between">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer
                         py-1.5 lg:hidden
                        font-medium font-poppins text-xl"
                    >
                        MSF
                    </Typography>

                    <div className="flex lg:block items-center gap-4">
                        <div className="mr-4 hidden lg:block ">
                            {navList}
                        </div>

                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {
                                openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                        </IconButton>


                    </div>
                </div>

                <MobileNav open={openNav}>
                    {navList}
                </MobileNav>


            </Navbar>

        </div>
    );

};

export default NavBar;