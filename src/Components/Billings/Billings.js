import React from "react";
import BillingsTable from "../BillingsTable/BillingsTable";
import TopBar from "../TopBar/TopBar";

const Billings = () => {
  return (
    <div className="mx-24">
      <TopBar></TopBar>
      <BillingsTable></BillingsTable>
    </div>
  );
};

export default Billings;
