import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import details from "../data/trakingDetails";
import axios from "axios";

const Tracker = () => {
  const [input, setInput] = useState();
  const [detail, setDetail] = useState();
  const trackingInput = (e) => {
    setInput(e.target.value);
  };
  const detail = details.find((d) => d._id === input);
  const searchId = () => {
    setDetail(detail);
    console.log(detail);
  };

  return (
    <TrackId>
      <h1>{detail.name}</h1>
      <input
        onChange={trackingInput}
        type="String"
        placeholder="Input tracking ID"
      />

      <Button onClick={searchId}>Track Now</Button>
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
