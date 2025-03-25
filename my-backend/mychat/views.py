import openai
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json

class ChatWithGptView(APIView):
    def post(self, request):
        try:
            # 요청 바디를 디버깅하면서 확인
            print("요청 바디:", request.body)
            data = request.data  # request.data로 자동 파싱 처리됨

            print("파싱된 데이터:", data)  # 파싱된 데이터 확인
            user_message = data.get("message", "")

            if not user_message:
                return Response({"error": "No message provided"}, status=status.HTTP_400_BAD_REQUEST)

            # OpenAI API 호출 (1.0.0 이상 방식으로 수정)
            response = openai.completions.create(
                model="gpt-3.5-turbo",  # 모델 이름 수정
                prompt=user_message,     # prompt 필드 사용
                max_tokens=150           # 예시로 max_tokens 추가
            )

            # OpenAI 응답 반환
            return Response({"message": response["choices"][0]["text"]}, status=status.HTTP_200_OK)

        except json.JSONDecodeError as e:
            # JSON 파싱 에러 발생 시
            print("JSON 파싱 에러:", e)
            return Response({"error": "Invalid JSON format"}, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            # 다른 일반적인 에러 처리
            print("기타 에러:", e)
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
