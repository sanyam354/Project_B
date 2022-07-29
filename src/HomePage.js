import React from "react";
import "./index.css";
import VootingBooth from "./VotingBooth";
import LeaderBoard from "./LeaderBoard";
import AllVotes from "./AllVotes";

const HomePage = () => {
  return (
    <>
      <section className="section_1">
        <VootingBooth />
        <LeaderBoard />
      </section>
      <div className="section_2">
        <AllVotes />
      </div>
    </>
  );
};

export default HomePage;
