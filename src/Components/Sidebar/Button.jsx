import React from "react";

export default function Button({
  children,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={`bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}