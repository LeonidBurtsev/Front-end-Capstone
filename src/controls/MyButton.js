// MyButton.jsx
import React, { useState } from 'react';
import '../index.css'; // здесь ваши CSS-переменные

/**
 * MyButton v1
 *
 * Пропсы:
 * - size: размер шрифта (например, '16px')
 * - family: семейство шрифта (например, 'Arial, sans-serif')
 * - weight: font-weight (например, 400)
 * - paddingX: горизонтальные отступы ('0.5rem', '1em' и т.д.)
 * - disableActive: булевый, если true — отключает цвет активного нажатия
 * - onClick: колбэк при клике
 * - children: содержимое кнопки (текст или иконки)
 */
export default function MyButton({
  size = 'var(--button-font-size)',
  family = 'var(--small-font)',
  weight = 'var(--small-font-weight)',
  paddingX = '2rem',
  paddingY = '1.5rem',
  disableActive = true,
  type = 'button',
  onClick,
  children = 'Click me'
}) {
  const [isHovered, setHovered] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isClicked, setClicked] = useState(false);

  // Базовые стили кнопки
  const baseStyle = {
    display: 'inline-block',
    fontSize: size,
    fontFamily: family,
    fontWeight: weight,
    padding: `${paddingY} ${paddingX}`,
    border: 'none',
    borderRadius: '1rem',
    color : isClicked ? "white" : "black",
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'background-color 0.2s ease'
  };

  // Выбор цвета фона в зависимости от состояния
  let bg = 'var(--secondary-color)';

  if (isHovered) {
    bg = 'var(--third-color)';
  }

  if (isClicked) {
    bg = 'var(--main-color)';
  } 
  else if (isActive && !disableActive) {
    bg = 'var(--secondary-color)';
  } 


  const styles = {
    ...baseStyle,
    backgroundColor: bg
  };

  return (
    <button
      type={type}
      style={styles}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setActive(false);
      }}
      onMouseDown={() => {
        if (!disableActive) setActive(true);
          // при каждом отпускании кнопки переключаем clicked
        else setClicked(true);
      }}
      onMouseUp={() => {
        if (!disableActive) {
          // при каждом отпускании кнопки переключаем clicked
          setClicked(prev => !prev);
        }
        else setClicked(false);
        setActive(false);
        onClick?.();
      }}
    >
      {children}
    </button>
  );
}
