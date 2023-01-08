import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Graph from "../graph";
import Button from "react-bootstrap/Button";
import { io } from "socket.io-client";

const GraphWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Prototype = () => {
  const [data, setData] = useState({});
  const [socketInstance, setSocketInstance] = useState("");
  const [loading, setLoading] = useState(true);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [count, setCount] = useState(0);

  const socket = io("localhost:5000/", {
    transports: ["websocket", "polling"],
    cors: {
      origin: "http://localhost:3000/",
    },
  });

  const handleClick = () => {
    if (buttonStatus === false) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  };

  const onClick = () => {
    axios.get("http://localhost:5000/all_data").then((response) => {
      setData(response.data);
    });
  };

  // const buttonClick = () => {
  //   if (buttonStatus === false) {
  //     setButtonStatus(true);
  //   } else {
  //     setButtonStatus(false);
  //   }
  //   // To send to backend
  //   // socket.emit("sendSheetData", { count: 1 });
  //   setInterval(() => {
  //     socket.emit("recieveSheetData", count);
  //   }, [2000]);
  // };

  useEffect(() => {
    // This will be watching messages coming from backend

    if (buttonStatus === true) {
      socket.on("getSheetData", (data) => {
        console.log(data);
      });

      return function cleanup() {
        socket.disconnect();
      };
    }
  }, [socket, buttonStatus]);

  console.log(buttonStatus);

  // useEffect(() => {
  //   if (buttonStatus === true) {
  //     socket.on("recieveSheetData", (data) => {
  //       setCount(count + 1);
  //       console.log(data);
  //     });
  //   }
  // }, [buttonStatus, count, setCount]);

  // useEffect(() => {
  //   if (buttonStatus === true) {
  //     // const socket = io("localhost:5000/", {
  //     //   transports: ["websocket", "polling"],
  //     //   cors: {
  //     //     origin: "http://localhost:3000/",
  //     //   },
  //     // });

  //     setSocketInstance(socket);

  //     socket.on("getSheetData", (data) => {
  //       console.log(data);
  //     });

  //     setLoading(false);

  //     socket.on("disconnect", (data) => {
  //       console.log(data);
  //     });

  //     return function cleanup() {
  //       socket.disconnect();
  //     };
  //   }
  // }, [buttonStatus]);

  return (
    <React.Fragment>
      <section className="content-container">
        <div>
          <GraphWrapper>
            <Graph />
          </GraphWrapper>
          <Button onClick={() => handleClick()}>Test</Button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Prototype;
