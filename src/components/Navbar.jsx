import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <h2>Car Park System</h2>

      <Link to="/">Home</Link>
      <Link to="/slots">Parking Slots</Link>
      <Link to="/reserve">Reserve</Link>
      <Link to="/history">History</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/settings">Settings</Link>

    </nav>
  );
}

export default Navbar;