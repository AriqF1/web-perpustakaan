import React from "react";

const Main = ({ children }) => {
  return (
    <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">{children}</main>
  );
};

export default Main;
