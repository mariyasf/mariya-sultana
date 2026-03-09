import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import Content from "../Components/Content/Content";

const Root = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar - Fixed Position */}
      <NavBar />

      {/* Main Content Area */}
      <main className="w-full">
        <Content />
      </main>

      {/* Footer - Full Width */}
      <Footer />
    </div>
  );
};

export default Root;
