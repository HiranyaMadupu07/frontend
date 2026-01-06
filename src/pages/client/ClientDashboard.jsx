export default function ClientDashboard(){

  return(
    <div>

      <h2 className="page-title">My Tickets</h2>

      <div className="card">
        <div className="space-between">
          <div className="section-title">Your Active Tickets</div>
          <button className="btn btn-primary">Create Ticket</button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>TK-101</td>
              <td>Login Issue</td>
              <td><span className="badge badge-blue">Open</span></td>
              <td><span className="badge badge-red">High</span></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
