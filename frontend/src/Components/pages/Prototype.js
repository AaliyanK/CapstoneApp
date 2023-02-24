import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Graph from "../graph";
import MyCard from "../card";
import { ProgressBar } from "react-loader-spinner";
import Button from "react-bootstrap/Button";

const GraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-right: 400px;
`;

const GraphButtonWrapper = styled.div`
  margin-top: 100px;
`;

const Prototype = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [buttonStatus, setButtonStatus] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [rowIndex, setRowIndex] = useState(0);
  const [buttonText, setButtonText] = useState("Get Data");

  const handleButtonStatus = () => {
    if (buttonStatus === false) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
      clearInterval(intervalId);
    }
  };

  const fetching = () => {
    let count = 2;

    if (rowIndex > 2) {
      count = rowIndex;
    }

    const id = setInterval(() => {
      axios
        .post(`http://localhost:5000/test`, { rowIndex: count })
        .then((response) => {
          if (response.data.data.length !== 0) {
            count = count + 1; //remove this?
            setRowIndex(count);
            // setData((currentData) => [...currentData, response.data.data]);
            setData(response.data.data);
          }
        });
    }, 5000);
    setIntervalId(id);
  };

  const handleRefresh = () => {
    clearInterval(intervalId);
    setData([]);
    setRowIndex(2);
    setButtonStatus(false);
  };

  useEffect(() => {
    if (buttonStatus) {
      setLoading(true);
      fetching();
    } else {
      setLoading(false);
      clearInterval(intervalId);
    }
  }, [buttonStatus]);

  useEffect(() => {
    if (loading) {
      setButtonText("Finish Data Collection");
    }

    if (data.length && !loading) {
      setButtonText("Continue Data Collection");
    }

    if (!data.length && !loading) {
      setButtonText("Get Data");
    }
  }, [data, loading]);

  // console.log(data);

  return (
    <React.Fragment>
      <GraphButtonWrapper>
        <GraphWrapper>
          <Graph graphData={data} />
          <MyCard data={data} />
        </GraphWrapper>
        <ButtonWrapper>
          <Button onClick={() => handleButtonStatus()}>{buttonText}</Button>
          <Button onClick={() => handleRefresh()}>Refresh Graph</Button>
          {loading && (
            <ProgressBar
              height="60"
              width="60"
              borderColor="Black"
              barColor="Blue"
            />
          )}
        </ButtonWrapper>
      </GraphButtonWrapper>
    </React.Fragment>
  );
};

export default Prototype;
