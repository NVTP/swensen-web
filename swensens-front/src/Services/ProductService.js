import axios from "axios";

const route = "https://localhost:7063/api";

export const GetAllProduct = async () => {
  try {
    const resp = await axios.get(`${route}/Product/All`);
    return resp;
  } catch (e) {
    alert(e);
  }
};

export const GetProductById = async (id) => {
  try {
    const resp = await axios.get(`${route}/Product/ById/${id}`);
    return resp;
  } catch (e) {
    alert(e);
  }
};

export const CreateProduct = async (payload) => {
  try {
    const resp = await axios.post(`${route}/Product/CreateProduct`, payload);
    return resp;
  } catch (e) {
    alert(e);
  }
};

export const UpdateProduct = async (id, payload) => {
  try {
    const resp = await axios.post(
      `${route}/Product/UpdateProduct/${id}`,
      payload
    );
    return resp;
  } catch (e) {
    alert(e);
  }
};

export const Delete = async (id) => {
  try {
    const resp = await axios.post(`${route}/Product/Delete/${id}`);
    return resp;
  } catch (e) {
    alert(e);
  }
};
