const { check, validationResult } = require('express-validator');

exports.authSchemaValidation = [
    check('email').isEmail(),
    check('password').isAlphanumeric(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        else next();
    }
];