import { forwardRef, type InputHTMLAttributes } from "react";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className = "", ...props }, ref) {
    return (
      <input
        ref={ref}
        className={`w-full rounded-md border-2 border-violet-400 bg-stone-800 px-3 py-2 text-white outline-none focus:ring focus:ring-white ${className}`}
        {...props}
      />
    );
  },
);

export default Input;
