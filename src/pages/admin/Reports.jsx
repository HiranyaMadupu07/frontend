export default function Reports() {

  const stats = {
    open: 12,
    inProgress: 7,
    resolved: 21,
    closed: 13
  };

  const categoryStats = [
    { name: "Bug", count: 18 },
    { name: "Feature", count: 9 },
    { name: "Query", count: 12 },
    { name: "Incident", count: 5 }
  ];

  const priorityStats = [
    { name: "High", count: 14 },
    { name: "Medium", count: 20 },
    { name: "Low", count: 19 }
  ];

  return (
    <div>

      <h2 className="page-title">Reports & Analytics</h2>


      {/* SUMMARY CARDS */}
      <div className="row" style={{flexWrap:"wrap"}}>

        <div className="card" style={{minWidth:180}}>
          <p>Open</p>
          <h2 style={{color:"#2563EB"}}>{stats.open}</h2>
        </div>

        <div className="card" style={{minWidth:180}}>
          <p>In Progress</p>
          <h2 style={{color:"#D97706"}}>{stats.inProgress}</h2>
        </div>

        <div className="card" style={{minWidth:180}}>
          <p>Resolved</p>
          <h2 style={{color:"#16A34A"}}>{stats.resolved}</h2>
        </div>

        <div className="card" style={{minWidth:180}}>
          <p>Closed</p>
          <h2 style={{color:"#374151"}}>{stats.closed}</h2>
        </div>

      </div>



      {/* CATEGORY + PRIORITY CARDS */}
      <div className="row" style={{marginTop:10, flexWrap:"wrap"}}>

        <div className="card" style={{flex:1, minWidth:280}}>
          <div className="section-title">Tickets by Category</div>

          <table className="table">
            <tbody>
              {categoryStats.map(c => (
                <tr key={c.name}>
                  <td>{c.name}</td>
                  <td style={{fontWeight:"600"}}>{c.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div className="card" style={{flex:1, minWidth:280}}>
          <div className="section-title">Tickets by Priority</div>

          <table className="table">
            <tbody>
              {priorityStats.map(c => (
                <tr key={c.name}>
                  <td>{c.name}</td>
                  <td style={{fontWeight:"600"}}>{c.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>



      {/* SUMMARY BOX */}
      <div className="card">
        <div className="section-title">Summary</div>

        <p style={{lineHeight:"1.6"}}>
          This dashboard provides an overview of the support workload and resolution
          performance. Admins can review how many tickets are currently open,
          actively being worked on, successfully resolved, or fully closed.
          Category and priority insights help in understanding the nature and
          urgency of issues raised by clients.
        </p>
      </div>

    </div>
  );
}
