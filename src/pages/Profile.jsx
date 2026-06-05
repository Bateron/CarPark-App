import { useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  return (
    <div className="page">
      <h2>User Profile</h2>
      {user ? (
        <div className="profile-card">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>User ID:</strong> {user.uid}</p>
          <p><strong>Account Created:</strong> {new Date(user.metadata.creationTime).toLocaleString()}</p>
          <p><strong>Last Sign-In:</strong> {new Date(user.metadata.lastSignInTime).toLocaleString()}</p>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

export default Profile;