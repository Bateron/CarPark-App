import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

function ParkingHistory() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const q = query(collection(db, "reservations"), orderBy("date", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setRecords(data);
      } catch (err) {
        console.error("Error fetching history:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="page">
      <h2>Parking History</h2>
      {loading ? (
        <p>Loading records...</p>
      ) : records.length === 0 ? (
        <p>No reservation records found.</p>
      ) : (
        <table className="history-table">
          <thead>
            <tr>
              <th>Slot</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {records.map((rec) => (
              <tr key={rec.id}>
                <td>{rec.slot}</td>
                <td>{rec.status}</td>
                <td>{rec.date?.toDate ? rec.date.toDate().toLocaleString() : "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ParkingHistory;