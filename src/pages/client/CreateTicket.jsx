export default function CreateTicket(){

  return(
    <div>

      <h2 className="page-title">Create Ticket</h2>

      <div className="card">

        <form className="form">

          <label>Title</label>
          <input placeholder="Brief issue summary" />

          <label>Description</label>
          <textarea placeholder="Explain your issue..." />

          <label>Category</label>
          <select>
            <option>Bug</option>
            <option>Feature</option>
            <option>Query</option>
          </select>

          <label>Priority</label>
          <select>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <button className="btn btn-primary">
            Submit Ticket
          </button>

        </form>

      </div>

    </div>
  );
}
