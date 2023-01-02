import React, {useState} from "react";
import PropTypes from "prop-types";

export default function TextBox(props) {
    const handleUpClick = () => {
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (ev) => {
        setText(ev.target.value)
    }
    const [text, setText] = useState("Enter Text Here");
  return (
    <>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
    </>
  );
}
TextBox.prototype = {
  heading: PropTypes.string.isRequired
};
TextBox.defaultProps = {
  heading: "Enter your heading"
};
