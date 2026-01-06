import { useNavigate } from "react-router-dom";

export default function Home(){

  const navigate = useNavigate();

  return(
    <div style={{
      minHeight:"100vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      background:"#f4f6fb",
      padding:"20px"
    }}>

      <div className="card" style={{maxWidth:700, textAlign:"center"}}>

        <h1 className="page-title">
          Welcome to SupportFlow AI 🚀
        </h1>

        <p style={{color:"#6b7280", margin:"10px 0 25px"}}>
          An intelligent ticket platform for Clients, Developers & Admins.
        </p>

        <div className="row" style={{justifyContent:"center"}}>

          <button
            className="btn btn-primary"
            onClick={()=>navigate("/login")}
          >
            Login
          </button>

          <button
            className="btn"
            style={{background:"#E5E7EB"}}
            onClick={()=>navigate("/signup")}
          >
            Create Account
          </button>

        </div>

      </div>

    </div>
  );
}
