import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const SLOTS = ["A1", "A2", "A3", "B1", "B2"];

function Reservations() {
  const [slot, setSlot] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const reserveSlot = async () => {
    if (!slot) {
      setError("Please select a slot.");
      return;
    }
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      await addDoc(collection(db, "reservations"), {
        slot,
        status: "Reserved",
        date: new Date(),
      });
      setMessage(`Slot ${slot} successfully reserved!`);
      setSlot("");
    } catch (err) {
      setError("Failed to reserve. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="page">
      <h2>Reserve a Parking Slot</h2>
      <select value={slot} onChange={(e) => setSlot(e.target.value)} className="input-field">
        <option value="">-- Select a Slot --</option>
        {SLOTS.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
      <button onClick={reserveSlot} disabled={loading} className="btn-primary">
        {loading ? "Reserving..." : "Reserve"}
      </button>
      {message && <p className="msg-success">{message}</p>}
      {error && <p className="msg-error">{error}</p>}
    </div>
  );
}

export default Reservations;