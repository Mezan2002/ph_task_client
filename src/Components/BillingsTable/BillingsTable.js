import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import EditBillDetailsModal from "../EditBillDetailsModal/EditBillDetailsModal";
import Loading from "../Loading/Loading";

const BillingsTable = ({ setModalToggle, setModalPrevData }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formSubmit = (data) => {
    fetch("http://localhost:5000/add-billing", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          reset();
          setModalToggle(false);
          toast.success("Bill added successfully!");
        }
        console.log(data);
      });
  };
  const {
    data: billingList = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["billing-list"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/billing-list");
      const data = await res.json();
      return data;
    },
  });

  const handleEdit = (id) => {
    console.log(id);
  };
  const handleDelete = (id) => {
    const procced = window.confirm("Are you want to delete the bill details?");
    if (procced === true) {
      fetch(`http://localhost:5000/delete-billing/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            refetch();
            toast.success("Billing Details Deleted Successfully!");
          }
        });
    }
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Billing Id</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Paid Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {billingList?.map((bill, i) => (
              <tr key={bill._id}>
                <th>{i + 1}</th>
                <td>{bill.fullName}</td>
                <td>{bill.email}</td>
                <td>{bill.phone}</td>
                <td>{bill.payableAmount}</td>
                <td>
                  {/* <div>
                    <input
                      type="checkbox"
                      id="updateBillModal"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box relative">
                        <label
                          onClick={() => reset()}
                          htmlFor="updateBillModal"
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <h3 className="text-lg text-center font-bold">
                          Update Bill Details
                        </h3>
                        <form onSubmit={handleSubmit(formSubmit)}>
                          <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text">Full Name</span>
                            </label>
                            <input
                              {...register("fullName", { required: true })}
                              type="text"
                              placeholder=""
                              className="input input-bordered w-full"
                            />
                            {errors.fullName?.type === "required" && (
                              <p className="text-red-600 mt-2" role="alert">
                                Full Name is Required!
                              </p>
                            )}
                          </div>
                          <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text">Email</span>
                            </label>
                            <input
                              {...register("email", { required: true })}
                              type="email"
                              placeholder=""
                              defaultValue={modalPrevData.email}
                              className="input input-bordered w-full"
                            />
                            {errors.fullName?.type === "required" && (
                              <p className="text-red-600 mt-2" role="alert">
                                Email is Required!
                              </p>
                            )}
                          </div>
                          <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text">Phone Number</span>
                            </label>
                            <input
                              {...register("phone", {
                                required: true,
                                maxLength: {
                                  value: 11,
                                  message: "Phone number will be 11 digit",
                                },
                                minLength: {
                                  value: 11,
                                  message: "Phone number will be 11 digit",
                                },
                              })}
                              type="number"
                              placeholder=""
                              className="input input-bordered w-full"
                            />
                            {errors.phone?.type === "required" && (
                              <p className="text-red-600 mt-2" role="alert">
                                Phone Number is Required!
                              </p>
                            )}
                            {errors?.phone?.message && (
                              <p className="text-red-600 mt-2">
                                {errors.phone.message}
                              </p>
                            )}
                          </div>
                          <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text">Payable Amount</span>
                            </label>
                            <input
                              {...register("payableAmount", { required: true })}
                              type="number"
                              placeholder=""
                              className="input input-bordered w-full"
                            />
                            {errors.fullName?.type === "required" && (
                              <p className="text-red-600 mt-2" role="alert">
                                Payable Amount is Required!
                              </p>
                            )}
                          </div>
                          <input
                            type="submit"
                            value="Submit"
                            className="btn btn-block mt-3"
                          />
                        </form>
                      </div>
                    </div>
                  </div> */}
                  {/* <button
                    onClick={() => handleEdit(bill._id)}
                    className="btn btn-sm mr-2"
                  ></button> */}

                  <label
                    onClick={() => setModalPrevData(bill)}
                    htmlFor="updateBillModal"
                    className="btn btn-sm mr-2"
                  >
                    Edit
                  </label>
                  <button
                    onClick={() => handleDelete(bill._id)}
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingsTable;
