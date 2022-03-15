import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import About from "../src/components/About";
import Courses from "../src/components/Courses";
import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import Portfolio from "../src/components/Portfolio";
import Skills from "../src/components/Skills";

const Home: NextPage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio - Samir Salim</title>
      </Head>
      <Menu
        toggle={toggle}
        onClick={() => {
          setToggle(!toggle);
        }}
      />
      <Header showInMobile={toggle} headerToggle={setToggle} />
      <About />
      <Skills />
      <Courses />
      <Portfolio />
    </div>
  );
};

export default Home;
