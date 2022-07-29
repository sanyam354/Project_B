import React from "react";
import "./index.css";
import { allOptions } from "./data";

const VootingBooth = () => {
  return (
    <>
      <form className="box_1">
        <h2>Voting Booth</h2>
        <div className="input_box_1">
          <label className=" label">Your name</label>
          <input type="text" id="voter" required={true} />
        </div>
        <div className="input_box_1">
          <label className="label">points(1-100)</label>
          <input type="Number" id="points" required={true} />
        </div>
        <div className="input_box_1">
          <label className="label">Options</label>
          <select id="options">
            {allOptions.map((e, key) => (
              <option value={e} key={`Sno.${key}`}>
                {e}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" id="submitButton">
          Give points!
        </button>
      </form>
    </>
  );
};

export default VootingBooth;
