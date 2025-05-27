// PayTable.jsx
import React, { useState } from 'react';
import PayComponent from './PayComponent';
import MyButton from './MyButton';
import '../styles/PayTable.css';

function PayTable({ items = [], onRemoveItem = () => {} }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = {};

    if (items.length === 0) {
      newErrors.items = 'Basket empty !';
    }
    if (!name.trim()) newErrors.name = true;
    if (!address.trim()) newErrors.address = true;
    if (!phone.trim()) newErrors.phone = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const order = {
      items,
      name,
      address,
      phone,
    };
    alert(`Order confirmed:\n${JSON.stringify(order, null, 2)}`);
  };

  return (
    <div>
      <PayComponent items={items} onRemoveItem={onRemoveItem} />

      <form className="order-form" onSubmit={handleSubmit} noValidate>
        <div className={`form-group ${errors.name ? 'error' : ''}`}>  
          <label>Name : </label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className={`form-group ${errors.address ? 'error' : ''}`}>  
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />
        </div>
        <div className={`form-group ${errors.phone ? 'error' : ''}`}>  
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
          />
        </div>
        {errors.items && <div className="form-error">{errors.items}</div>}
        <MyButton type="submit">Order and pay</MyButton>
      </form>
    </div>
  );
}

export default PayTable;
