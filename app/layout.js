import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";

// import { Poppins } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";
import Footer from "./_components/Footer";

export const metadata = {
  title: {
    template: "%s | EasyRooms",
    default: "Welcome | EasyRooms",
  },
};

// const poppins = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["300"],
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#ffffff] text-gray-800 borde`}>
        <Header />

        <main className="p-2">
          <ReservationProvider>{children}</ReservationProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
