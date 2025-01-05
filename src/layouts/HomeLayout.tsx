import NavBar from "@/components/base/navbar/Navbar";
import { Outlet } from "react-router";

export default function HomeLayout() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className=" min-h-screen container mx-auto px-4">
        <Outlet />
      </main>
    </div>
  );
}
