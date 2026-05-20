//const createError = require('http-errors');
const { body, validationResult } = require('express-validator');
const validate = {};

validate.contactRules = () => { 
    return [
        body("firstName")
            .notEmpty()
            .withMessage("First name is required"),
        body("lastName")
            .notEmpty()
            .withMessage("Last name is required"),
        body("email")
            .isEmail()
            .withMessage("Valid email is required"),
        body("favoriteColor")
            .notEmpty()
            .withMessage("Favorite color is required"),
        body("birthday")
            .matches(/^\d{2}\/\d{2}\/\d{4}$/)
            .withMessage("Valid birthday is required")
    ]
}

validate.checkContactData = (req, res, next) => {
    let errors = []
    errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = validate;
