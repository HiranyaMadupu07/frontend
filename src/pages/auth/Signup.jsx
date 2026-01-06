import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Signup(){

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "client"
  });

  function update(field, value){
    setForm(prev => ({...prev, [field]: value}));
  }

  function handleSubmit(e){
    e.preventDefault();

    // mock signup — backend later
    setUser({
      name: form.name,
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
          Create Account ✨
        </h2>

        <p style={{textAlign:"center", marginBottom:20, color:"#6b7280"}}>
          Join SupportFlow AI to manage tickets smarter
        </p>

        <form className="form" onSubmit={handleSubmit}>

          <div>
            <label>Full Name</label>
            <input
              required
              value={form.name}
              onChange={e=>update("name", e.target.value)}
              placeholder="John Doe"
            />
          </div>

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
            <label>Register as</label>
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
            Create Account
          </button>

        </form>

        <p style={{textAlign:"center", marginTop:14}}>
          Already have an account?
          <span
            style={{color:"#2563EB", cursor:"pointer", marginLeft:6}}
            onClick={()=>navigate("/login")}
          >
            Login
          </span>
        </p>

      </div>

    </div>
  );
}
