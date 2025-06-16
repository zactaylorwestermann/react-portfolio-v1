import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex justify-center flex-col items-start min-h-[100vh] h-[100vh] p-0 ml-[280px]"
    >
      <div className="flex justify-center items-center">
        <h1 className="mb-[16px] ml-[4px] text-sm">Hi, my name is</h1>
      </div>
      <div className="flex justify-center items-center p-1">
        <h2 className="mb-2 text-7xl">Zac Taylor-Westermann.</h2>
      </div>
      <div className="flex justify-center items-center p-1">
        <h3 className="m-0 text-7xl">I create for the Web.</h3>
      </div>
      <div className="flex justify-center items-center p-1">
        <p className="my-[20px] max-w-[580px] ">
          I'm a software developer and UX/UI designer specialising in making
          interesting digital experiences.
        </p>
      </div>
      <div className="flex justify-center items-center p-1">
        <a
          className="mt-[16px] border rounded-lg text-sm py-[16px] px-[24px] relative"
          href=""
        >
          My Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
