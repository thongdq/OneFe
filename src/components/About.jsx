import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ut quo
          soluta provident minus nulla totam illum vel corrupti neque ea et rem
          iusto culpa magnam, quaerat architecto sint ratione!
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          hic fugiat, cupiditate quidem autem facilis odit expedita aspernatur.
          Animi quis dolorum magni a amet excepturi vitae illum rem enim facere.
        </p>
      </div>
    </div>
  );
};

export default About;
