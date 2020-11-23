import React, { useState } from "react";
import "./styles.css";

export default function Edit(props) {
  let [a, seta] = useState({
    nm: "",
    url: null,
    dex: ""
  });
  function write(s) {
    const { value, name } = s.target;
    seta((prevdata) => {
      return {
        ...prevdata,
        [name]: value
      };
    });
  }
  function sub() {
    props.passnote(a);
    seta({
      nm: "",
      url: "",
      dex: ""
    });
  }
  return (
    <div className="Edit">
      <div className="inedit">
        <span>Name</span>
        <br />
        <input id="nm" onChange={write} value={a.nm} name="nm" />
        <br />
        <span>Image</span>
        <br />
        <input id="ul" onChange={write} value={a.url} name="url" />
        <br />
        <span>Description</span>
        <br />
        <textarea id="ds" onChange={write} value={a.dex} name="dex" />
        <br />
        <button onClick={sub}>Create</button>
      </div>
    </div>
  );
}
