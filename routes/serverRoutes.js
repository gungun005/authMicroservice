const express=require("express");
const router=express.Router();
const flipController=require('../controller/flipController');
router.route('/register')
.get(flipController.getFlipRegisters)
.post(flipController.postFlipRegisters)

router.route('/login')
.get(flipController.getFlipLogin)
.post(flipController.postFlipLogin)

router.route('/login/forgotpassword')
.get(flipController.getFlipFpsswrdUser)
.post(flipController.postFlipFpsswrdUser)

router.route('/login/changepassword')
.get(flipController.getFlipCpsswrdUser)
.post(flipController.postFlipCpsswrdUser)


router.route('/delete')
.delete(flipController.delFlipUser)
module.exports=router;

