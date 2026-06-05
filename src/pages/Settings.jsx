import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

function Settings() {

  const logout = async () => {

    await signOut(auth);

    alert("Logged Out");

  };

  return (
    <div>

      <h2>Settings</h2>

      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default Settings;