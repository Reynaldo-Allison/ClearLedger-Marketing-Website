import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-[#0A0F0D] text-white">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
