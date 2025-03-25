import React from 'react';
import './UnityGame.css';  // 스타일 파일 임포트

const UnityGame = () => {
  return (
    <div className="unity-game-container">
      {/* Unity WebGL 게임 iframe 로드 */}
      <iframe
        src="/unitybuild/index.html"  // public 폴더에서 상대 경로
        title="Unity WebGL Game"
        className="unity-iframe"
      />
    </div>
  );
};

export default UnityGame;
