import React from "react";

const TopBar = () => {
  return (
    <div className="bg-black mt-2 rounded-md py-3">
      <div className="flex items-center px-8 justify-between">
        <div className="w-4/12 flex justify-between items-center">
          <h2 className="text-xl font-semibold mr-10 text-white">Billings</h2>
          <input
            className="input w-full"
            type="text"
            placeholder="Search by Full Name, Email, Phone Number"
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="addNewBillModal"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="addNewBillModal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">
                Congratulations random Internet user!
              </h3>
              <p className="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
            </div>
          </div>
          <label htmlFor="addNewBillModal" className="btn">
            Add New Bill
          </label>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
