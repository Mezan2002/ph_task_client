import { useQuery } from "@tanstack/react-query";
import React from "react";

const BillingsTable = () => {
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
  console.log(billingList);
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
                  <button className="btn btn-sm mr-2">Edit</button>
                  <button className="btn btn-sm btn-error text-white">
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
