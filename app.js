const express = require('express');
const path = require('path');
const session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

const app = express();

app.use(express.static(path.join(__dirname, '.'))); // 정적 파일(html, css) 접근하게 해주는 코드
app.use(express.urlencoded({extended:false})); // URL-encoded 데이터를 추출해 req.body에 저장, 없으면 POST로 보낸 데이터 접근 불가
app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'd1_login.html'));
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'd1_login.html'));
});

//추가
app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, 'd2_main.html'));
});

app.listen(process.env.PORT || 3000, (req, res) => {
  console.log('3000번 포트 서버 실행 중')
});
