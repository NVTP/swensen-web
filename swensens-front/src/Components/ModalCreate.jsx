import _ from "lodash";
import * as yup from "yup";
import { Formik } from "formik";
import React from "react";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";

const ModalCreate = ({
  openModal,
  handleClear,
  setNameProduct,
  nameProduct,
  setCategory,
  category,
  action,
}) => {
  const initialDataForm = {
    product: nameProduct,
    category: category,
  };

  const validationSchema = yup.object().shape({
    product: yup.string().required("โปรดกรอกฟิลนี้"),
    category: yup.string().required("โปรดกรอกฟิลนี้"),
  });

  const handleClick = async (values) => {
    const payload = {
      product: values.product,
      category: values.category,
    };
    setNameProduct(values.product);
    setCategory(values.category);
    action(payload);
    // dispatch(login(payload));
    // navigate("/home");
  };

  return (
    <React.Fragment>
      <Dialog open={openModal} fullWidth maxWidth={"xs"}>
        <DialogTitle></DialogTitle>

        <DialogContent>
          <div>
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
                    <div className="text-[15px] mb-4">Product Name</div>
                    <input
                      type="test"
                      name="product"
                      label="product"
                      placeholder="Product Name"
                      id="product"
                      className="border w-full rounded-lg p-2"
                      value={formData.values.product}
                      onChange={formData.handleChange}
                      error={String(!_.isEmpty(formData.errors.product))}
                    />
                    <div>
                      {formData.errors.product && (
                        <span style={{ color: "#ff0011" }}>
                          {formData.errors.product}
                        </span>
                      )}
                    </div>
                    <div className="text-[15px] my-4">Category</div>

                    <label className="relative  text-gray-400 focus-within:text-gray-600 block">
                      <input
                        name="category"
                        label="category"
                        type="text"
                        value={formData.values.category}
                        onChange={formData.handleChange}
                        error={String(!_.isEmpty(formData.errors.category))}
                        placeholder="category"
                        className="border w-full rounded-lg p-2"
                      />
                    </label>

                    <div>
                      {formData.errors.category && (
                        <span style={{ color: "#ff0011" }}>
                          {formData.errors.category}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-row justify-between gap-4 mt-4">
                      <button
                        className="py-1 px-4 border-primary w-fit border rounded-md text-primary"
                        onClick={() => {
                          handleClear();
                        }}
                      >
                        Close
                      </button>

                      <button
                        type="submit"
                        className="py-1 px-4 bg-primary w-fit border rounded-md text-white"
                        // onClick={() => {
                        //   action();
                        // }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default ModalCreate;
