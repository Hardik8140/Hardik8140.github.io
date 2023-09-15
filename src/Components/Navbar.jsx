import React, { useState } from "react";
import { styles } from "../style";
import { Link as ScrollLink, Element } from "react-scroll";
import { logoNoBackground, menu, close, Resume } from "../assets";
import { navLinks } from "../constants";
// import styled from "styled-components";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleNavLinkClick = (el) => {
    setActive(el.title);
    setToggle(false);
    if (el.scrollToTop) {
      handleScrollToTop();
    }
  };
  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      id="nav-menu"
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <ScrollLink
          to="/"
          className="flex items-center gap-2 nav-link home"
          onClick={handleScrollToTop}
        >
          <img
            src={logoNoBackground}
            alt="logo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Hardik &nbsp;
            <span className="sm:block hidden">| MERN Developer</span>
          </p>
        </ScrollLink>
        <div className="lg:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[20px] h-[28px] object-contain cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        <div
          className={`${
            toggle ? "lg:hidden flex flex-1 justify-end items-center" : "hidden"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex flex-col gap-4">
            {navLinks.map((el) => (
              <li key={el.id}>
                <ScrollLink
                  className={`${
                    active === el.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  to={el.id}
                  href={`#${el.id}`}
                  spy={el.spy}
                  smooth={el.smooth}
                  offset={el.offset}
                  duration={el.duration}
                  onClick={() => handleNavLinkClick(el)}
                >
                  {el.title}
                </ScrollLink>
              </li>
            ))}
            <li className="bg-tertiary px-5 py-1 rounded-md hover:bg-secondary">
              <button id="resume-button-1">
                <ScrollLink
                  id="resume-link-1"
                  to={Resume}
                  target="_blank"
                  className={`${
                    active ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer nav-link resume`}
                  onClick={(event) => {
                    event.preventDefault();
                    setActive();
                    window.open(Resume, "_blank");
                  }}
                  download="Hardik-Gajera-Resume.pdf"
                >
                  Resume
                </ScrollLink>
              </button>
            </li>
          </ul>
        </div>

        <div className="sm:hidden md:hidden lg:flex items-center">
          <ul className="list-none flex justify-center items-start gap-4">
            {navLinks.map((el) => (
              <li key={el.id}>
                <ScrollLink
                  className={`${
                    active === el.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer ${
                    el.className
                  }`}
                  to={el.id}
                  href={`#${el.id}`}
                  spy={el.spy}
                  smooth={el.smooth}
                  offset={el.offset}
                  duration={el.duration}
                  onClick={() => handleNavLinkClick(el)}
                >
                  {el.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

// const NAVBAR = styled.div`
//   padding: 2px;
//   max-width: 1500px;
//   margin: auto;
// `;

{
  /* //////////////////////////////////////////////////////////////////////////////////////////////////// */
}

{
  /* <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[20px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-center items-start flex-col gap-4">
              {navLinks.map((el) => (
                <li key={el.id}>
                  <ScrollLink
                    id="nav-toggle-links"
                    // className={`${el.className}`}
                    className={`${
                      active === el.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer ${
                      el.className
                    }`}
                    to={el.id}
                    href={`#${el.id}`}
                    spy={el.spy}
                    smooth={el.smooth}
                    offset={el.offset}
                    duration={el.duration}
                    onClick={() => handleNavLinkClick(el)}
                  >
                    {el.title}
                  </ScrollLink>
                </li>
              ))} */
}
{
  /* <li>
                <ScrollLink
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className={`${
                    active ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer nav-link home`}
                  onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                  }}
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={50}
                  className={`${
                    active ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer `}
                  onClick={() => {
                    setActive("About");
                  }}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={50}
                  className={`${
                    active ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer nav-link skills`}
                  onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                  }}
                >
                  Skill
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={50}
                  className={`${
                    active ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer nav-link projects`}
                  onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                  }}
                >
                  Project
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="statistics"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={50}
                  className={`${
                    active ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer `}
                  onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                  }}
                >
                  Statistics
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={50}
                  className={`${
                    active ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer `}
                  onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                  }}
                >
                  Contact
                </ScrollLink>
              </li> */
}

{
  /* <li className="bg-tertiary px-5 py-1 rounded-md hover:bg-secondary">
                <button>
                  <ScrollLink
                    id="resume-link-1"
                    to={Resume}
                    target="_blank"
                    className={`${
                      active ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer `}
                    onClick={(event) => {
                      event.preventDefault();
                      setActive();
                      window.open(Resume, "_blank");
                    }}
                    download="Hardik-Gajera-Resume.pdf"
                  >
                    Resume
                  </ScrollLink>
                </button>
              </li>
            </ul>
          </div>
        </div> */
}
