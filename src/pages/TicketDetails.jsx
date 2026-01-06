export default function TicketDetails(){

  return(
    <div>

      <h2 className="page-title">Ticket Details</h2>

      <div className="card">

        <div className="space-between">
          <div>
            <div className="section-title">TK-101 — Login Issue</div>
            <p>Client: Infosys</p>
          </div>

          <span className="badge badge-blue">Open</span>
        </div>

        <p style={{marginTop:10}}>
          Issue description goes here...
        </p>

      </div>

    </div>
  );
}
