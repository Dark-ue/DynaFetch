import React from "react";

const DynamicComponent = ({ data }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">{data.User}</h2>
      <img src={data.Image} alt={data.User} className="w-32 h-32 rounded-full" />
      <p className="mt-4 text-gray-600">{data.Content}</p>
    </div>
  );
};

export default DynamicComponent;
