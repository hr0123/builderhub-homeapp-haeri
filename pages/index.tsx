import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import {
  HeroContainer,
  ProblemContainer,
  SolutionContainer,
  StrengthContainer,
  MeritContainer,
  ClientListContainer,
  EndingContainer,
} from "../src/Views";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <>
      <HeroContainer />
      <ProblemContainer />
      <SolutionContainer />
      <StrengthContainer />
      <MeritContainer />
      <ClientListContainer />
      <EndingContainer />
    </>
  );
};

export default Home;
