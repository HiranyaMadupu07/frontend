import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  const baseMenu = [
    {label:"Dashboard", path:"/"},
  ];

  const clientMenu = [
    {label:"My Tickets", path:"/client/tickets"},
    {label:"Create Ticket", path:"/client/create"},
  ];

  const devMenu = [
    {label:"Assigned Tickets", path:"/dev/tickets"},
  ];

  const adminMenu = [
    {label:"All Tickets", path:"/admin/tickets"},
    {label:"Reports", path:"/admin/reports"},
  ];

  let menu = [...baseMenu];

  if(user?.role === "client") menu.push(...clientMenu);
  if(user?.role === "developer") menu.push(...devMenu);
  if(user?.role === "admin") menu.push(...adminMenu);

  return (
    <div className="bg-gray-900 text-white w-60 min-h-screen p-5">

      <p className="uppercase text-xs text-gray-400 mb-4">Navigation</p>

      <div className="space-y-2">
        {menu.map(item => (
          <Link key={item.path} to={item.path}>
            <div className="p-2 rounded hover:bg-gray-700 cursor-pointer">
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
