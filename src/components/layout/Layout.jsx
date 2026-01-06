import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app-container">

      <aside className="sidebar">
        <h2>SupportFlow AI</h2>

        <Link to="/client/tickets">My Tickets</Link>
        <Link to="/client/create">Create Ticket</Link>
        <Link to="/dev/tickets">Developer</Link>
        <Link to="/admin/tickets">Admin Dashboard</Link>
        <Link to="/admin/reports">Reports</Link>
      </aside>

      <div className="main-content">

        <header className="topbar">
          Dashboard
        </header>

        <div className="page">
          <Outlet />
        </div>

      </div>

    </div>
  );
}
