export default function StatusBadge({ status }) {

  const colors = {
    open: "bg-blue-100 text-blue-700",
    "in-progress": "bg-yellow-100 text-yellow-700",
    resolved: "bg-green-100 text-green-700",
    closed: "bg-gray-200 text-gray-700"
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full font-medium ${colors[status] || "bg-gray-100"}`}>
      {status}
    </span>
  );
}
