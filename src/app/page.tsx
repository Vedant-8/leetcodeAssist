import React from "react";
import DailyQ from "@/components/dailyQ";
import SolvedQ from "@/components/solvedQ";
import UnsolvedQ from "@/components/unsolvedQ";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const home = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="container">
        <div className="question">
          <DailyQ />
        </div>
        <div className="question">
          <SolvedQ />
        </div>
        <div className="question">
          <UnsolvedQ />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default home;
