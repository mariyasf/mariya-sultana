import Footer from "../Footer/Footer";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Education from "./Education";
import Header from "./Header";
import Protfolio from "./Protfolio";
import SectionDivider from "./SectionDivider";

const Content = () => {
    return (
        <div className="font-poppins">
            <Header />
            <AboutMe />
            <SectionDivider />
            <Education />
            <SectionDivider   />
            <Protfolio />
            <SectionDivider />
            <Contact/>
            <Footer />
        </div>
    );
};

export default Content;