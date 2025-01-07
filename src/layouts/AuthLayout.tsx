import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="group relative w-[400px]">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-tl from-[#1d4ed8] via-[#6b21a8] to-[#16a34a] opacity-55 blur transition duration-500 group-hover:opacity-65"></div>

        <div className="relative rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
