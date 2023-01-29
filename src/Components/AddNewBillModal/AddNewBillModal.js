import React from "react";

const AddNewBillModal = () => {
  return (
    <div>
      <div>
        <input type="checkbox" id="addNewBillModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="addNewBillModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg text-center font-bold">Add a New Bill</h3>
            <form>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder=""
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder=""
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder=""
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Payable Amount</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder=""
                  className="input input-bordered w-full"
                  required
                />
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
    </div>
  );
};

export default AddNewBillModal;
