import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import details from "../data/trakingDetails";
import axios from "axios";
import TrackingDetails from "./TrackingDetails";

const Tracker = () => {
  const [input, setInput] = useState();
  const [result, setResult] = useState(null);
  const trackingInput = (e) => {
    setInput(e.target.value);
  };

  const setDetailsHandler = () => {
    const detail = details.find((d) => d._id === input);
    setResult(detail);
  };

  return (
    <TrackId>
      <input
        onChange={trackingInput}
        type="String"
        placeholder="Input tracking ID"
      />

      <Button onClick={setDetailsHandler}>Track Now</Button>
      {result ? (
        <TrackingDetails
          input={input}
          setInput={setInput}
          result={result}
          setResult={setResult}
          detais={details}
        />
      ) : (
        ""
      )}
    </TrackId>
  );
};
const TrackId = styled.div`
  input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #f57f55;
  }
`;
const Button = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  margin: 1rem 0;
  border: 2px solid #f57f55;
  background-color: #f57f55;
  color: white;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(0.92);
  }
`;
export default Tracker;
