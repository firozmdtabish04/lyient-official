import { Outlet } from "react-router-dom";

export default function AI() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Outlet />
    </div>
  );
}
