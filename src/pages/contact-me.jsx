import React from "react";
import Header from "../components/Header";
import MainBody from "../components/MainBody";

const ContactMe = () => {
  return (
    <>
      <Header
        title="Contact me"
      />
      <MainBody>
          <div className="flex flex-col justify-center items-start space-y-5">
               <p>Send me a Mail:</p>
        <a href="mailto:email@gmail.com" className="text-link-color hover:text-link-color/80">Mail me!</a>
          </div>
       
      </MainBody>
    </>
  );
};

export default ContactMe;
