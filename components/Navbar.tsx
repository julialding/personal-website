import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div style={{ backgroundColor: `${navBg}` }} className="fixed w-full h-20 shadow-xl z-50">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/assets/navinitials.png" alt="/" width="125" height="100" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 list-none text-sm-widest font-bold uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 list-none text-sm-widest font-bold uppercase hover:border-b">
                About
              </li>
            </Link>
            <Link href="/#experience">
              <li className="ml-10 list-none text-sm-widest font-bold uppercase hover:border-b">
                Experience
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 list-none mr-6 text-sm-widest font-bold uppercase hover:border-b">
                Projects
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu
              onClick={handleNav}
              className="cursor-pointer pr-2"
              size={25}
            />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-sky-50 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/assets/navinitials.png"
                width="87"
                height="35"
                alt="/"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 list-none text-sm-widest font-bold">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li className="py-4 list-none text-sm-widest font-bold">
                    About
                  </li>
                </Link>
                <Link href="/#experience">
                  <li className="py-4 list-none text-sm-widest font-bold">
                    Experience
                  </li>
                </Link>
                <Link href="/#projects">
                  <li className="py-4 list-none text-sm-widest font-bold">
                    Projects
                  </li>
                </Link>
              </ul>
              <div className="pt-40">
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <a
                    href="https://www.linkedin.com/in/julialding/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      onClick={() => setNav(!nav)}
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/julialding"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      onClick={() => setNav(!nav)}
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href="mailto:jding713@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      onClick={() => setNav(!nav)}
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <AiOutlineMail />
                    </div>
                  </a>
                  <Link href="/resume">
                    <div
                      onClick={() => setNav(!nav)}
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
