import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="text-xl font-semibold mb-4">목록</h2>
      <ul>
        <li className="mb-2"><button href="#">게임1</button></li>
        <li className="mb-2"><button href="#">게임2</button></li>
        <li className="mb-2"><button href="#">Sidebar.js</button></li>
        <li className="mb-2"><button href="#">사이드바</button></li>
      </ul>
    </div>
  );
}

export default Sidebar;
