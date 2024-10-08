import Link from "next/link";

function LoginMessage() {
  return (
    <div className="grid bg-primary-500 text-gray-100 ">
      <p className="text-center text-xl py-12 self-center">
        Please
        <Link href="/login" className="underline text-gray-700 m-2">
          login
        </Link>
        to reserve this
        <br /> room right now
      </p>
    </div>
  );
}

export default LoginMessage;
