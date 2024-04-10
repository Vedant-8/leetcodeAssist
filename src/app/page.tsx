import React from "react";
import DailyQ from "@/components/dailyQ";
import SolvedQ from "@/components/solvedQ";
import UnsolvedQ from "@/components/unsolvedQ";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const home = () => {
  return (
    <>
      <Navbar />
      <DailyQ />
      <SolvedQ />
      <UnsolvedQ />
      <Footer />
    </>
  );
};

export default home;
