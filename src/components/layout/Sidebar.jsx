import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

export default function Sidebar(){

  const { user } = useAuth();
  const [open, setOpen] = useState(true);

  return(
    <aside
      className="sidebar"
      style={{width: open ? 240 : 60, transition:"0.2s"}}>

      {/* TOGGLE */}
      <div
        style={{cursor:"pointer", marginBottom:20}}
        onClick={()=>setOpen(o=>!o)}>
        {open ? "☰" : "📂"}
      </div>


      {/* MENU */}
      {user?.role === "client" && (
        <>
          <Link to="/client/tickets">My Tickets</Link>
          <Link to="/client/create">Create Ticket</Link>
        </>
      )}

      {user?.role === "developer" && (
        <>
          <Link to="/dev/tickets">Developer Dashboard</Link>
        </>
      )}

      {user?.role === "admin" && (
        <>
          <Link to="/admin/tickets">Admin Dashboard</Link>
          <Link to="/admin/reports">Reports</Link>
        </>
      )}

      {!user && (
        <p style={{color:"#9ca3af"}}>
          Login to access features
        </p>
      )}

    </aside>
  );
}
