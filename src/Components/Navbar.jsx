import React, { useState } from "react";
import { styles } from "../style";
import { Link as ScrollLink, Element } from "react-scroll";
import { logoNoBackground, menu, close, Resume } from "../assets";
import { navLinks } from "../constants";
import {
  Box,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  UnorderedList,
  Image,
  HStack,
  Button,
} from "@chakra-ui/react";
// import styled from "styled-components";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // const handleScrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };

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
      className={`${styles.paddingXNav} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="#top"
          className="flex  gap-2"
          onClick={() => handleNavLinkClick({ title: "Top" })}
        >
          <img
            src={logoNoBackground}
            alt="logo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Hardik &nbsp;
            <span className="lg:block hidden">| MERN Developer</span>
          </p>
        </a>

        <HStack
          display={{ base: "none", sm: "flex", md: "flex", lg: "flex" }}
          gap={8}
        >
          {navLinks.map((el) => (
            <Box key={el.id} pb={2}>
              <ScrollLink
                className={`${
                  active === el.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer ${
                  el.className
                }`}
                // key={el.title}
                to={el.id}
                spy={el.spy}
                smooth={el.smooth}
                offset={el.offset}
                duration={el.duration}
                onClick={() => handleNavLinkClick(el)}
              >
                {el.title}
              </ScrollLink>
            </Box>
          ))}
          <button
            className="bg-tertiary px-5 py-1 rounded-md hover:bg-secondary"
            id="resume-button-1"
          >
            <ScrollLink
              to={Resume}
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
            </ScrollLink>
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
                <ScrollLink
                  download="Hardik-Gajera-Resume.pdf"
                  className={`${
                    active === el.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer `}
                  to={el.id}
                  spy={el.spy}
                  smooth={el.smooth}
                  offset={el.offset}
                  duration={el.duration}
                  onClick={() => {
                    handleNavLinkClick(el);
                    setToggle(false);
                  }}
                >
                  {el.title}
                </ScrollLink>
              </Box>
            ))}
            <button
              className="bg-tertiary px-5 py-1 rounded-md hover:bg-secondary"
              // id="resume-button-1"
            >
              <ScrollLink
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
                // id="resume-link-1"
              >
                Resume
              </ScrollLink>
            </button>
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
};
export default Navbar;
