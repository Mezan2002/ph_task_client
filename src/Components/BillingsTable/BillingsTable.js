import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import Loading from "../Loading/Loading";

const BillingsTable = ({ setModalToggle, modalPrevData, setModalPrevData }) => {
  const {
    data: billingList = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["billing-list"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/billing-list");
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = (id) => {
    const procced = window.confirm("Are you want to delete the bill details?");
    if (procced === true) {
      fetch(`http://localhost:5000/delete-billing/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            refetch();
            toast.success("Billing Details Deleted Successfully!");
          }
        });
    }
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Billing Id</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Paid Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {billingList?.map((bill, i) => (
              <tr key={bill._id}>
                <th>{i + 1}</th>
                <td>{bill.fullName}</td>
                <td>{bill.email}</td>
                <td>{bill.phone}</td>
                <td>{bill.payableAmount}</td>
                <td>
                  <label
                    onClick={() => setModalPrevData(bill)}
                    htmlFor="updateBillModal"
                    className="btn btn-sm mr-2"
                  >
                    Edit
                  </label>
                  <button
                    onClick={() => handleDelete(bill._id)}
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingsTable;
