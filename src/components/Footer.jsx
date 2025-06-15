import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center h-auto min-h-[100px] p-[15px] text-center">
      <div className="m-0 min-h-full text-xl ">
        <ul className="flex items-center p-0 m-0">
          <li>
            <a
              className="p-[10px]"
              href="https://www.linkedin.com/in/zactaylorwestermann/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a className="p-[10px]" href="https://www.github.com/">
              Github
            </a>
          </li>
        </ul>
      </div>
      <div className="text-xs">
        <a className="p-[10px]" href="https://www.github.com">
          <div>Designed & Built by Zac Taylor-Westermann</div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
