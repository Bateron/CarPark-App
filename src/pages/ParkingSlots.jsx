import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function ParkingSlots() {
  const allSlots = ["A1", "A2", "A3", "B1", "B2"];
  const [reserved, setReserved] = useState([]);

  useEffect(() => {
    const fetchReserved = async () => {
      const snapshot = await getDocs(collection(db, "reservations"));
      const slots = snapshot.docs.map((doc) => doc.data().slot);
      setReserved(slots);
    };
    fetchReserved();
  }, []);

  return (
    <div className="page">
      <h2>Parking Slots</h2>
      <div className="slots-grid">
        {allSlots.map((slot) => {
          const isOccupied = reserved.includes(slot);
          return (
            <div key={slot} className={`slot-card ${isOccupied ? "occupied" : "available"}`}>
              <span>{slot}</span>
              <small>{isOccupied ? "Occupied" : "Available"}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ParkingSlots;