import React from "react";
import { InputGroup } from "react-bootstrap";
export default function IconDisplay(props) {
  return (
    <InputGroup.Prepend>
      <InputGroup.Text>
        {" "}
        <i class={props.icon} aria-hidden="true"></i>
      </InputGroup.Text>
    </InputGroup.Prepend>
  );
}
