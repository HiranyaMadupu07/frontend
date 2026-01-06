import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Layout from "./components/layout/Layout";

// PUBLIC
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

// CLIENT
import ClientDashboard from "./pages/client/ClientDashboard";
import CreateTicket from "./pages/client/CreateTicket";

// DEV
import DevDashboard from "./pages/developer/DevDashboard";

// ADMIN
import AdminDashboard from "./pages/admin/AdminDashboard";
import Reports from "./pages/admin/Reports";

// COMMON
import TicketDetails from "./pages/TicketDetails";


// ---------- Protected Wrapper ----------
function ProtectedRoute({ children, allowed }) {
  const { user } = useAuth();

  if (!user) return <Login />;

  if (allowed && !allowed.includes(user.role)) {
    return <h2 className="p-6 text-red-600">Access Denied</h2>;
  }

  return children;
}


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>

          {/* ---------- PUBLIC PAGES ---------- */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />


          {/* ---------- PROTECTED AREA WITH LAYOUT ---------- */}
          <Route path="/" element={<Layout />}>

            {/* CLIENT */}
            <Route
              path="client/tickets"
              element={
                <ProtectedRoute allowed={["client"]}>
                  <ClientDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="client/create"
              element={
                <ProtectedRoute allowed={["client"]}>
                  <CreateTicket />
                </ProtectedRoute>
              }
            />


            {/* DEVELOPER */}
            <Route
              path="dev/tickets"
              element={
                <ProtectedRoute allowed={["developer"]}>
                  <DevDashboard />
                </ProtectedRoute>
              }
            />


            {/* ADMIN */}
            <Route
              path="admin/tickets"
              element={
                <ProtectedRoute allowed={["admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="admin/reports"
              element={
                <ProtectedRoute allowed={["admin"]}>
                  <Reports />
                </ProtectedRoute>
              }
            />


            {/* COMMON */}
            <Route
              path="ticket/:id"
              element={
                <ProtectedRoute allowed={["client","developer","admin"]}>
                  <TicketDetails />
                </ProtectedRoute>
              }
            />

          </Route>

        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}
