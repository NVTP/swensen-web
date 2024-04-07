import _ from "lodash";
import * as yup from "yup";
import { Formik } from "formik";
import React, { useState } from "react";
const Register = () => {
  const initialDataForm = {
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    password: "",
    bDate: "",
    policy1: false,
    policy2: false,
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("โปรดกรอกฟิลนี้"),
    lastName: yup.string().required("โปรดกรอกฟิลนี้"),
    mobileNo: yup.string().required("โปรดกรอกฟิลนี้"),
    email: yup.string().required("โปรดกรอกฟิลนี้"),
    password: yup.string().required("โปรดกรอกฟิลนี้"),
    bDate: yup.string().required("โปรดกรอกฟิลนี้"),
    policy1: yup.string().required("โปรดกรอกฟิลนี้"),
    policy2: yup.string().required("โปรดกรอกฟิลนี้"),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState(2);

  const handleClick = async (values) => {
    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      mobileNo: values.mobileNo,
      email: values.email,
      password: values.password,
      bDate: values.bDate,
      policy1: values.policy1,
      policy2: values.policy2,
    };
  };
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 bg-slate-50">
        <div className="col-span-1">
          <div className="flex justify-center items-center w-full rounded-2xl">
            <div className="bg-[url('https://swensens1112.com/images/card-head.png')] mx-2 mt-4 rounded-t-2xl  w-full sm:w-[80%] lg:w-[60%] h-[250px] bg-center-bottom bg-no-repeat bg-cover md:bg-cover md:h-[350px]">
              <div className="flex justify-start items-center pl-8 text-[30px] text-white pt-10">
                Register
              </div>
              <div className="flex justify-start items-center pl-8 text-[20px] text-white pt-5">
                Register to start your sweet journey
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex justify-center items-center mb-20">
            <div className="bg-white md:mx-2 w-full sm:w-[80%] lg:w-[60%] h-fit rounded-b-2xl">
              <div className="mx-5 md:mx-10 my-8">
                <Formik
                  initialValues={initialDataForm}
                  validationSchema={validationSchema}
                  validateOnChange={true}
                  validateOnBlur={false}
                  onSubmit={handleClick}
                >
                  {(formData) => (
                    <form onSubmit={formData.handleSubmit}>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                          <div className="text-[15px] mb-2">First Name</div>
                          <input
                            type="text"
                            name="firstName"
                            label="First Name"
                            placeholder="First Name"
                            id="firstName"
                            className="border w-full rounded-lg p-2"
                            value={formData.values.firstName}
                            onChange={formData.handleChange}
                            error={String(
                              !_.isEmpty(formData.errors.firstName)
                            )}
                          />
                          <div>
                            {formData.errors.firstName && (
                              <span style={{ color: "#ff0011" }}>
                                {formData.errors.firstName}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-span-1">
                          <div className="text-[15px] mb-2">Last Name</div>
                          <input
                            type="text"
                            name="lastName"
                            label="Last Name"
                            placeholder="Last Name"
                            id="lastName"
                            className="border w-full rounded-lg p-2"
                            value={formData.values.lastName}
                            onChange={formData.handleChange}
                            error={String(!_.isEmpty(formData.errors.lastName))}
                          />
                          <div>
                            {formData.errors.lastName && (
                              <span style={{ color: "#ff0011" }}>
                                {formData.errors.lastName}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col mt-2">
                        <div className="text-[15px] mb-2">Mobile no.</div>
                        <input
                          type="number"
                          name="mobileNo"
                          pattern="^[0-9]*$"
                          label="10-digit mobile number"
                          placeholder="10-digit mobile number"
                          id="mobileNo"
                          maxLength={10}
                          className="border w-full rounded-lg p-2"
                          value={formData.values.mobileNo}
                          onChange={(e) => {
                            if (e.target.value.length <= 10) {
                              formData.handleChange(e);
                            }
                          }}
                          error={String(!_.isEmpty(formData.errors.mobileNo))}
                        />
                        <div>
                          {formData.errors.mobileNo && (
                            <span style={{ color: "#ff0011" }}>
                              {formData.errors.mobileNo}
                            </span>
                          )}
                        </div>

                        <div className="text-[15px] my-2">Email</div>
                        <input
                          type="email"
                          name="email"
                          label="email"
                          placeholder="email"
                          id="email"
                          className="border w-full rounded-lg p-2"
                          value={formData.values.email}
                          onChange={formData.handleChange}
                          error={String(!_.isEmpty(formData.errors.email))}
                        />
                        <div>
                          {formData.errors.email && (
                            <span style={{ color: "#ff0011" }}>
                              {formData.errors.email}
                            </span>
                          )}
                        </div>
                        <div className="text-[14px] text-primary">
                          Please ensure you enter valid email address. The email
                          cannot be changed after registration.
                        </div>
                        <div className="text-[15px] my-2">Password</div>

                        <label className="relative  text-gray-400 focus-within:text-gray-600 block">
                          <input
                            name="password"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            value={formData.values.password}
                            onChange={formData.handleChange}
                            error={String(!_.isEmpty(formData.errors.password))}
                            placeholder="password"
                            className="border w-full rounded-lg p-2"
                          />
                          {!showPassword ? (
                            <button
                              onClick={() => {
                                console.log("tap");
                                setShowPassword(false);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="pointer-events-none w-8 h-8 z-10 absolute top-1/2 transform -translate-y-1/2 right-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                              </svg>
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                console.log("tap");
                                setShowPassword(true);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="pointer-events-none w-8 h-8 z-10 absolute top-1/2 transform -translate-y-1/2 right-3"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>
                            </button>
                          )}
                        </label>
                        <div>
                          {formData.errors.password && (
                            <span style={{ color: "#ff0011" }}>
                              {formData.errors.password}
                            </span>
                          )}
                        </div>

                        <div className="text-[15px] my-2">
                          Gender (optional)
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="col-span-2 md:col-span-1">
                            <div className="flex flex-row gap-2">
                              <button
                                className={`py-1 px-4 ${
                                  gender === 0
                                    ? "bg-primary text-white"
                                    : "border-gray-200 text-primary"
                                } w-full border rounded-full `}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setGender(0);
                                }}
                              >
                                Male
                              </button>
                              <button
                                className={`py-1 px-4 ${
                                  gender === 1
                                    ? "bg-primary text-white"
                                    : "border-gray-200 text-primary"
                                } w-full border rounded-full `}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setGender(1);
                                }}
                              >
                                Female
                              </button>
                            </div>
                          </div>
                          <div className="col-span-2 md:col-span-1">
                            <button
                              className={`py-1 px-4 ${
                                gender === 2
                                  ? "bg-primary text-white"
                                  : "border-gray-200 text-primary"
                              } w-full border rounded-full `}
                              onClick={(e) => {
                                e.preventDefault();
                                setGender(2);
                              }}
                            >
                              Not Specified
                            </button>
                          </div>
                        </div>

                        <div className="text-[15px] my-2">
                          Your birthday present is waiting
                        </div>
                        <input
                          type="date"
                          name="bDate"
                          label="dd/mm/yyyy"
                          placeholder="dd/mm/yyyy"
                          id="bDate"
                          className="border w-full rounded-lg p-2"
                          value={formData.values.bDate}
                          onChange={formData.handleChange}
                          error={String(_.isEmpty(formData.errors.bDate))}
                        />
                        <div>
                          {formData.errors.bDate && (
                            <span style={{ color: "#ff0011" }}>
                              {formData.errors.bDate}
                            </span>
                          )}
                        </div>
                        <div className="flex my-4">
                          <input
                            type="radio"
                            name="policy1"
                            id="email"
                            checked={formData.values.policy1}
                            onChange={formData.handleChange}
                            className="w-3 h-3 bg-primary border-primary border active:bg-primary "
                          />
                          <label
                            htmlFor="default-radio-1"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            I have read and accepted the terms & conditions and
                            privacy policy of Swensen’s.
                          </label>
                        </div>

                        <div className="flex my-4">
                          <input
                            type="radio"
                            name="policy2"
                            id="email"
                            checked={formData.values.policy2}
                            onChange={formData.handleChange}
                            className="w-5 h-5 bg-primary border-primary border active:bg-primary "
                          />
                          <label
                            htmlFor="default-radio-1"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            I agree to receive the information including other
                            marketing activities from Swensen’s and affiliated
                            companies. We will keep your data confidential.
                            Learn more about privacy policy from company’s
                            website.
                          </label>
                        </div>

                        <div
                          className={`mx-4 w-full ${
                            _.isEmpty(formData.values.email) ||
                            _.isEmpty(formData.values.password) ||
                            _.isEmpty(formData.values.firstName) ||
                            _.isEmpty(formData.values.lastName) ||
                            _.isEmpty(formData.values.bDate) ||
                            _.isEmpty(formData.values.policy1) ||
                            _.isEmpty(formData.values.policy2)
                              ? "bg-slate-100 text-gray-400"
                              : "bg-slate-400 text-white"
                          } rounded-full mt-4`}
                        >
                          <div className="flex justify-center items-center">
                            <button
                              className="py-2"
                              disabled={
                                _.isEmpty(formData.values.email) ||
                                _.isEmpty(formData.values.password) ||
                                _.isEmpty(formData.values.firstName) ||
                                _.isEmpty(formData.values.lastName) ||
                                _.isEmpty(formData.values.bDate) ||
                                _.isEmpty(formData.values.policy1) ||
                                _.isEmpty(formData.values.policy2)
                              }
                              type="submit"
                            >
                              Register
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
