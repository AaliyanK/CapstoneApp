import React from "react";
import styled from "styled-components";
import Graph from "../Components/graph";

const GraphWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HomePage = () => {
  return (
    <div>
      <GraphWrapper>
        <Graph />
      </GraphWrapper>
    </div>
  );
};

export default HomePage;
