import React from 'react';
import './Button.css';

const Button = ({ onClick }) => {
  return (
    <button
      className="button"
      onClick={onClick}  // App.js에서 전달된 onClick 함수 사용
    >
      버튼 누르면 Content 업데이트 됨 {/* 버튼 텍스트 */}
    </button>
  );
};

export default Button;
