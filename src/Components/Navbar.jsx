import React, { useState } from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { logoNoBackground, menu, close, Resume } from "../assets";
import { navLinks } from "../constants";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  Image,
  HStack,
} from "@chakra-ui/react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleNavLinkClick = (el) => {
    setActive(el.title);
    setToggle(false);
  };

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      id="nav-menu"
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
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
        </Link>

        <HStack
          display={{ base: "none", sm: "flex", md: "flex", lg: "flex" }}
          gap={8}
        >
          {navLinks.map((el) => (
            <ScrollLink
              className={`${
                active === el.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer ${
                el.className
              }`}
              key={el.title}
              to={el.id}
              href={`#${el.id}`}
              // spy={el.spy}
              // smooth={el.smooth}
              // offset={el.offset}
              // duration={el.duration}
              // onClick={() => handleNavLinkClick(el)}
            >
              {el.title}
            </ScrollLink>
          ))}
          <button
            className="bg-tertiary px-5 py-1 rounded-md hover:bg-secondary"
            id="resume-button-1"
          >
            <Link
              to={Resume}
              href={Resume}
              rel="noopener noreferrer"
              download="Hardik-Gajera-Resume.pdf"
              onClick={(event) => {
                event.preventDefault();
                window.open(Resume, "_blank");
              }}
              target="_blank"
              className={`${
                active ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer nav-link resume`}
              id="resume-link-1"
            >
              Resume
            </Link>
          </button>
        </HStack>

        <Menu isOpen={toggle}>
          <MenuButton
            mr={{ md: "-12", lg: "-12" }}
            display={{
              base: "flex",
              sm: "none",
              md: "none",
              lg: "none",
            }}
            onClick={toggleMenu}
          >
            {toggle ? (
              <Image src={close} alt="close" onClick={toggleMenu} />
            ) : (
              <Image src={menu} alt="menu" onClick={toggleMenu} />
            )}
          </MenuButton>
          <MenuList
            p={6}
            bgGradient="linear(to-r, #434343,#000000)"
            border="none"
            borderRadius="xl"
            minW="140px"
          >
            {navLinks.map((el) => (
              <Box key={el.id} pb={2}>
                <Link
                  download="Hardik-Gajera-Resume.pdf"
                  className={`${
                    active === el.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer `}
                  to={el.id}
                >
                  {el.title}
                </Link>
              </Box>
            ))}
            <button className="bg-tertiary px-5 py-1 rounded-md hover:bg-secondary">
              <Link
                to={Resume}
                download="Hardik-Gajera-Resume.pdf"
                onClick={(event) => {
                  event.preventDefault();
                  window.open(Resume, "_blank");
                }}
                target="_blank"
                className={`${
                  active ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                Resume
              </Link>
            </button>
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
};
export default Navbar;
