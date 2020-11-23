import React, { useState } from "react";
import "./styles.css";
import Edit from "./Edit";
import View from "./View";

export default function App() {
  let [n, setn] = useState("");
  let [u, setu] = useState();
  let [d, setd] = useState("");

  function addnote(a) {
    setn(a.nm);
    setu(a.url);
    setd(a.dex);
  }
  return (
    <div className="App">
      <div className="rect">
        <Edit passnote={addnote} />
        <hr />
        <View name={n} url={u} dex={d} />
      </div>
    </div>
  );
}
