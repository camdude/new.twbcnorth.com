import React from "react";
import Button from "../FormElements/Button";
import Text from "./Text";

const card = props => {
  return (
    <div className="card">
      <Text element="h2">{props.heading}</Text>
      <div className="card__content">{props.children}</div>
      <div className="card__action">
        <Button to={props.link}>{props.btnText} &rarr;</Button>
      </div>
    </div>
  );
};

export default card;
