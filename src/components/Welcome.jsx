import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function WelcomePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Calculate the graduation date
  const graduationDate = new Date(selectedDate);
  graduationDate.setFullYear(graduationDate.getFullYear() + 4);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h1 style={{ fontFamily: 'Poppins', fontSize: '32px' }}>Select your Joining Date</h1>
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
      />
      <p style={{ fontSize: '24 px', margin: '20px 0',marginTop: '40px' }}>Your starting date: {selectedDate.toDateString()}</p>
      <p style={{ fontSize: '24px', margin: '5px 0' }}>Your graduation date: {graduationDate.toDateString()}</p>
    </div>
  );
}

export default WelcomePage;
