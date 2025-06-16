import React from "react";
import Hero from "./components/Hero";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import HomeAbout from "./components/HomeAbout";
import HomeExperience from "./components/HomeExperience";
import HomeProjectsHero from "./components/HomeProjectsHero";
import HomeProjects from "./components/HomeProjects";
import HomeContact from "./components/HomeContact";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Navbar />
      <div id="content">
        <main className="py-0 px-[150px] w-full max-w-[1600px] min-h-[100vh]">
          <Hero />
          {/*<HomeAbout />*/}
          <HomeExperience />
          <HomeProjectsHero />
          <HomeProjects />
          <HomeContact />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
