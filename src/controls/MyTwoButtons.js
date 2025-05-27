import React from 'react';
import '../styles/MyTwoButtons.css';

export default function MyTwoButtons({ onAdd, onRemove }) {
  return (
    <div className="two-buttons">
      <button
        type="button"
        className="two-buttons__btn two-buttons__btn--add"
        onClick={onAdd}
      >
        Add
      </button>
      <button
        type="button"
        className="two-buttons__btn two-buttons__btn--remove"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  );
}
