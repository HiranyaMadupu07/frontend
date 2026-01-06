import StatusBadge from "./StatusBadge";
import { Link } from "react-router-dom";

export default function TicketCard({ ticket }) {
  return (
    <Link to={`/ticket/${ticket._id}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-md transition p-5 cursor-pointer">

        <div className="flex justify-between mb-2">
          <h3 className="font-semibold text-lg">{ticket.title}</h3>
          <StatusBadge status={ticket.status} />
        </div>

        <p className="text-gray-600 text-sm mb-3">
          {ticket.description.substring(0, 80)}...
        </p>

        <div className="flex gap-3 text-sm">
          <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">
            {ticket.category}
          </span>

          <span className="bg-red-100 text-red-700 px-2 py-1 rounded">
            Priority: {ticket.priority}
          </span>
        </div>

      </div>
    </Link>
  );
}
