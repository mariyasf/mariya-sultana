import Footer from "../Footer/Footer";
import Activities from "./Activities";
import Contact from "./Contact";
import Education from "./Education";
import Header from "./Header";
import Protfolio from "./Protfolio";


const Content = () => {
    return (
        <div className="font-poppins">
            <Header />
            <Education />
            <Activities />
            <Protfolio />
            <Contact/>
            <Footer />
        </div>
    );
};

export default Content;