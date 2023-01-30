import React, { useState } from "react";
import AddNewBillModal from "../AddNewBillModal/AddNewBillModal";

const TopBar = ({ refetch, setSearch, isLoading }) => {
  const [modalToggle, setModalToggle] = useState(true);
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setSearch(search);
    refetch();
  };
  return (
    <div className="bg-black mt-2 rounded-md py-3">
      <div className="flex items-center px-8 justify-between">
        <div className="w-4/12 flex justify-between items-center">
          <h2 className="text-xl font-semibold mr-10 text-white">Billings</h2>
          <form onSubmit={handleSearch} className="w-full">
            <input
              className="input w-full rounded-full"
              type="text"
              name="search"
              placeholder="Search by Full Name, Email, Phone Number"
            />
          </form>
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
