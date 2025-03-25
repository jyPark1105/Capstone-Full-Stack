import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';  // Content 컴포넌트 임포트
import Button from './components/Button';
import Chat from './Chat';
import UnityGame from './components/UnityGame';

function App() {
  const [message, setMessage] = useState('');

  // API 호출로 초기 메시지 가져오기
  useEffect(() => {
    fetch('http://localhost:8000/api/example/')
      .then(response => response.json())
      .then(data => setMessage(data.message || 'Loading...'));
  }, []);

  // 버튼 클릭 시 메시지 변경
  const handleButtonClick = () => {
    setMessage('버튼이 클릭됐다!');
  };

  return (
    <div className="flex min-h-screen"> {/* min-h-screen 사용하여 최소화된 화면 크기 문제 해결 */}
      
      {/* Sidebar: 왼쪽 고정 */}
      <div className="w-1/4 bg-gray-800 text-white">
        <Sidebar />
      </div>

      {/* Main Content 영역 */}
      <div className="flex-1 p-6 space-y-6"> {/* space-y-6으로 요소들 간격을 넓힘 */}
        
        {/* 상단 블로그 제목 */}
        <div className="flex justify-center mb-6">
          <h1 className="text-4xl font-bold text-blue-500">{message}</h1>
        </div>

        {/* 버튼 클릭 시 메시지 변경 */}
        <div className="flex justify-center mb-6">
          <Button onClick={handleButtonClick} />
        </div>

        {/* Content 컴포넌트 추가 */}
        <div className="flex justify-center mb-6">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <Content />  {/* 여기에 Content 컴포넌트 추가 */}
          </div>
        </div>

        {/* Unity 게임과 Chat을 위아래로 배치 */}
        <div className="space-y-6"> {/* space-y-6으로 상하 간격을 넓힘 */}
          {/* Unity 게임 */}
          <div className="flex justify-center">
            <div className="w-full md:w-2/3 lg:w-1/2"> {/* 화면에 맞게 크기 조정 */}
              <UnityGame />
            </div>
          </div>

          {/* Chat */}
          <div className="flex justify-center">
            <div className="w-full md:w-2/3 lg:w-1/3"> {/* 화면에 맞게 크기 조정 */}
              <Chat />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
