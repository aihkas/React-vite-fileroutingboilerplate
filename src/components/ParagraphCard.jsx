import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ParagraphCard = ({ text, img }) => {
  return (
    <div className="w-full bg-[#EEEEEE]">
      <div className="row-container align-top w-full bg-[#E6E9EC]">
        <img
          src={`/images/${img}.jpeg`}  
          alt=""
          className="max-w-[27%] mb-4"
        />
      </div>
      <div className="px-8 py-2  border-l-4 border-[#A14C4C]">
        <FaQuoteLeft className="text-[70px] font-black text-[#dadada] inline-block text-left" />
        <p className="pagelayer-quote-content text-left break-words break text-[#050505]">
          <q>{text}</q>
        </p>
      </div>
    </div>
  );
};

export default ParagraphCard;
