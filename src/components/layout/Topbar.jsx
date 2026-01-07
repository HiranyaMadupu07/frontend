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

      {/* LEFT */}
      <div style={{fontWeight:700, fontSize:18, cursor:"pointer"}}
           onClick={()=>navigate("/")}>
        SupportFlow AI
      </div>


      {/* RIGHT */}
      {user ? (
        <div className="row">

          <div style={{textAlign:"right"}}>
            <div style={{fontWeight:600}}>
              {user?.name}
            </div>
            <div style={{fontSize:13, color:"#6b7280"}}>
              {user?.role?.toUpperCase()}
            </div>
          </div>

          <button className="btn" style={{background:"#E5E7EB"}}
                  onClick={logout}>
            Logout
          </button>

        </div>
      ) : (
        <div className="row">
          <button className="btn"
            style={{background:"#E5E7EB"}}
            onClick={()=>navigate("/login")}>
            Login
          </button>

          <button className="btn btn-primary"
            onClick={()=>navigate("/signup")}>
            Signup
          </button>
        </div>
      )}

    </header>
  );
}
