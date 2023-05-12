const express = require('express');
const passport = require('passport');
const path = require('path');
// 라우팅을 파일 단위로 분리 할 수 있음.

const router = express.Router(); // 라우터 객체 생성

router.get('/', (req, res) => {
    const loggedIn = req.isAuthenticated(); // 템플릿 적용 후 -> 로그인 여부에 따라 페이지 다르게 렌더링    
    console.log('loggedIn : ' + loggedIn);
    res.render('index', { loggedIn });
});

router.get('/logout', (req, res) => { // logout 도 post로 전환해야할지 고민중.
    console.log('Log Out ' + req.user.id);
    req.logout((err) => {    
        if(err) return next(err);
        res.redirect('/');        
    });    
});

// router.get('/clearCache', (req, res) => {
//     delete require.cache[require.resolve('./index.js')];
//     res.send('Cache cleared!');
//   });

module.exports = router; // 이렇게 라우터를 export 해주면 됨.