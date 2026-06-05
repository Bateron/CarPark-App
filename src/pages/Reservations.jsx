import { useState } from "react";
import { db } from "../firebase/firebaseConfig";

import {
  collection,
  addDoc
} from "firebase/firestore";

function Reservations() {

  const [slot, setSlot] = useState("");

  const reserveSlot = async () => {

    await addDoc(
      collection(db, "reservations"),
      {
        slot,
        status: "Reserved",
        date: new Date()
      }
    );

    alert("Reservation Saved");

  };

  return (
    <div>

      <h2>Reserve Parking Slot</h2>

      <input
        placeholder="Slot Number"
        onChange={(e) => setSlot(e.target.value)}
      />

      <button onClick={reserveSlot}>
        Reserve
      </button>

    </div>
  );
}

export default Reservations;