function ParkingSlots() {

  const slots = [
    "A1",
    "A2",
    "A3",
    "B1",
    "B2"
  ];

  return (
    <div>

      <h2>Available Parking Slots</h2>

      {slots.map((slot) => (
        <p key={slot}>
          {slot}
        </p>
      ))}

    </div>
  );
}

export default ParkingSlots;