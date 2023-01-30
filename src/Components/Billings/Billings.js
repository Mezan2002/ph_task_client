import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BillingsTable from "../BillingsTable/BillingsTable";
import EditBillDetailsModal from "../EditBillDetailsModal/EditBillDetailsModal";
import TopBar from "../TopBar/TopBar";

const Billings = ({ user }) => {
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
        `http://localhost:5000/billing-list?activePage=${activePage}&dataPerPage=${dataPerPage}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="mx-24">
      {user ? (
        <>
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
        </>
      ) : (
        <div className="flex items-center justify-center min-h-[85vh]">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-3">
              Please login to see the data
            </h2>
            <Link to="/login">
              <button className="btn btn-block">Login</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Billings;
