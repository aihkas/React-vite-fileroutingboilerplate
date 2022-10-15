import React, { useState } from "react";
import Header from "../components/Header";
import MainBody from "../components/MainBody";
import ParagraphCard from "../components/ParagraphCard";

const Paragraphs = () => {
  const [paragraphs, setParagraphs] = useState([
    "test1",

    "test2",

    "test3",
    "test4",

    "test5",

    "test6",

    "test7",

    "test8 unicode char 💕",

     "test9",
     
    "test10",

   


  ]);

  return (
    <>
      <Header
        title="Paragraphs"
        bgImg=""
      />
      <MainBody>
        <div className="grid grid-cols-1 gap-y-2">
          {paragraphs.map((paragraph, index) => (
            <ParagraphCard text={paragraph} img={index + 1} />
          ))}
        </div>
      </MainBody>
    </>
  );
};

export default Paragraphs;
