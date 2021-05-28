import React, { useState } from "react";
import { useFormik } from "formik";
import { Container } from "../globalStyles";
import { Button } from "../globalStyles";
import styled from "styled-components";
import Modal from "../components/Modal";
import img from "../assets/partner.jpg";
import axios from "axios";

const validate = (values) => {
  const errors = {};

  if (!values.companyName) {
    errors.companyName = "Required";
  } else if (values.companyName.length > 15) {
    errors.companyName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.emailAddress) {
    errors.emailAddress = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)
  ) {
    errors.emailAddress = "Invalid email address";
  }

  return errors;
};

const Partnership = () => {
  const url = "https://admin.movebot.ng/prod_sup/api/LandingPage/PartnerWithUs";
  const [errorRes, setErrorRes] = useState();
  const [successRes, setSuccessRes] = useState();

  const formik = useFormik({
    initialValues: {
      companyName: "",
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      countryCode: "",
      jobTitle: "",
      hasCACNo: true,
      memo: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      },
    },
    validate,
    onSubmit: (values) => {
      values = {
        ...values,
      };
      alert(JSON.stringify(values, null, 2));
      axios
        .post(url, values)
        .then((res) => {
          setSuccessRes(res.data);
        })
        .catch((error) => {
          setErrorRes(error.response.data.Message);
          // console.log(error.response.data.Message);
        });
    },
  });
  return (
    <Bg>
      <Bg2>
        <Container>
          <Wrapper>
            <Content>
              <h1>Partner with us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus perspiciatis ipsa delectus voluptas similique in
                consequatur debitis ex cumque eligendi.
              </p>
            </Content>
            <FormData>
              {successRes ? (
                <Modal successRes={successRes} />
              ) : errorRes ? (
                <Modal errorRes={errorRes} />
              ) : (
                ""
              )}
              <form onSubmit={formik.handleSubmit}>
                <input
                  placeholder="Company name"
                  id="companyName"
                  name="companyName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.companyName}
                />
                {formik.touched.companyName && formik.errors.companyName ? (
                  <ErrorDiv>{formik.errors.companyName}</ErrorDiv>
                ) : null}
                <input
                  placeholder="firstName"
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <ErrorDiv>{formik.errors.firstName}</ErrorDiv>
                ) : null}
                <input
                  placeholder="LastName"
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <ErrorDiv>{formik.errors.lastName}</ErrorDiv>
                ) : null}
                <input
                  placeholder="Email"
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emailAddress}
                />
                {formik.touched.emailAddress && formik.errors.emailAddress ? (
                  <ErrorDiv>{formik.errors.emailAddress}</ErrorDiv>
                ) : null}
                <input
                  placeholder="Phone"
                  id="phoneNumber"
                  name="phoneNumber"
                  type="string"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <ErrorDiv>{formik.errors.phoneNumber}</ErrorDiv>
                ) : null}
                <input
                  placeholder="Country Code"
                  id="countryCode"
                  name="countryCode"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.countryCode}
                />
                {formik.touched.countryCode && formik.errors.countryCode ? (
                  <ErrorDiv>{formik.errors.countryCode}</ErrorDiv>
                ) : null}
                <input
                  placeholder="Job Title"
                  id="jobTitle"
                  name="jobTitle"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.jobTitle}
                />
                {formik.touched.jobTitle && formik.errors.jobTitle ? (
                  <ErrorDiv>{formik.errors.jobTitle}</ErrorDiv>
                ) : null}
                <Select>
                  <p>
                    Is the company name above duly registered with the
                    government authority e.g CAC?
                  </p>
                  <select name="hasCACNo" id="hasCACNo" type="boolean">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </Select>
                {formik.touched.hasCACNo && formik.errors.hasCACNo ? (
                  <ErrorDiv>{formik.errors.hasCACNo}</ErrorDiv>
                ) : null}
                <textarea
                  placeholder="Message"
                  cols="90"
                  rows="2"
                  type="text"
                  name="message"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <ErrorDiv>{formik.errors.message}</ErrorDiv>
                ) : null}
                <input
                  placeholder="Street"
                  id="address"
                  name="address"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address.street}
                />
                {formik.touched.street && formik.errors.street ? (
                  <ErrorDiv>{formik.errors.street}</ErrorDiv>
                ) : null}
                <input
                  placeholder="City"
                  id="address"
                  name="address"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address.city}
                />
                {formik.touched.city && formik.errors.city ? (
                  <ErrorDiv>{formik.errors.city}</ErrorDiv>
                ) : null}
                <input
                  placeholder="State"
                  id="state"
                  name="state"
                  type="string"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                />
                {formik.touched.state && formik.errors.state ? (
                  <ErrorDiv>{formik.errors.state}</ErrorDiv>
                ) : null}
                <input
                  placeholder="Country"
                  id="country"
                  name="country"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                />
                {formik.touched.country && formik.errors.country ? (
                  <ErrorDiv>{formik.errors.country}</ErrorDiv>
                ) : null}

                <Button type="submit">Submit</Button>
              </form>
            </FormData>
          </Wrapper>
        </Container>
      </Bg2>
    </Bg>
  );
};
const Bg = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
`;
const Bg2 = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background: rgba(0, 13, 26, 0.5);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`;
const Content = styled.div`
  padding: 1rem 3rem;
  flex: 1;
  h1 {
    color: #fff;
  }
  p {
    color: #faf3f3;
  }
`;
const Select = styled.div`
  padding: 1rem;
  margin: 0 3rem;
  display: flex;
  option {
    padding: 2rem;
  }
  p {
    color: #fff;
    margin-right: 1rem;
  }
`;
const FormData = styled.div`
  input {
    color: #fff;
    background: transparent;
    padding: 0 1rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #f57f55;
    width: 80%;
    margin: 0 3rem;
    ::placeholder {
      color: #fff;
    }
    @media screen and (max-width: 768px) {
      width: 80%;
      margin-left: 0;
    }
  }
  textarea {
    background: transparent;
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
    color: #fff;
    ::placeholder {
      font-size: 0.9rem;
      color: #fff;
    }
    @media screen and (max-width: 768px) {
      width: 80%;
      margin-left: 0;
    }
  }
  button {
    margin-left: 3rem;
  }
`;
const ErrorDiv = styled.div`
  color: red;
  text-align: center;
`;

export default Partnership;
