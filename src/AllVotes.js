import React from "react";
import { allVotes } from "./data";

const AllVotes = () => {
  const timeConverter = (time) => {
    var date = new Date(time);
    date = date.toLocaleString();
    return date;
  };
  return (
    <>
      <h2>All Votes</h2>
      <table className="mainTable">
        <thead>
          <tr>
            <th className="headColor">Date</th>
            <th className="headColor">Voter</th>
            <th className="headColor">Option</th>
            <th className="headColor">Point</th>
          </tr>
        </thead>
        <tbody>
          {allVotes.map((e, key) => (
            <tr key={`Id${key}`}>
              <td className="label table-data">{timeConverter(e.timestamp)}</td>
              <td className="label table-data">
                {e.voter ? e.voter : "anonymous"}
              </td>
              <td className="label table-data">{e.option}</td>
              <td className="label table-data">{e.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AllVotes;
