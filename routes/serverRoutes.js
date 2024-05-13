const express=require("express");
const router=express.Router();
const flipController=require('../controller/flipController');
router.route('/register')
.get(flipController.getFlipRegisters)
.post(flipController.postFlipRegisters)
.delete(flipController.delFlipUser)

router.route('/login')
.get(flipController.getFlipLogin)
.post(flipController.postFlipLogin)

router.route('/login/forgotpassword')
.get(flipController.getFlipFpsswrdUser)
.patch(flipController.patchFlipFpsswrdUser)

router.route('/login/changepassword')
.get(flipController.getFlipCpsswrdUser)
.patch(flipController.postFlipCpsswrdUser)


module.exports=router;

