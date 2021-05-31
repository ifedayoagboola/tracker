import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Container } from "../globalStyles";
import { Button } from "../globalStyles";
import styled from "styled-components";
import Modal from "../components/Modal";
import img from "../assets/partner.jpg";
import axios from "axios";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import base_url from "../api";

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
  const url = `${base_url}/LandingPage/PartnerWithUs`;
  const [res, setRes] = useState(null);
  const [err, setErr] = useState(false);
  const [fetchResults, setFetchResults] = useState();
  // const [fetchErr, setFetchErr] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    axios
      .get(`${base_url}/Resources/GetCountryCode?countryCodeOnly=true`)
      .then((res) => {
        setFetchResults(res.data);
        // console.log(res);
      })
      .catch((error) => {
        // console.log({ error });
        // setFetchErr(error?.response);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      companyName: "",
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      countryCode: "",
      jobTitle: "",
      hasCACNo: false,
      memo: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
    validate,
    onSubmit: (values) => {
      let {
        companyName,
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        countryCode,
        jobTitle,
        hasCACNo,
        memo,
      } = values;
      let payload = {
        companyName,
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        countryCode,
        jobTitle,
        hasCACNo,
        memo,
        address: {
          street: values.street,
          city: values.city,
          state: values.state,
          zipCode: values.zipCode,
          country: values.country,
        },
      };
      // alert(JSON.stringify(payload, null, 2));
      setLoader(true);
      setErr(false);
      axios
        .post(url, payload)
        .then((res) => {
          setRes(res.data.Message);
          // console.log(res);
          setLoader(false);
        })
        .catch((error) => {
          setRes(error?.response.data.Message);
          setErr(true);
          // console.log({ error });
          setLoader(false);
        });
    },
  });
  return (
    <Bg>
      <Bg2>
        <Container>
          <Wrapper>
            <Header>
              <h1>Partner with us</h1>
              <p>
                Congrats! We are glad to see that you are interested in using
                Movebot as courier service provider to deliver all items smart,
                easily track all deliveries and spend less resources(e.g money,
                time and energy) on items transportation.
              </p>
              <p>
                Kindly complete this form and submit so that we can meet you and
                discuss how to become our courier partner.
              </p>
            </Header>
            <FormData>
              {res && <Modal res={res} iserror={err} />}
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
                <Flex>
                  <input
                    placeholder="First name"
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
                    placeholder="Last name"
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
                    placeholder="Email address"
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
                </Flex>
                <Flex>
                  <Group>
                    {
                      <select
                        id="countryCode"
                        name="countryCode"
                        type="string"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.countryCode}
                      >
                        {fetchResults ? (
                          fetchResults.map((fetchResult) => (
                            <option>{fetchResult}</option>
                          ))
                        ) : (
                          <option value="">Null</option>
                        )}
                      </select>
                    }
                    <input
                      placeholder="Phone number"
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
                  </Group>
                  <input
                    placeholder="Job title"
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
                </Flex>

                <Select>
                  <p>
                    Is the company name above duly registered with the
                    government authority e.g CAC?
                  </p>

                  <select
                    id="countryCode"
                    name="hasCACNo"
                    type="string"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.hasCACNo}
                  >
                    <option value={true}>YES</option>
                    <option value={false}>NO</option>
                  </select>
                </Select>
                {formik.touched.hasCACNo && formik.errors.hasCACNo ? (
                  <ErrorDiv>{formik.errors.hasCACNo}</ErrorDiv>
                ) : null}
                <textarea
                  placeholder="Memo"
                  cols="90"
                  rows="2"
                  type="text"
                  name="memo"
                  id="memo"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.memo}
                ></textarea>
                {formik.touched.memo && formik.errors.memo ? (
                  <ErrorDiv>{formik.errors.memo}</ErrorDiv>
                ) : null}
                <Flex>
                  <input
                    placeholder="Street"
                    id="street"
                    name="street"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.street}
                  />
                  {formik.touched.street && formik.errors.street ? (
                    <ErrorDiv>{formik.errors.street}</ErrorDiv>
                  ) : null}

                  <input
                    placeholder="City"
                    id="city"
                    name="city"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
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
                </Flex>
                <Flex>
                  <input
                    placeholder="Zip-code"
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.zipCode}
                  />
                  {formik.touched.street && formik.errors.street ? (
                    <ErrorDiv>{formik.errors.street}</ErrorDiv>
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
                </Flex>
                {loader ? (
                  <Loader>
                    <ClipLoader css={override} color={"#F57F55"} size={80} />
                  </Loader>
                ) : (
                  ""
                )}
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
  height: 100vh;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const Bg2 = styled.div`
  height: 100%;
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
const Header = styled.div`
  padding: 1rem;
  flex: 1;
  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }
  h1 {
    color: #fff;
  }
  p {
    color: #faf3f3;
  }
`;
const Flex = styled.div`
  display: flex;
  gap: 20px;
`;
const Group = styled.div`
  display: flex;
`;
const Select = styled.div`
  padding: 1rem 0;
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
  position: relative;
  input {
    color: #fff;
    background: transparent;
    padding: 0 1rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #f57f55;
    width: 100%;

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
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #f57f55;
    outline: none;
    font-size: 1.2rem;
    padding: 0 1rem;
    overflow: hidden;
    width: 100%;
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
`;
const ErrorDiv = styled.div`
  color: red;
  text-align: center;
`;
const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 13, 26, 0.8);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const override = css`
  border-color: #f57f55;
`;

export default Partnership;
