import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AddNewBillModal = ({ modalToggle, setModalToggle, refetch }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formSubmit = (data) => {
    const fullName = data.fullName;
    const email = data.email;
    const phone = data.phone;
    const payableAmount = data.payableAmount;
    const formData = {
      fullName,
      email,
      phone,
      payableAmount,
      createdTime: new Date().toISOString(),
    };
    fetch("https://ph-task-server-sigma.vercel.app/add-billing", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          reset();
          setModalToggle(false);
          toast.success("Bill added successfully!");
        }
        console.log(data);
      });
  };
  return (
    <div>
      {modalToggle === true && (
        <div>
          <input
            type="checkbox"
            id="addNewBillModal"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box relative">
              <label
                onClick={() => reset()}
                htmlFor="addNewBillModal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg text-center font-bold">Add a New Bill</h3>
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
                    <p className="text-red-600 mt-2">{errors.phone.message}</p>
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
        </div>
      )}
    </div>
  );
};

export default AddNewBillModal;
