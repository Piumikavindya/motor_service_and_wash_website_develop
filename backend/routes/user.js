const express = require('express');
const router = express.Router();
const { signupUser, loginUser,deleteUser, viewUsers, requestPasswordReset, resetPassword,updateUser,changePassword } = require('../controllers/user');

// Signup route
router.post('/signup', signupUser);

// Login route
router.post('/login', loginUser);

// View users rout
router.get('/users', viewUsers);

// Password reset request route
router.post('/password/reset/request', requestPasswordReset);

// Password reset route
router.post('/reset-password/:resetToken', resetPassword);

router.put('/update/:accountId', updateUser);
router.post('/change/:accountId', changePassword);

router.delete('/delete/:accountId', deleteUser);

module.exports = router;
