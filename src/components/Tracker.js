import React, { useState } from "react";
import styled from "styled-components";

const Tracker = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    return (window.location.href = `/${inputValue}`);
  };

  return (
    <TrackId>
      <form>
        <input
          id="trackingId"
          name="trackingId"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="button" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </form>
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
const Button = styled.button`
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  margin: 1rem 0;
  width: 100%;
  border: 2px solid #f57f55;
  background-color: #f57f55;
  color: white;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(0.92);
  }
`;
export default Tracker;
