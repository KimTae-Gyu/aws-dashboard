const express = require('express');
const path = require('path');
const session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

const app = express();
const cors = require("cors"); // cors 설정을 편안하게 하는 패키지

app.use(cors({
  origin: "http://127.0.0.1:3000", // 접근 권한을 부여하는 도메인
  credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
  optionsSuccessStatus: 200, // 응답 상태 200으로 설정
}));

app.use(express.static(path.join(__dirname, '.'))); // 정적 파일(html, css) 접근하게 해주는 코드
app.use(express.urlencoded({extended:false})); // URL-encoded 데이터를 추출해 req.body에 저장, 없으면 POST로 보낸 데이터 접근 불가
app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'Origin'); // 모든 출처 허용

  if (req.method === 'OPTIONS') {
    // Preflight 요청에 대한 응답 처리
    res.sendStatus(200);
  } else {
    next();
  }
});

passport.serializeUser((user, done) => { // strategy 성공 시 호출
    console.log('serial', user);
    done(null, user); // user가 deserializeUser의 첫 번째 매개 변수
});

passport.deserializeUser((user, done) => { // user는 serial..의 done의 user
    console.log('deserial', user);
    done(null, user); // 이 user가 req.user가 됨.
});

const data = {
    id: 'kim',
    password: 'tae'
};

passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
    session: true
}, (id, password, done) => {
    if(id === data.id) {
        if(password === data.password){
            done(null, data);
        } else {
            done(null, false, { message: '비밀번호가 틀렸습니다.' });
        }
    } else {
        done(null, false, { message: 'ID가 틀렸습니다.' });
    }
}));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.post('/login', passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login'
// }));

// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, 'login.html'));
// });

// app.get('/test', (req, res) => {
//     res.sendFile(path.join(__dirname, 'd2_main.html'));
// });

//추가
app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, 'd2_main.html'));
});

app.get('/location', (req, res) => {
    const ipAddress = '219.240.87.167';
  
    const apiUrl = `https://geolite.info/geoip/v2.1/city/${ipAddress}`;
    const username = '867355';
    const password = '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';
    // API 호출
    fetch(apiUrl,{
        headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Request failed. Status:', response.status);
        }
      })
      .then(data => {
        res.json(data); // API 응답을 클라이언트에게 전달
      })
      .catch(error => {
        console.error('Request failed:', error.message);
        res.status(500).json({ error: 'Request failed' });
      });
  });

  app.listen(process.env.PORT || 3000, (req, res) => {
    console.log('3000번 포트 서버 실행 중');
  });