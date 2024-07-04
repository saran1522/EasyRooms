"use client";
import { useFormStatus } from "react-dom";
export default function SubmitButton({ children }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-accent-600 px-8 py-4 text-primary-50 font-semibold hover:bg-accent-900 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? "Updating..." : children}
    </button>
  );
}
