import _ from "lodash";
import * as yup from "yup";
import { Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "Hooks/infoSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialDataForm = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required("โปรดกรอกฟิลนี้"),
    password: yup.string().required("โปรดกรอกฟิลนี้"),
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async (values) => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    dispatch(login(payload));
    navigate("/home");
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 bg-slate-50">
        <div className="col-span-1">
          <div className="flex justify-center items-center w-full rounded-2xl">
            <div className="bg-[url('https://swensens1112.com/images/card-head.png')] mx-2 mt-4 rounded-t-2xl  w-full sm:w-[80%] lg:w-[60%] h-[250px] bg-center-bottom bg-no-repeat bg-cover md:bg-cover md:h-[350px]">
              <div className="flex justify-start items-center pl-8 text-[30px] text-white pt-10">
                Welcome
              </div>
              <div className="flex justify-start items-center pl-8 text-[20px] text-white pt-5">
                Login to begin journey
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex justify-center items-center mb-20">
            <div className="bg-white mx-2 w-full sm:w-[80%] lg:w-[60%] h-[450px] rounded-b-2xl">
              <div className="mx-10 my-8">
                <Formik
                  initialValues={initialDataForm}
                  validationSchema={validationSchema}
                  validateOnChange={true}
                  validateOnBlur={false}
                  onSubmit={handleClick}
                >
                  {(formData) => (
                    <form onSubmit={formData.handleSubmit}>
                      <div className="flex flex-col">
                        <div className="text-[15px] mb-4">Email</div>
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
                        <div className="text-[15px] my-4">Password</div>

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

                        <div className="flex justify-end items-end">
                          <div className="text-primarySecond mt-2">
                            Forgot password?
                          </div>
                        </div>

                        <div
                          className={`mx-0 w-full ${
                            _.isEmpty(formData.values.email) ||
                            _.isEmpty(formData.values.password)
                              ? "bg-slate-100 text-gray-400"
                              : "bg-slate-400 text-white"
                          } rounded-full mt-4`}
                        >
                          <div className="flex justify-center items-center">
                            <button
                              className="py-2"
                              disabled={
                                _.isEmpty(formData.values.email) ||
                                _.isEmpty(formData.values.password)
                              }
                              type="submit"
                            >
                              Login
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

export default Login;
