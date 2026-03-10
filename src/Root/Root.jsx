import NavBar from "../Components/NavBar/NavBar";
import Content from "../Components/Content/Content";

const Root = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar - Fixed Position */}
      <NavBar />

      {/* Main Content Area (includes Footer at end) */}
      <main className="w-full">
        <Content />
      </main>
    </div>
  );
};

export default Root;
