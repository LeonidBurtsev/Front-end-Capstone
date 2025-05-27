// src/controls/PayComponent.jsx
import React from 'react';
import '../styles/PayTable.css';

/**
 * Компонент для отображения элементов корзины
 * items: Array<{ type, name, descr, price, qty }>
 * onRemoveItem: (index) => void - удаление элемента целиком
 */
export default function PayComponent({ items = [], onRemoveItem = () => {} }) {
  const safeItems = Array.isArray(items) ? items : [];

  // Парсит строку типа "12.59$" в число
  const parsePrice = priceStr => parseFloat(String(priceStr).replace(/[^0-9.]/g, '')) || 0;

  // Общая сумма: price * qty
  const totalSum = safeItems.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.qty,
    0
  );

  return (
    <div className="paytable-container">
      <table className="paytable">
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Description</th>
            <th>Unit Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {safeItems.map((item, idx) => {
            const unit = parsePrice(item.price);
            const lineTotal = (unit * item.qty).toFixed(2) + '$';

            return (
              <tr key={idx}>
                <td>{item.type}</td>
                <td>{item.name}</td>
                <td>{item.descr}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{lineTotal}</td>
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
            );
          })}
        </tbody>
        <tfoot>
          <tr className="total-row">
            <td colSpan="5"></td>
            <td>Sum total:</td>
            <td>{totalSum.toFixed(2)}$</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
