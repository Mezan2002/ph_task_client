import React, { useState } from "react";
import BillingsTable from "../BillingsTable/BillingsTable";
import EditBillDetailsModal from "../EditBillDetailsModal/EditBillDetailsModal";
import Pagination from "../Pagination/Pagination";
import TopBar from "../TopBar/TopBar";

const Billings = () => {
  const [modalPrevData, setModalPrevData] = useState([]);
  const [modalToggle, setModalToggle] = useState(true);
  const [editModalData, setEditModalData] = useState([]);
  return (
    <div className="mx-24">
      <TopBar></TopBar>
      <BillingsTable
        setModalToggle={setModalToggle}
        setModalPrevData={setModalPrevData}
      ></BillingsTable>
      <EditBillDetailsModal
        modalPrevData={modalPrevData}
      ></EditBillDetailsModal>
      <Pagination></Pagination>
    </div>
  );
};

export default Billings;
