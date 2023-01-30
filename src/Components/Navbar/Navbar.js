import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [total, setTotal] = useState();
  const [billAmountList, setBillAmountList] = useState([]);
  console.log(total);

  useEffect(() => {
    fetch("https://ph-task-server-sigma.vercel.app/billAmount")
      .then((res) => res.json())
      .then((data) => {
        setBillAmountList(data);
      });
    console.log(billAmountList);
    let count = 0;
    billAmountList.forEach((bill) => {
      count = count + Number(bill.amount);
    });
    setTotal();
  }, []);
  return (
    <div>
      <div className="navbar px-20">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Logo
          </Link>
        </div>
        <div className="navbar-end">
          <p className="text-xl font-medium">Paid Total: {total}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
