import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="page">
      <h2>Settings</h2>
      <button onClick={logout} className="btn-danger">Logout</button>
    </div>
  );
}

export default Settings;