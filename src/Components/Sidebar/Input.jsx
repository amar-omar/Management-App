import React, { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, textArea = false, className = "", ...props },
  ref
) {
  const baseClasses =
    "w-full rounded-sm border-b-2 border-stone-300 bg-stone-200 p-2 text-stone-600 outline-none focus:border-stone-600";

  return (
    <p className="my-4 flex flex-col gap-1">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>

      {textArea ? (
        <textarea
          ref={ref}
          className={`${baseClasses} resize-none ${className}`}
          {...props}
        />
      ) : (
        <input
          ref={ref}
          className={`${baseClasses} ${className}`}
          {...props}
        />
      )}
    </p>
  );
});

export default Input;