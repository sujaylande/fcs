import React from "react";

const OrderCard = ({ type, title }) => {
  let cardBorderColor, buttonColor;

  // Determine colors based on type
  switch (type) {
    case "pendingOrder":
      cardBorderColor = "border-orange-600";
      buttonColor =
        "bg-orange-600 hover:bg-transparent hover:text-orange-600 border-orange-600 border rounded-md";
      break;
    case "deliveredOrder":
      cardBorderColor = "border border-green-600";
      buttonColor =
        "bg-green-600 hover:bg-transparent hover:text-green-600 border-green-600 border rounded-md";
      break;
    default:
      cardBorderColor = "border border-indigo-600";
      buttonColor =
        "bg-indigo-600 hover:bg-transparent hover:text-indigo-600 border-indigo-600 border rounded-md";
  }

  return (
    <div
      className={`border rounded-2xl divide-y divide-gray-200 className=" ${cardBorderColor}`}
      style={{
        boxShadow:
          "rgba(45, 50, 130, 0.15) 0px 12px 16px -4px, rgba(45, 50, 130, 0.15) 0px 4px 6px -2px",
      }}
    >
      <div className="p-6">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-gray-600">
            {type === "pendingOrder"
              ? "Pending Order"
              : type === "deliveredOrder"
              ? "Delivered Order"
              : "New Order"}
          </h2>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Enter an order No.</p>
        <p className="mt-2">
          <input
            type="text"
            className="py-2 px-2 font-bold tracking-tight text-gray-900 w-full border border-[#414141] rounded-md"
          />
        </p>
        <a
          href="#"
          target="_blank"
          className={`flex justify-center w-full py-3 mt-4 text-sm font-medium text-white ${buttonColor} active:text-indigo-500 focus:outline-none focus:ring`}
        >
          Create{" "}
          {type === "pendingOrder"
            ? "Pending"
            : type === "deliveredOrder"
            ? "Delivered"
            : "New"}{" "}
          Order
        </a>
      </div>
      <div className="px-6 pt-6 pb-8">
        <h3 className="text-sm font-medium text-gray-900">
          Recent 5 orders
        </h3>
        <ul role="list" className="mt-6 space-y-4">
          <li className="flex space-x-3">
            <div
              className={`flex justify-center items-center rounded-full ${
                type === "pendingOrder"
                  ? "bg-orange-100"
                  : type === "deliveredOrder"
                  ? "bg-green-100"
                  : "bg-indigo-100"
              } h-5 w-5`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-3 w-3 flex-shrink-0 text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-sm text-gray-800"># 2312</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderCard;
