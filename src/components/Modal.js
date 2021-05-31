import React from "react";
import styled from "styled-components";

const Modal = ({ res, iserror }) => {
  if (!iserror) {
    return (
      <Feed>
        <p>{res}</p>
      </Feed>
    );
  } else if (iserror) {
    return (
      <Feed errStyle={true}>
        <p>{res}</p>
      </Feed>
    );
  }
};
const Feed = styled.div`
  max-height: 150px;
  padding: 1.5rem;
  width: 100%;
  margin: 0 auto;
  background: ${({ errStyle }) => (errStyle ? "#F57F55" : "#0F7173")};
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  /* display: flex;
  align-self: center;
  justify-self: center; */
`;
export default Modal;
