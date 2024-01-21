import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
export default function MainLayout() {
  return (
    <div id="root">
      <Navbar />
      <Outlet />
    </div>
  );
}
