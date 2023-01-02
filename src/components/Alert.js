import React from "react";
import PropTypes from 'prop-types'

export default function Alert(props) {
    const capitalize = (word) =>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && 
    <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}
Alert.prototype={
    alert: PropTypes.string.isRequired
}
Alert.defaultProps={
    alert: "This is Alert",
}