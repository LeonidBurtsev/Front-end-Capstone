// PayTable.jsx
import React, { useState } from 'react';
import '../styles/PayTable.css';

function PayTable({ items = [], onRemoveItem = () => {} }) {
  // Если props.items не массив, используем пустой массив
  const safeItems = Array.isArray(items) ? items : [];

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const parsePrice = priceStr => parseFloat(String(priceStr).replace(/[^0-9.]/g, '')) || 0;
  const total = safeItems.reduce((sum, [, , , price]) => sum + parsePrice(price), 0);

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = {};

    if (safeItems.length === 0) {
      newErrors.items = 'Basket empty !';
    }
    if (!name.trim()) newErrors.name = true;
    if (!address.trim()) newErrors.address = true;
    if (!phone.trim()) newErrors.phone = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const order = {
      items: safeItems,
      name,
      address,
      phone,
    };
    alert(`Order confirmed:\n${JSON.stringify(order, null, 2)}`);
  };

  return (
    <div className="paytable-container">
      <table className="paytable">
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {safeItems.map((item, idx) => (
            <tr key={idx}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
              <td>{item[3]}</td>
              <td>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => onRemoveItem(idx)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="total-row">
            <td colSpan="3"></td>
            <td>Summ total:</td>
            <td>{total.toFixed(2)}$</td>
          </tr>
        </tfoot>
      </table>

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
        <button type="submit" className="order-btn">
          Order and pay
        </button>
      </form>
    </div>
  )
}

export default PayTable;