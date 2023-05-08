const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = () => {
    passport.serializeUser((user, done) => { // strategy 성공 시 호출
        console.log('serial', user);
        done(null, user); // user가 deserializeUser의 첫 번째 매개 변수
    });
    
    passport.deserializeUser((user, done) => { // user는 serial..의 done의 user
        // # 세션에 담긴 req.user의 정보를 데이터베이스에 저장된 정보와 일치하는지 계속하여 검증하는 코드가 들어가야 함
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
}