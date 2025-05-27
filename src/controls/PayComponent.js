// PayComponent.jsx
import React from 'react';
import '../styles/PayTable.css';

function PayComponent({ items = [], onRemoveItem = () => {} }) {
  const safeItems = Array.isArray(items) ? items : [];
  const parsePrice = priceStr => parseFloat(String(priceStr).replace(/[^0-9.]/g, '')) || 0;
  const total = safeItems.reduce((sum, [, , , price]) => sum + parsePrice(price), 0);

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
    </div>
  );
}

export default PayComponent;