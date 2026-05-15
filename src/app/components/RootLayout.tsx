import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function RootLayout() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#06111d] text-white">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
