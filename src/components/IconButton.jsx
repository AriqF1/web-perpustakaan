import React from "react";

const IconButton = ({
  icon: IconComponent,
  iconSize = 20,
  children,
  className = "",
  label,
  onClick,
  ...props
}) => {
  const baseClasses =
    "relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors";
  const flexClasses = children ? "flex items-center space-x-2" : "";

  return (
    <button
      className={`${baseClasses} ${flexClasses} ${className}`}
      aria-label={label}
      onClick={onClick}
      {...props}
    >
      {IconComponent && <IconComponent size={iconSize} />}

      {children}
    </button>
  );
};

export default IconButton;
