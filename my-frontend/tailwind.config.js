module.exports = {
    content: [ // 어떤 파일에서 Tailwind 클래스를 사용하고 있는지 지정
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
              customPink: '#f9a8d4',
              customBlue: '#60a5fa',
            },
          },
    },
    plugins: [],
  };