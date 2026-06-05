import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const register = async () => {
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message.includes("email") ? "Invalid or already used email." : "Password must be at least 6 characters.");
    }
  };

  return (
    <div className="page">
      <h2>Register</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password (min 6 chars)" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
      {error && <p className="msg-error">{error}</p>}
      <p style={{marginTop:"12px"}}>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
}

export default Register;