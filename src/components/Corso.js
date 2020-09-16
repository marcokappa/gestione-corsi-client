import React from "react";

const Corso = (props) => {
  return <h1>{props.match.params.id}</h1>;
};

//

export default Corso;
