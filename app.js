const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('./')); // express.static -> CSS, JS 등의 정적 파일 요청을 처리해줌.

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'sidebar.html'));
  //const homeData = { message: 'Hello, HomePage!' };
  //res.json(data);
});

app.get('/side', (req, res) => {
  res.sendFile(path.join(__dirname, 'sidebar.html'));
  //const homeData = { message: 'Hello, HomePage!' };
  //res.json(data);
});

app.get('/api/data', (req, res) => {
  const data = { message: 'Hello, api data example' };
  res.json(data);
});

app.listen(app.get('port'), () => {
  console.log('서버 실행');
});