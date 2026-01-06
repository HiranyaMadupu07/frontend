import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Topbar(){

  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  function logout(){
    setUser(null);
    localStorage.removeItem("authToken");
    navigate("/login");
  }

  return(
    <header className="topbar space-between">

      {/* LEFT SIDE */}
      <div style={{fontWeight:700, fontSize:18}}>
        SupportFlow AI
      </div>


      {/* RIGHT SIDE */}
      {user ? (

        <div className="row">

          <div style={{textAlign:"right"}}>
            <div style={{fontWeight:600}}>
              {user?.name || "User"}
            </div>

            <div style={{fontSize:13, color:"#6b7280"}}>
              {user?.role?.toUpperCase()}
            </div>
          </div>

          {/* AVATAR */}
          <div style={{
            background:"#2563EB",
            color:"#fff",
            width:40,
            height:40,
            borderRadius:"10px",
            display:"grid",
            placeItems:"center",
            fontWeight:"700",
            fontSize:14
          }}>
            {user?.name?.slice(0,2)?.toUpperCase() || "US"}
          </div>

          {/* LOGOUT BUTTON */}
          <button
            className="btn"
            style={{background:"#E5E7EB"}}
            onClick={logout}
          >
            Logout
          </button>

        </div>

      ) : (
        <div>
          <button
            className="btn btn-primary"
            onClick={()=>navigate("/login")}
          >
            Login
          </button>
        </div>
      )}

    </header>
  );
}
