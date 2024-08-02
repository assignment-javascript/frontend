const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 정적 파일 제공을 위해 'public' 디렉토리를 설정
app.use(express.static(path.join(__dirname, 'src')));

// 루트 경로에서 index.html을 제공
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});


// /report 경로에서 report.html을 제공
app.get('/report', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'report.html'));
});


// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
