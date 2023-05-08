const express = require('express');
const passport = require('passport');
const path = require('path');
// 라우팅을 파일 단위로 분리 할 수 있음.

const router = express.Router(); // 라우터 객체 생성

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/logout', (req, res) => {
    console.log('Log Out ' + req.user);
    req.logout((err) => {    
        if(err) return next(err);
        res.redirect('/');        
    });    
});

module.exports = router; // 이렇게 라우터를 export 해주면 됨.