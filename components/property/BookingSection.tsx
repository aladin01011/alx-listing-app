import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const getTotalDays = () => {
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const timeDiff = outDate.getTime() - inDate.getTime();
    return timeDiff > 0 ? Math.ceil(timeDiff / (1000 * 3600 * 24)) : 0;
  };

  const total = getTotalDays() * price;

  return (
    <div className="sticky top-8 border p-4 rounded shadow-md bg-white w-full max-w-md">
      <h3 className="text-xl font-bold">${price}/night</h3>

      <div className="mt-4">
        <label className="block">Check-in</label>
        <input type="date" className="border w-full p-2" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      </div>

      <div className="mt-4">
        <label className="block">Check-out</label>
        <input type="date" className="border w-full p-2" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </div>

      <div className="mt-4">
        <p>Total Payment: <strong>${total}</strong></p>
      </div>

      <button className="w-full mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-600">Reserve Now</button>
    </div>
  );
};

export default BookingSection;
