import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import MainBody from "../components/MainBody";

const AboutMe = () => {
  return (
    <>
      <Header
        title="About Me"
        bgImg=""
      />
      <MainBody>
        <h5 style={{ textAlign: "justify" }} className="text-xl">
          <strong>ABOUT&nbsp;ME&nbsp;</strong>
        </h5>
        <strong>&nbsp;</strong>
        <p style={{ textAlign: "justify" }}>
          test <strong>test</strong>
          test
        </p>
        <p style={{ textAlign: "justify" }}>
          test
        </p>
        <p style={{ textAlign: "justify" }}>
          test
        </p>
        test{" "}
        <strong>
          test
        </strong>{" "}
        test
        <h5>
          <strong>test</strong>
        </h5>
        <p style={{ textAlign: "justify" }}>
          test
        </p>
        test
        <p style={{ textAlign: "justify" }}>
          test
        </p>
        <p>
          test
        </p>
        <div className="about-footer bg-black/40 bg-blend-overlay">
          <div className="text-center flex flex-col justify-between items-center">
            <div className="about-header mb-[15px]  ">
              Heading
            </div>
            <div className="mb-4 px-5">
              <div>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ textAlign: "center" }}>
                    <span
                      style={{ lineHeight: "1.5", backgroundColor: "#f2c314" }}
                    >
                      test
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "center" }} />
              </div>
            </div>
            <div className="mb-4 col-container space-y-3">
              <div className="w-40 h-14 bg-[#f2c314] cursor-pointer group row-container">
                <Link to="/">
                  <p className="text-3xl font-bold text-white group-hover:text-link-color transition-all duration-150 ease-out">
                     button
                  </p>
                </Link>
              </div>

              <div className="w-48 h-14 bg-black  cursor-pointer group row-container">
                <Link to="/paragraphs">
                  <p className="text-3xl font-bold text-white  transition-all duration-150 ease-out">
                    Paragraphs
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MainBody>
    </>
  );
};

export default AboutMe;
