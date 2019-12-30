import React from "react";
import Text from "./Text";

const audio = props => {
  return (
    <div className="audio">
      <div className="audio__details">
        <div className="audio__title">
          <Text element="h3">{props.title}</Text>
        </div>
        <div className="audio__download">
          <Text element="a" href={props.src}>Download</Text>
        </div>
      </div>
      <div>
        <audio className="audio__controller" controls>
          <source src={props.src} type={`audio/${props.type}`} />
        </audio>
      </div>
    </div>
  );
};

export default audio;
