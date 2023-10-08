const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use('local-signup', new LocalStrategy({
    usarnameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req,email,password,done)=>{
    
}));