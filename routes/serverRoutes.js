const express=require("express");
const router=express.Router();
const flipController=require('../controller/flipController');
const validate = require('../validations/auth.Validation');

router.route('/register')
.get(flipController.getFlipRegisters)
.post(validate.authSchemaValidation,flipController.postFlipRegisters)
.delete(flipController.delFlipUser)

router.route('/login')
.get(flipController.getFlipLogin)
.post(validate.authSchemaValidation,flipController.postFlipLogin)

router.route('/login/forgotpassword')
.get(flipController.getFlipFpsswrdUser)
.patch(flipController.patchFlipFpsswrdUser)

router.route('/login/changepassword')
.get(flipController.getFlipCpsswrdUser)
.patch(flipController.postFlipCpsswrdUser)


module.exports=router;

