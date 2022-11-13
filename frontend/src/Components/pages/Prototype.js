import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Graph from "../graph";
import Button from "react-bootstrap/Button";

const GraphWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Prototype = () => {
  const [data, setData] = useState({});

  const onClick = () => {
    axios.get("http://localhost:5000/all_data").then((response) => {
      setData(response.data);
    });
  };

  console.log(data);

  return (
    <React.Fragment>
      <section className="content-container">
        <div>
          <GraphWrapper>
            <Graph />
          </GraphWrapper>
          <Button onClick={() => onClick()}>Test</Button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Prototype;
