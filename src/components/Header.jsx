import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { MdMenu, MdClose } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";

const Header = ({ bgImg, title }) => {
  let location = useLocation();
  const checkLocation = (slug) => {
    if (location.pathname === slug) {
      return true;
    } else {
      return false;
    }
  };

  const [modal, setModal] = useState(false);
  const [linkModal, setLinkModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleLinkModal = () => {
    setLinkModal(!linkModal);
  };
  return (
    <>
      <Helmet>
        <title>{`${title.toUpperCase()} – title`}</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url(
            ${bgImg}
          )`,
        }}
        className=" relative bg-cover  bg-bg-black/60 bg-blend-darken shadow text-[#0a0a0a80]  bg-bottom bg-no-repeat overflow-hidden block"
      >
        <div className="max-w-[1100px] mx-0 md:mx-auto relative flex justify-between items-center md:block px-2 ">
          <div className="w-auto float-left mx-0 md:mx-auto relative z-10 py-[6%] px-3 md:px-[1rem]">
            <div className="mb-1">
              <Link to="/">
                <a
                  className="mb-1 text-white site-title tracking-[-0.03em] font-semibold   text-[2em]"
                  rel="home"
                >
                  title
                </a>
              </Link>
            </div>
            <p className="text-white font-medium">title</p>
          </div>
          <div onClick={toggleModal}>
            {modal ? (
              <MdClose className="w-14 h-14 text-white md:hidden" />
            ) : (
              <MdMenu className="w-14 h-14 text-white md:hidden" />
            )}
          </div>
        </div>
      </div>
      <header className="w-full py-2 hidden md:block">
        <nav
          className="
    flex flex-wrap
    items-center
    justify-between
    max-w-[1100px] mx-auto
    
    py-4
    md:py-0
    
    text-lg 
    text-white
  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div
            className="hidden w-full md:flex md:items-center md:w-auto"
            id="menu"
          >
            <ul
              className="
        pt-4
        text-base text-gray-700
        md:flex
        md:justify-between 
        md:pt-0"
            >
              <li>
                <Link to="/">
                  <a
                    className={`header-link ${
                      checkLocation("/") ? "text-gray-300" : "text-white"
                    }`}
                    href="#"
                  >
                    HOME
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/about-me">
                  <a
                    className={`header-link ${
                      checkLocation("/about-me")
                        ? "text-gray-300"
                        : "text-white"
                    }`}
                    href="#"
                  >
                    ABOUT ME
                  </a>
                </Link>
              </li>
              <li>
                <div className="dropdown group inline  relative cursor-pointer">
                  <a
                    className={`header-link group-hover:text-white/80 ${
                      checkLocation("/services")
                        ? "text-gray-300"
                        : "text-white"
                    }`}
                  >
                    SERVICES
                  </a>
                  <div className="dropdown-menu top-7 absolute hidden h-auto flex pt-4 group-hover:block  transition-all max-h-screen ease-out duration-300 ">
                    <ul className=" block w-full bg-black shadow p-8">
                      <div>
                        <li
                          id="menu-item-89"
                          className="menu-item menu-item-89"
                        >
                          <Link to="/about-me">
                            <a>test</a>
                          </Link>
                        </li>
                        <li
                          id="menu-item-96"
                          className="menu-item menu-item-96"
                        >
                          <Link to="/about-me">
                            <a>test</a>
                          </Link>
                        </li>
                        <li
                          id="menu-item-97"
                          className="menu-item menu-item-97"
                        >
                          <Link to="/about-me">
                            <a>test</a>
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/paragraphs">
                  <a
                    className={`header-link ${
                      checkLocation("/paragraphs")
                        ? "text-gray-300"
                        : "text-white"
                    }`}
                    href="#"
                  >
                    PARAGRAPHS
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/contact-me">
                  <a
                    className={`header-link ${
                      checkLocation("/contact-me")
                        ? "text-gray-300"
                        : "text-white"
                    }`}
                  >
                    CONTACT
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* monile nav */}
      {modal ? (
        <nav
          id="site-navigation"
          className="main-navigation open bg-black text-white p-4"
        >
          <div className="menu-menu-1-container">
            <ul id="menu-menu-1" className="menu">
              <li
                id="menu-item-93"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-93"
              >
                <Link to="/">
                  <a aria-current="page">HOME</a>
                </Link>
              </li>
              <li
                id="menu-item-88"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-88"
              >
                <Link to="/about-me">
                  <a>ABOUT ME</a>
                </Link>
              </li>
              <li id="menu-item-292" className="menu-item ">
                <div className="flex justify-between items-center">
                  <a>SERVICES</a>
                  <div onClick={toggleLinkModal}>
                    {linkModal ? (
                      <FaMinus className="w-4 h-4 text-white" />
                    ) : (
                      <FaPlus className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>
                {linkModal ? (
                  <ul className="sub-menu indent-2">
                    <li
                      id="menu-item-89"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-89"
                    >
                      <Link to="/about-me">
                        <a>test</a>
                      </Link>
                    </li>
                    <li
                      id="menu-item-90"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-90"
                    >
                      <Link to="/about-me">
                        <a>test</a>
                      </Link>
                    </li>
                    <li
                      id="menu-item-91"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-91"
                    >
                      <Link to="/about-me">
                        <a>test</a>
                      </Link>
                    </li>
                    <li
                      id="menu-item-92"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-92"
                    >
                      <Link to="/about-me">
                         <a>test</a>
                      </Link>
                     
                    </li>
                    <li
                      id="menu-item-94"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-94"
                    >
                      <Link to="/about-me">
                        <a>test</a>
                      </Link>
                    </li>
                    <li
                      id="menu-item-95"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-95"
                    >
                      <Link to="/about-me">
                        <a>test</a>
                      </Link>
                    </li>
                    <li
                      id="menu-item-96"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-96"
                    >
                     <Link to="/about-me">
                        <a>test</a>
                      </Link>
                    </li>
                    <li
                      id="menu-item-97"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-97"
                    >
                      <Link to="/about-me">
                        <a>test</a>
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>
              <li
                id="menu-item-98"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-98"
              >
                <Link to="/paragraphs">
                  <a>PARAGRAPHS</a>
                </Link>
              </li>
              <li
                id="menu-item-291"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-291"
              >
                <Link to="/contact-me">
                  <a>CONTACT</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : null}

      {/* end */}
      <div className="bg-white">
        <div className="md:max-w-[1100px] mx-auto bg-white   max-w-[95vw] h-28">
          <h1 className="md:float-left text-center md:text-left mx-auto mb-0 font-light py-[3%]  px-1 md:px-[1rem] text-2xl md:text-[2.5em] text-black break-words">
            {title.toUpperCase()}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
