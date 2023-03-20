import React, { useState, useEffect } from "react";

const MyCard = ({ data }) => {
  const [lastItem, setLastItem] = useState([]);

  useEffect(() => {
    if (data.length) {
      setLastItem(data.slice(-1)[0]);
    } else {
      setLastItem([]);
    }
  }, [data]);

  return (
    <div
      class="card"
      style={{
        width: "400px",
        height: "450px",
        overflowY: "auto",
        maxHeight: "450px",
      }}
    >
      <div class="card-body">
        <div class="card-header">
          <h5 class="card-title">Current Process Variables</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <strong>Air Temperature (°C): </strong>
            {!lastItem.length || !lastItem[2] ? "None" : lastItem[3]}
          </li>
          <li class="list-group-item">
            <strong>Cooling Jacket Temperature (°C):</strong>{" "}
            {!lastItem.length || !lastItem[3] ? "None" : lastItem[4]}
          </li>
          <li class="list-group-item">
            <strong>Cooling Rate (Liters/Minute):</strong>{" "}
            {!lastItem.length || !lastItem[4] ? "None" : lastItem[5]}
          </li>
          <li class="list-group-item">
            <strong>Cooling_line_1:</strong>{" "}
            {!lastItem.length || !lastItem[5] ? "None" : lastItem[6]}
          </li>
          <li class="list-group-item">
            <strong>Cooling_line_2:</strong>{" "}
            {!lastItem.length || !lastItem[6] ? "None" : lastItem[7]}
          </li>
          <li class="list-group-item">
            <strong>Cooling_line_3:</strong>{" "}
            {!lastItem.length || !lastItem[7] ? "None" : lastItem[8]}
          </li>
          <li class="list-group-item">
            <strong>Total Flowrate (Liters):</strong>{" "}
            {!lastItem.length || !lastItem[8] ? "None" : lastItem[9]}
          </li>
          <li class="list-group-item">
            <strong>Moving Average (Liters):</strong>{" "}
            {!lastItem.length || !lastItem[9] ? "None" : lastItem[10]}
          </li>
          <li class="list-group-item">
            <strong>Growth State:</strong>{" "}
            {!lastItem.length || !lastItem[10] ? "None" : lastItem[11]}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyCard;
