import React from "react";

const HomeAbout = () => {
  return (
    <section
      id="about"
      className="max-w-[700px] py-[100px] justify-center items-center flex w-full"
    >
      <h2 className="flex relative items-center mt-[10px] mb[40px] text-3xl">
        About Me
      </h2>
      <div className="grid grid-cols-[(3fr,2fr)] gap-[50px]"></div>
    </section>
  );
};

export default HomeAbout;
