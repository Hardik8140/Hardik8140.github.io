import React, { useState } from "react";
import { styles } from "../style";
import { Link as ScrollLink, Element } from "react-scroll";
import { logoNoBackground, menu, close, Resume } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };

  return (
    <nav
      id="nav-menu"
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <ScrollLink
          to="/"
          className="flex items-center gap-2 nav-link home"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
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

        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((el) => (
            <li key={el.id} onClick={() => setActive(el.title)}>
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
              >
                {el.title}
              </ScrollLink>
            </li>
          ))}
          {/* <li className="nav-link home">
            <Link
              to="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={`${
                active === "Home" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer `}
              onClick={() => {
                setActive("Home");
                window.scrollTo(0, 0);
              }}
            >
              Home
            </Link>
          </li>
          <li className="nav-link about">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={50}
              className={` ${
                active ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer `}
              onClick={() => {
                setActive("About");
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-60}
              duration={50}
              className={` ${
                active ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer nav-link skills`}
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={50}
              className={` ${
                active ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer nav-link projects`}
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
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
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={50}
              className={` ${
                active ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer nav-link contact`}
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              Contact
            </Link>
          </li>
          */}
          <li className="bg-tertiary px-5 py-1 rounded-md hover:bg-secondary">
            <button id="resume-button-1">
              <ScrollLink
                to={Resume}
                target="_blank"
                className={`${
                  active ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer nav-link contact nav-link resume`}
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

        <div className="lg:hidden flex flex-1 justify-end items-center">
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
              <li>
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
              <li className="nav-link about">
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
              <li className="">
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
              </li>
              <li className="bg-tertiary px-5 py-1 rounded-md hover:bg-secondary">
                <button id="resume-button-1">
                  <ScrollLink
                    id="resume-link-1"
                    to={Resume}
                    target="_blank"
                    className={`${
                      active ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer nav-link contact nav-link resume`}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
