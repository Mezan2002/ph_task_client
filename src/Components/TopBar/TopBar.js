import React, { useState } from "react";
import AddNewBillModal from "../AddNewBillModal/AddNewBillModal";

const TopBar = ({ refetch }) => {
  const [modalToggle, setModalToggle] = useState(true);
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
        <AddNewBillModal
          modalToggle={modalToggle}
          setModalToggle={setModalToggle}
          refetch={refetch}
        ></AddNewBillModal>
        <label
          onClick={() => setModalToggle(true)}
          htmlFor="addNewBillModal"
          className="btn"
        >
          Add New Bill
        </label>
      </div>
    </div>
  );
};

export default TopBar;
