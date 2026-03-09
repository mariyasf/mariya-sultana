import React from "react";
import { IconButton } from "@material-tailwind/react";
import "./navbar.css";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("home");
  const scrollLockRef = React.useRef(0);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  React.useEffect(() => {
    const sections = [
      { id: "home", el: document.getElementById("header") },
      { id: "about", el: document.getElementById("about-me") },
      { id: "services", el: document.getElementById("activities") },
      { id: "projects", el: document.getElementById("portfolio") },
      { id: "contact", el: document.getElementById("contact") },
    ].filter((s) => s.el);

    const onScroll = () => {
      if (Date.now() < scrollLockRef.current) return;
      const scrollY = window.scrollY;
      let current = "home";
      for (let i = sections.length - 1; i >= 0; i--) {
        const top = sections[i].el.offsetTop - 120;
        if (scrollY >= top) {
          current = sections[i].id;
          break;
        }
      }
      setActiveLink(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveLink(id);
    scrollLockRef.current = Date.now() + 700;
  };

  const navLinks = [
    { id: "home", label: "Home", href: "#header" },
    { id: "about", label: "About Me", href: "#about-me" },
    { id: "services", label: "Services", href: "#activities" },
    { id: "projects", label: "My Projects", href: "#portfolio" },
    { id: "reviews", label: "Reviews", href: "#portfolio" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  const navList = (
    <ul className="nav-list">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-item">
          <a
            className={`nav-link ${activeLink === item.id ? "active" : ""}`}
            href={item.href}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="navbar-container">
      <div className="desktop-nav">
        <a href="#header" className="navbar-logo">
          <span className="logo-circle">M</span>
        </a>
        <nav className="nav-menu">{navList}</nav>
        <a href="#contact" className="btn-contact-nav">
          Contact
        </a>
      </div>

      <div className="mobile-nav">
        <div className="mobile-header">
          <a href="#header" className="navbar-brand-mobile">
            <span className="logo-circle">M</span>
          </a>
          <IconButton
            variant="text"
            className="mobile-menu-toggle"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
        <div className={`mobile-menu ${openNav ? "open" : ""}`}>
          {navList}
          <a href="#contact" className="btn-contact-nav mobile-contact-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
