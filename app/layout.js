import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";
import { Inter } from "next/font/google";

// import { Poppins } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";
import Footer from "./_components/Footer";

export const metadata = {
  title: {
    template: "%s | EasyRooms",
    default: "Welcome | EasyRooms",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`h-full bg-[url('/wave2.jpg')] bg-center bg-cover text-gray-800 borde ${inter.className}`}
      >
        <div className="w-full flex flex-col h-full backdrop-blur-lg">
          <Header />

          <main className="p-2 flex-grow min-h-96">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

//
