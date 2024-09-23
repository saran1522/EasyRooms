"use client";
import { useFormStatus } from "react-dom";
export default function SubmitButton({ children }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="px-8 py-4 text-primary-50 font-semibold border border-gray-300 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? "Updating..." : children}
    </button>
  );
}
