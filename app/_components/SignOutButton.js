import { GoSignOut } from "react-icons/go";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 hover:bg-primary-400 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full">
        <GoSignOut className="h-5 w-5" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
