import React from "react";
import styled from "styled-components";

const Modal = ({ errorRes, successRes }) => {
  if (successRes) {
    return (
      <Feed>
        <p>{successRes}</p>
      </Feed>
    );
  } else if (errorRes) {
    return (
      <Feed errStyle={true}>
        <p>{errorRes}</p>
      </Feed>
    );
  }
};
const Feed = styled.div`
  max-height: 150px;
  padding: 1.5rem;
  width: 100%;
  background: ${({ errStyle }) => (errStyle ? "#F57F55" : "#0F7173")};
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  align-self: center;
  justify-self: center;
`;
export default Modal;
