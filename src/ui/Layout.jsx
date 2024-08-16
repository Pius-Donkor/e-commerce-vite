import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <main className="bg-softWhite max-w-[100vw] h-fit">
      <NavBar />
      <main className=" mt-[5.5rem]">
        <Outlet />
      </main>
      <Footer />
    </main>
  );
}
