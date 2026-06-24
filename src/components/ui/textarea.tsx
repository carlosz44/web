import { forwardRef, type TextareaHTMLAttributes } from "react";

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className = "", ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={`w-full rounded-md border-2 border-violet-400 bg-stone-800 px-3 py-2 text-white outline-none focus:ring focus:ring-white ${className}`}
      {...props}
    />
  );
});

export default Textarea;
