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

const Home: NextPage = () => {
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
