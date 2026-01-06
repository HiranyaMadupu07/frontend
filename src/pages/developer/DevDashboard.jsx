export default function DevDashboard(){

  return(
    <div>

      <h2 className="page-title">Assigned Tickets</h2>

      <div className="card">

        <table className="table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>TK-201</td>
              <td>Dashboard Bug</td>
              <td><span className="badge badge-yellow">In Progress</span></td>
              <td><span className="badge badge-red">High</span></td>
              <td>
                <button className="btn btn-green">Resolve</button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}
