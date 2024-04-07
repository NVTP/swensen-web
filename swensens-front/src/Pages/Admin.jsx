import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  CreateProduct,
  Delete,
  GetAllProduct,
  GetProductById,
  UpdateProduct,
} from "Services/ProductService";

const ModalConfirm = lazy(() => import("../Components/ModalConfirm"));
const ModalAlert = lazy(() => import("../Components/ModalAlert"));
const ModalCreate = lazy(() => import("../Components/ModalCreate"));

const Admin = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [productId, setProductId] = useState("");
  const [openCreate, setOpenCreate] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [modalAlert, setModalAlert] = useState(false);
  const [nameProduct, setNameProduct] = useState("");
  const [category, setCategory] = useState("");

  const handleClear = () => {
    setProductId("");
    setOpenCreate(false);
    setOpenUpdate(false);
    setConfirmModal(false);
    setModalAlert(false);
    setNameProduct("");
    setCategory("");

    setTimeout(() => {
      handleGetAllProduct();
    }, 500);
  };

  const handleGetAllProduct = async () => {
    try {
      const resp = await GetAllProduct();
      setAllProduct(resp.data.data.result);
    } catch (e) {
      console.error(e);
    }
  };

  const handelGetProductById = async (id) => {
    try {
      const resp = await GetProductById(id);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteProduct = async () => {
    try {
      const resp = await Delete(productId);

      console.log("resp ", resp.data.data);
      handleClear();
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreateProduct = async (data) => {
    try {
      const payload = {
        name: data.product,
        category: data.category,
      };

      const resp = await CreateProduct(payload);
      handleClear();
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateProduct = async (data) => {
    try {
      const payload = {
        name: data.product,
        category: data.category,
      };
      const resp = await UpdateProduct(productId, payload);
      handleClear();
    } catch (e) {
      console.error(e);
    }
  };

  const actionCallBack = useCallback((id) => {
    handelGetProductById(id);
  }, []);

  const columns = [
    {
      field: "#",
      headerName: "Actions",
      minWidth: 150,
      headerAlign: "left",
      align: "left",
      renderCell: (params) => {
        return (
          <div className="flex flex-row gap-4 mt-4">
            <button
              onClick={() => {
                // console.log("params ", params.row);
                setNameProduct(params.row.productName);
                setCategory(params.row.category);
                setOpenUpdate(true);
                setProductId(params.row.uid);
                actionCallBack(params.row.uid);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                // console.log("delete Icon ", params.row);
                setProductId(params.row.uid);
                setConfirmModal(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        );
      },
    },
    {
      field: "productName",
      headerName: "Product",
      minWidth: 250,
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 250,
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
  ];

  useEffect(() => {
    handleGetAllProduct();
  }, []);

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 mx-4">
        <div className="col-span-1 mt-10">
          <div className="flex justify-end">
            <button
              className="py-1 px-4 border-primary w-fit border rounded-md text-primary"
              onClick={() => {
                setOpenCreate(true);
              }}
            >
              Create New
            </button>
          </div>
        </div>
        <div className="col-span-1 mt-4">
          <div className="w-full py-4 h-[650px]">
            <DataGrid
              rows={allProduct || []}
              getRowId={(rows) => rows?.uid}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              checkboxSelection={false}
              pageSizeOptions={[5]}
              disableColumnFilter
              disableColumnSelector
              disableDensitySelector
              disableSelectionOnClick
              components={{ Toolbar: GridToolbar }}
            />
          </div>
        </div>

        <div className="col-span-1">
          {openCreate ? (
            <Suspense fallback={null}>
              <ModalCreate
                openModal={openCreate}
                handleClear={handleClear}
                setNameProduct={setNameProduct}
                nameProduct={nameProduct}
                setCategory={setCategory}
                category={category}
                action={handleCreateProduct}
              />
            </Suspense>
          ) : (
            <></>
          )}

          {openUpdate ? (
            <Suspense fallback={null}>
              <ModalCreate
                openModal={openUpdate}
                handleClear={handleClear}
                setNameProduct={setNameProduct}
                nameProduct={nameProduct}
                setCategory={setCategory}
                category={category}
                action={handleUpdateProduct}
              />
            </Suspense>
          ) : (
            <></>
          )}

          {confirmModal ? (
            <Suspense fallback={null}>
              <ModalConfirm
                open={confirmModal}
                handleClose={handleClear}
                handleOkConfirm={handleDeleteProduct}
                OkButtonText={"Delete"}
                closeButtonText={"Close"}
                headerText={"Warning"}
                text={"Confirm Delete?"}
              />
            </Suspense>
          ) : (
            <></>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
