import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-white p-4 md:p-[2rem] mb-6">
      <h4 className="text-[#353535] text-2xl font-semibold clear-both mt-[0.2rem] mb-[0.8rem]">
        Quick Links
      </h4>
      <ul className="flex space-y-2 flex-col items-start justify-center">
        <li className="page_item page-item-11">
          <Link to="/about-me">
            <a>ABOUT ME</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
