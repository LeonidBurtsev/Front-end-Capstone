// BookingTable.jsx
import React, { useState } from 'react';
import MyButton from '../controls/MyButton';
import '../styles/BookingTable.css';

const BookingTable = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);

  const validatePhone = (value) => {
    // count only digits
    const digits = value.replace(/\D/g, '');
    return digits.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePhone(phone)) {
      setPhoneError(true);
      return;
    }
    setPhoneError(false);

    const send_object = {
      date,
      time,
      guests,
      occasion,
      phone,
    };
    alert(`Order confirmed!\n${JSON.stringify(send_object, null, 2)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option>11:00</option>
        <option>12:00</option>
        <option>13:00</option>
        <option>14:00</option>
        <option>15:00</option>
        <option>16:00</option>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        placeholder="1"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      {/* Phone number field with validation */}
      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        placeholder="+1 (555) 123-4567"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
          if (phoneError && validatePhone(e.target.value)) {
            setPhoneError(false);
          }
        }}
        className={phoneError ? 'error' : ''}
      />
      {phoneError && (
        <span className="error-message">
          Please enter at least 6 digits.
        </span>
      )}

      <div className="button-wrapper">
        <MyButton type="submit">
          Reserve a table
        </MyButton>
      </div>
    </form>
  );
};

export default BookingTable;
