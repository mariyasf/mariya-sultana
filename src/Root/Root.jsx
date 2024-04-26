import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import Content from "../Components/Content/Content";

const Root = () => {
    return (
        <div>

            <div className="grid grid-cols-1 lg:grid-cols-3 
            gap-10 lg:w-[1140px] lg:mx-auto">

                <NavBar />

                <div className="col-span-2 lg:mt-5">
                    <Content />
                </div>
            </div>
            
        </div>
    );
};

export default Root;