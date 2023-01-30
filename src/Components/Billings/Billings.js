import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BillingsTable from "../BillingsTable/BillingsTable";
import EditBillDetailsModal from "../EditBillDetailsModal/EditBillDetailsModal";
import TopBar from "../TopBar/TopBar";

const Billings = () => {
  const [modalPrevData, setModalPrevData] = useState(null);
  const [activePage, setActivePage] = useState(0);
  const [dataPerPage] = useState(10);
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["billing-list", activePage, dataPerPage],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/billing-list?activePage=${activePage}&dataPerPage=${dataPerPage}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="mx-24">
      <TopBar refetch={refetch}></TopBar>
      <BillingsTable
        dataPerPage={dataPerPage}
        data={data}
        isLoading={isLoading}
        refetch={refetch}
        activePage={activePage}
        setActivePage={setActivePage}
        setModalPrevData={setModalPrevData}
      ></BillingsTable>
      <EditBillDetailsModal
        refetch={refetch}
        modalPrevData={modalPrevData}
        setModalPrevData={setModalPrevData}
      ></EditBillDetailsModal>
    </div>
  );
};

export default Billings;
