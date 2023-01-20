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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [rowIndex, setRowIndex] = useState(0);

  const handleButtonStatus = () => {
    if (buttonStatus === false) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  };

  const fetching = () => {
    let count = 2;

    if (rowIndex > 2) {
      count = rowIndex;
    }

    const id = setInterval(() => {
      console.log(count);
      axios
        .post(`http://localhost:5000/test`, { rowIndex: count })
        .then((response) => {
          // If we get a response that there are no usable excel entries, break out of interval!
          console.log(response.data);
          count = count + 1;
          setRowIndex(count);
          setData((currentData) => [...currentData, response.data.data]);
        });
    }, 5000);
    setIntervalId(id);

    if (!data) {
      clearInterval(id);
    }
  };

  const handleRefresh = () => {
    clearInterval(intervalId);
    setData([]);
    setRowIndex(2);
    setButtonStatus(false);
  };

  useEffect(() => {
    if (buttonStatus) {
      fetching();
    } else {
      clearInterval(intervalId);
    }
  }, [buttonStatus]);

  console.log(buttonStatus);
  console.log(data);

  return (
    <React.Fragment>
      <section className="content-container">
        <div>
          <GraphWrapper>
            <Graph graphData={data} />
          </GraphWrapper>
          <Button onClick={() => handleButtonStatus()}>Get data</Button>
          <Button onClick={() => handleRefresh()}>Refresh Graphs</Button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Prototype;
