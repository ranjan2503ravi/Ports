import React from "react";
import { useParams } from "react-router-dom";

const Params = () => {
  const { ca } = useParams();

  return (
    <div>
      <h2>Category Page</h2>
      <p>You selected: {ca}</p>
    </div>
  );
};

export default Params;
