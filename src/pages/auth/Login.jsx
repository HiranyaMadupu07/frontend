import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login(){

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "client"
  });

  function update(field, value){
    setForm(prev => ({...prev, [field]: value}));
  }

  function handleSubmit(e){
    e.preventDefault();

    // mock login — replace with backend later
    setUser({
      name: "User",
      email: form.email,
      role: form.role
    });

    if(form.role === "client") navigate("/client/tickets");
    if(form.role === "developer") navigate("/dev/tickets");
    if(form.role === "admin") navigate("/admin/tickets");
  }

  return(
    <div style={{
      display:"grid",
      placeItems:"center",
      minHeight:"100vh",
      background:"#f4f6fb"
    }}>

      <div className="card" style={{width:420}}>

        <h2 className="page-title" style={{textAlign:"center"}}>
          Welcome Back 👋
        </h2>

        <p style={{textAlign:"center", marginBottom:20, color:"#6b7280"}}>
          Login to continue to SupportFlow AI
        </p>

        <form className="form" onSubmit={handleSubmit}>

          <div>
            <label>Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={e=>update("email", e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              required
              value={form.password}
              onChange={e=>update("password", e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <div>
            <label>Login as</label>
            <select
              value={form.role}
              onChange={e=>update("role", e.target.value)}
            >
              <option value="client">Client</option>
              <option value="developer">Developer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button className="btn btn-primary">
            Login
          </button>

        </form>

        <p style={{textAlign:"center", marginTop:14}}>
          Don't have an account?
          <span
            style={{color:"#2563EB", cursor:"pointer", marginLeft:6}}
            onClick={()=>navigate("/signup")}
          >
            Sign up
          </span>
        </p>

      </div>

    </div>
  );
}
