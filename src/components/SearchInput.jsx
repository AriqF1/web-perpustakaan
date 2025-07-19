import React from "react";
import { Search } from "lucide-react";

const SearchInput = ({
  value,
  onChange,
  placeholder = "",
  className = "",
  icon: IconComponent = Search,
  iconSize = 16,
  ...props
}) => {
  return (
    <div className="relative">
      <IconComponent
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={iconSize}
      />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
        {...props}
      />
    </div>
  );
};

export default SearchInput;
