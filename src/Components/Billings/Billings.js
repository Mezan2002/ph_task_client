import React from "react";
import BillingsTable from "../BillingsTable/BillingsTable";
import Pagination from "../Pagination/Pagination";
import TopBar from "../TopBar/TopBar";

const Billings = () => {
  return (
    <div className="mx-24">
      <TopBar></TopBar>
      <BillingsTable></BillingsTable>
      <Pagination></Pagination>
    </div>
  );
};

export default Billings;
