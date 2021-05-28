import axios from "axios";
import React, { useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import { Button } from "../globalStyles";
import Modal from "../components/Modal";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.emailAddress) {
    errors.emailAddress = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)
  ) {
    errors.emailAddress = "Invalid email address";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone number is required";
  }
  if (!values.message) {
    errors.message = "message cannot be empty";
  }
  return errors;
};

const Contact = () => {
  const url = "https://admin.movebot.ng/prod_sup/api/LandingPage/TalkToUs";
  const [errorRes, setErrorRes] = useState();
  const [successRes, setSuccessRes] = useState();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      emailAddress: "",
      phoneNumber: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      values = {
        ...values,
        countryCode: "NG",
      };
      setLoading(true);
      axios
        .post(url, values)
        .then((res) => {
          setSuccessRes(res.data);
        })
        .catch((error) => {
          setErrorRes(error.response.data.Message);
          // console.log(error.response.data.Message);
        });
      setLoading(false);
    },
  });
  return (
    <>
      <Form>
        {successRes ? (
          <Modal successRes={successRes} />
        ) : errorRes ? (
          <Modal errorRes={errorRes} />
        ) : (
          ""
        )}
        <h2>Talk to us</h2>
        <p>
          Do you have anything you want to bring to our notice? We are only some
          texts away. Kindly fiil out the form below to reach out now.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <input
            placeholder="Name"
            type="text"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <ErrorDiv>{formik.errors.name}</ErrorDiv>
          ) : null}
          <input
            placeholder="Email"
            type="email"
            name="emailAddress"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.emailAddress}
          />
          {formik.touched.emailAddress && formik.errors.emailAddress ? (
            <ErrorDiv>{formik.errors.emailAddress}</ErrorDiv>
          ) : null}
          <input
            placeholder="Phone"
            type="string"
            name="phoneNumber"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <ErrorDiv>{formik.errors.phoneNumber}</ErrorDiv>
          ) : null}
          <textarea
            placeholder="Message"
            cols="90"
            rows="3"
            type="text"
            name="message"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.message}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <ErrorDiv>{formik.errors.message}</ErrorDiv>
          ) : null}

          <Button type="submit">Send</Button>
        </form>
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
const ErrorDiv = styled.div`
  color: red;
  text-align: center;
`;
export default Contact;
