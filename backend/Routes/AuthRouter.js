const { signupValidation } = require('../Middleware/Authvalidation');
const { signup } = require('../Controllers/AuthController');

const router = require('express').Router();

router.post('/login',(req,res)=>{
    res.send('login Success');
});

router.post('/signup',signupValidation,signup);

module.exports = router;