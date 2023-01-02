import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextBox(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };
  const handleSpeakClick = () => {
    let msg= new SpeechSynthesisUtterance();
    msg.text=text;
    window.speechSynthesis.speak(msg);
  };
  const handleOnChange = (ev) => {
    setText(ev.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpeakClick}>
          Speak
        </button>
      </div>
      <div className="container my-2">
        <h3>Your Text Summary</h3>
        <p>
          <b>
            {text.split(" ").length} words and {text.length} char
          </b>
        </p>
        <p>
          <b> {0.008 * text.split(" ").length} Minutes read </b>
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
TextBox.prototype = {
  heading: PropTypes.string.isRequired,
};
TextBox.defaultProps = {
  heading: "Enter your heading",
};
