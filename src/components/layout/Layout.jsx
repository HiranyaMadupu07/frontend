import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout(){
  return(
    <div className="app-container">

      <Sidebar />

      <div className="main-content">
        <Topbar />
        <div className="page">
          <Outlet />
        </div>
      </div>

    </div>
  );
}
