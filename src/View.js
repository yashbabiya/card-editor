import React, { useState, createContext } from "react";
import Insta from "./Insta";
import "./styles.css";
import { test } from "./Edit";
const st = {
  background: "rgb(13, 20, 20)"
};
const d = {
  background: "rgb(199, 193, 831)"
};
function View(props) {
  let [sty, setsty] = useState(st);
  let [dk, setdk] = useState(0);
  function light() {
    setsty(d);
    setdk(0);
  }
  function dark() {
    setsty(st);
    setdk(1);
  }
  return (
    <div className="View" style={sty}>
      <button onClick={light} id="tl">
        {" "}
      </button>
      <button onClick={dark} id="td">
        {" "}
      </button>
      <Insta name={props.name} url={props.url} des={props.dex} thm={dk} />
    </div>
  );
}
export default View;
