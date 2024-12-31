"use client";

import React from "react";

const Table: React.FC = () => {
const sampleOrders = {
  daraz: [
    { orderId: 101, customerName: "Alice", amount: "$120", status: "Delivered" },
    { orderId: 102, customerName: "Bob", amount: "$85", status: "Shipped" },
    { orderId: 103, customerName: "Cathy", amount: "$150", status: "Pending" },
    { orderId: 104, customerName: "Daniel", amount: "$200", status: "Cancelled" },
    { orderId: 105, customerName: "Eva", amount: "$95", status: "Delivered" },
    { orderId: 106, customerName: "Frank", amount: "$50", status: "In Transit" },
    { orderId: 107, customerName: "Grace", amount: "$120", status: "Shipped" },
    { orderId: 108, customerName: "Hank", amount: "$300", status: "Delivered" },
  ],
  foodpanda: [
    { orderId: 201, customerName: "Charlie", amount: "$50", status: "Delivered" },
    { orderId: 202, customerName: "David", amount: "$25", status: "Preparing" },
    { orderId: 203, customerName: "Irene", amount: "$45", status: "Cancelled" },
    { orderId: 204, customerName: "James", amount: "$70", status: "Shipped" },
    { orderId: 205, customerName: "Kim", amount: "$30", status: "Delivered" },
    { orderId: 206, customerName: "Larry", amount: "$85", status: "Pending" },
    { orderId: 207, customerName: "Mona", amount: "$60", status: "Delivered" },
    { orderId: 208, customerName: "Nate", amount: "$90", status: "In Transit" },
  ],
  amazon: [
    { orderId: 301, customerName: "Eve", amount: "$200", status: "In Transit" },
    { orderId: 302, customerName: "Frank", amount: "$150", status: "Pending" },
    { orderId: 303, customerName: "Olivia", amount: "$300", status: "Delivered" },
    { orderId: 304, customerName: "Paul", amount: "$250", status: "Cancelled" },
    { orderId: 305, customerName: "Quinn", amount: "$180", status: "Delivered" },
    { orderId: 306, customerName: "Rachel", amount: "$90", status: "Shipped" },
    { orderId: 307, customerName: "Steve", amount: "$120", status: "Delivered" },
    { orderId: 308, customerName: "Tina", amount: "$400", status: "Pending" },
    { orderId: 309, customerName: "Uma", amount: "$75", status: "Delivered" },
  ],
};

  return (
     <div className="container mx-auto mt-10 space-y-8">
      {Object.entries(sampleOrders).map(([platform, orders]) => (
        <div key={platform}>
          <h2 className="text-xl font-bold mb-4 capitalize">{platform} Orders</h2>
          <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Order ID</th>
                <th className="border border-gray-300 px-4 py-2">Customer Name</th>
                <th className="border border-gray-300 px-4 py-2">Amount</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.orderId} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{order.orderId}</td>
                  <td className="border border-gray-300 px-4 py-2">{order.customerName}</td>
                  <td className="border border-gray-300 px-4 py-2">{order.amount}</td>
                  <td className="border border-gray-300 px-4 py-2">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Table;
