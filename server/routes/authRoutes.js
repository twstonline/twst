const { Router } = require('express');
const router = Router();

const {
  // signup,
  // signin
  getCurrentUser,
  // sendOtp,
  verifyOtp,
  sendWhatsAppOtp,
  googleLogin,
  facebookLogin
} = require("../controllers/authController");
const authorization = require("../middlewares/authorization");

// router.post("/register", signup);
// router.post("/login", signin);
router.post('/google-login', googleLogin);       
router.post('/facebook-login', facebookLogin);       

router.get("/user", authorization, getCurrentUser);
// router.post('/send-otp',sendOtp);
router.post('/verify-otp',verifyOtp);

router.post('/send-whatsapp-otp', sendWhatsAppOtp);

module.exports = router;
