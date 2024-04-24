import React from "react";

import { useQueryClient } from "@tanstack/react-query";
import { createCustomer } from "@services/api.service";

import { useFormik } from "formik";
import * as Yup from "yup";

import toast, { Toaster } from "react-hot-toast";
import { TOASTER_DEFAULT_STYLES } from "@constants/toasterDefaultStyles";

import Modal from "../modal/Modal";
import FormikInput from "@components/ui/formik-input/FormikInput";

import "./CreateUserModal.scss";

const AddCustomerModal = ({ isOpen, onClose, setLastPage }) => {
  const queryClient = useQueryClient();

  const formik = useFormik({
    initialValues: {
      name: "",
      avatar:
        "https://i.pinimg.com/550x/ba/75/f9/ba75f9c4614b853773a24b4e4c448713.jpg",
      orderAmount: "",
      paymentStatus: false,
      productCategory: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Customer name is required"),
      /* avatar: Yup.string()
        .url("Invalid URL")
        .required("Avatar URL is required"), */
      orderAmount: Yup.number()
        .typeError("Order amount must be a number")
        .positive("Order amount must be positive")
        .required("Order amount is required"),
      paymentStatus: Yup.boolean(),
      productCategory: Yup.string().required("Product category is required"),
    }),
    onSubmit: async (values) => {
      try {
        const customerData = {
          ...values,
          createdAt: new Date().toISOString(),
        };

        const response = await createCustomer(customerData);
        toast.success("Customer successfully added.", TOASTER_DEFAULT_STYLES);
        queryClient.invalidateQueries(["customers"]);
        onClose();
        formik.resetForm();
        setLastPage();
      } catch (error) {
        console.error("Error:", error);
        toast.error(
          "An error occurred while creating the customer.",
          TOASTER_DEFAULT_STYLES
        );
      }
    },
  });

  const onCloseModal = () => {
    formik.resetForm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      <div className="add-customer-modal">
        <h2 className="title">Add New Customer</h2>
        <form onSubmit={formik.handleSubmit} className="form">
          <FormikInput
            label="Name"
            name="name"
            formik={formik}
            type="text"
            placeholder="Enter customer name"
          />

          <FormikInput
            label="Order Amount"
            name="orderAmount"
            formik={formik}
            type="number"
            placeholder="Enter order amount"
          />
          <FormikInput
            label="Product Category"
            name="productCategory"
            formik={formik}
            type="text"
            placeholder="Enter product category"
          />
          <button
            className="add-button"
            type="submit"
            /* disabled={!formik.isValid} */
          >
            Create New Customer
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddCustomerModal;
