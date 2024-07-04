import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";

import { Poppins } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
  title: {
    template: "%s | EasyRooms",
    default: "Welcome | EasyRooms",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
        // className={`bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
