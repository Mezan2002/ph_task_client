import React from "react";

const TopBar = () => {
  return (
    <div className="bg-black text-white mt-5 rounded-md py-3 mx-24">
      <div className="flex items-center px-8 justify-between">
        <div className="w-4/12 flex justify-between items-center">
          <h2 className="text-xl font-semibold mr-10">Billings</h2>
          <input
            className="input text-black w-full"
            type="text"
            placeholder="Search by Full Name, Email, Phone Number"
          />
        </div>
        <div>
          <button className="btn">Add New Bill</button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
