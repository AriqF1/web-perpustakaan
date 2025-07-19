import React from "react";

const Cards = ({ icon: IconComponent, textColor, iconSize, text, value }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{text}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
        <IconComponent className={textColor} size={iconSize} />
      </div>
    </div>
  );
};

export default Cards;
