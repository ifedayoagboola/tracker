import React from "react";
import styled from "styled-components";
import { Button } from "../globalStyles";

const Contact = () => {
  return (
    <>
      <Form>
        <h2>Talk to us</h2>
        <p>
          Do you have anything you want to bring to our notice? We are only some
          texts away. Kindly fiil out the form below to reach out now.
        </p>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone" />
          <textarea
            name=""
            id=""
            cols="90"
            rows="3"
            placeholder="Message"
          ></textarea>
        </form>
        <Button>Send</Button>
      </Form>
    </>
  );
};
const Form = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 100;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  text-align: left;
  h2 {
    color: #0f7173;
  }
  h2,
  p {
    padding: 0.5rem 3rem;
    @media screen and (max-width: 768px) {
      padding: 0.5rem 1rem;
    }
  }
  input {
    padding: 0 1rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #f57f55;
    width: 80%;
    margin: 0 3rem;
    @media screen and (max-width: 768px) {
      width: 80%;
      margin-left: 0;
    }
  }
  textarea {
    width: 80%;
    margin: 0 3rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #f57f55;
    outline: none;
    font-size: 1.2rem;
    padding: 0 1rem;
    overflow: hidden;
    max-width: 100%;
    ::placeholder {
      font-size: 0.9rem;
    }
    @media screen and (max-width: 768px) {
      width: 80%;
      margin-left: 0;
    }
  }
`;
export default Contact;
