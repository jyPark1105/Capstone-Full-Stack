import { useState } from "react";
import './Chat.css';

function ChatComponent() {
    const [message, setMessage] = useState("");   // 사용자가 입력한 메시지
    const [response, setResponse] = useState(""); // 서버 응답
    const [error, setError] = useState(""); // 에러 메시지

    const sendMessage = async () => {
        if (!message) return; // 빈 메시지 방지
        
        console.log("전송할 메시지:", message); // 메시지 확인

        try {
            const res = await fetch("http://127.0.0.1:8000/mychat/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
            });

            // 서버 응답이 실패한 경우
            if (!res.ok) {
                const errorData = await res.json();
                console.error("서버 오류:", errorData);
                setError("서버 오류: " + (errorData.error || "알 수 없는 오류"));

                // 429 오류 처리 (할당량 초과)
                if (errorData.error.code === "insufficient_quota") {
                    setError("API 할당량을 초과했습니다. 잠시 후 다시 시도해 주세요.");
                }
                return;
            }
            
            // 서버 응답을 JSON으로 파싱
            const data = await res.json();
            console.log("서버 응답:", data);  // 응답 확인
            setResponse(data.message || "응답을 받을 수 없습니다.");
            setError("");  // 에러 메시지 초기화

        } catch (err) {
            console.error("오류 발생:", err);
            setError("서버와의 통신 중 오류가 발생했습니다.");
        } /*리액트 앱에서 값을 적어서 보내면 이게 Django API 서버(백엔드) -> OpenAI API 서버로 보낸대*/
    };

    return (
        <div className="chat-box">  {/* chat-box 클래스 적용 */}
            <h2>질문을 입력하세요:</h2>
            <input 
                className="chat-input"
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="질문 입력"
            />
            <button className="chat-button" onClick={sendMessage}>질문 보내기</button>  {/* chat-button 클래스 적용 */}

            {error && <p className="error">{error}</p>}  {/* error 클래스 적용 */}

            <h3>응답:</h3>
            <p className="response">{response}</p>  {/* response 클래스 적용 */}
        </div>
    );
}

export default ChatComponent;
