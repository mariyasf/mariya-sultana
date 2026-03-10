import { useEffect } from "react";
import Footer from "../Footer/Footer";
import BackToTop from "../BackToTop/BackToTop";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Education from "./Education";
import Header from "./Header";
import Protfolio from "./Protfolio";
import SectionDivider from "./SectionDivider";

const Content = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-poppins">
      <Header />
      <AboutMe />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Protfolio />
      <SectionDivider />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Content;