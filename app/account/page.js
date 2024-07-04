import { auth } from "../_lib/auth";
import { getBookings } from "../_lib/data-service";

export const metadata = {
  title: "Account",
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);
  const guestBookings = await getBookings(session.user.guestId);
  const amountSpent = guestBookings.reduce((acc, curr) => {
    return acc + curr.totalPrice;
  }, 0);
  return (
    <>
      <h2 className="leading-10 text-xl">
        Welcome, {firstName} ! This is your area. Here you can keep track of
        your reservations, can do any necessary changes in the reservations and
        you can also update your profile.
      </h2>
      <div className="mt-6">
        <ul className="flex flex-col gap-6">
          <li className="text-xl">
            <span className="font-semibold">Username:</span> {session.user.name}
          </li>
          <li className="text-xl">
            <span className="font-semibold">Country:</span>{" "}
            {session.user.nationality}
          </li>
          <li className="text-xl">
            <span className="font-semibold">Total Bookings:</span>{" "}
            {guestBookings.length}
          </li>
          <li className="text-xl">
            <span className="font-semibold">Amount Spent:</span> {amountSpent} $
          </li>
        </ul>
      </div>
    </>
  );
}
