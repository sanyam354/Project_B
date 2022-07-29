import React from "react";
import { allVotes } from "./data";

const LeaderBoard = () => {
  const result = [];
  allVotes.forEach(function (a) {
    if (!this[a.option]) {
      this[a.option] = { option: a.option, points: 0 };
      result.push(this[a.option]);
    }
    this[a.option].points += a.points;
  }, Object.create(null));
  const newResult = result?.sort((a, b) => (a.points > b.points ? -1 : 1));

  return (
    <>
      <div className="box_2">
        <h2>LeaderBoard</h2>

        <ol>
          {newResult.map((e, key) => (
            <li className="list_1" key={`UniqueId${key}`}>
              <div>
                <span className="label">
                  #{key + 1} {e.option}
                </span>
              </div>
              <div>
                <span className="label">{e.points} &nbsp;Points</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default LeaderBoard;
