import { forwardRef, type SelectHTMLAttributes } from "react";

const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(function Select({ className = "", children, ...props }, ref) {
  return (
    <select
      ref={ref}
      className={`w-full rounded-md border-2 border-violet-400 bg-stone-800 px-3 py-2 text-white outline-none focus:ring focus:ring-white ${className}`}
      {...props}
    >
      {children}
    </select>
  );
});

export default Select;
