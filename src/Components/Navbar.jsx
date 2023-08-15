import React, { useState } from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import { logoNoBackground, menu, close, Resume } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav
      id="nav-menu"
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 .nav-link.home"
          onClick={() => {
            setActive("");
            scrollToTop();
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
        </Link>

        <ul className="list-none hidden lg:flex flex-row gap-10">
          <li>
            <Link
              to="/"
              className={`${
                active === "Home" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer .nav-link.home`}
              onClick={() => {
                setActive("Home");
                scrollToTop();
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${
                active === "About" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer .nav-link.about`}
              onClick={() => {
                setActive("About");
                scrollToTop();
              }}
            >
              About
            </Link>
          </li>
          <li className="">
            <Link
              to="/skill"
              className={`nav-link.skills ${
                active ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer `}
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              Skill
            </Link>
          </li>
          <li className="">
            <Link
              to="/project"
              className={`nav-link.projects ${
                active ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer `}
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              Project
            </Link>
          </li>
          <li className="">
            <Link
              to="/contact"
              className={`nav-link.contact ${
                active ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer `}
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              Contact
            </Link>
          </li>
          <li
            className="bg-tertiary px-5 py-1 rounded-md hover:bg-secondary"
            id="resume-button-2"
          >
            <a
              href={Resume}
              download="Hardik-Gajera-Resume.pdf"
              className={`${
                active ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer nav-link contact nav-link resume`}
              onClick={() => setActive()}
            >
              Resume
            </a>
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
                <Link
                  to="/"
                  className={`${
                    active ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer nav-link home`}
                  onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`${
                    active ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="skill"
                  className={`${
                    active ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                  }}
                >
                  Skill
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  className={`${
                    active ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
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
                  to="/contact"
                  className={`${
                    active ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                  }}
                >
                  Contact
                </Link>
              </li>
              <li
                className="bg-tertiary px-5 py-1 rounded-md hover:bg-secondary"
                id="resume-button-2"
              >
                <a
                  href={Resume}
                  download="Hardik-Gajera-Resume.pdf"
                  className={`${
                    active ? "text-white" : "text-secondary"
                  }  hover:text-white text-[18px] font-medium cursor-pointer nav-link contact`}
                  onClick={() => setActive()}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
