import { check, validationResult } from "express-validator";

export const userValidation = [
  check("firstName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("First name is missing!"),
  check("lastName").trim().not().isEmpty().withMessage("Last name is missing!"),
  check("email").isEmail().withMessage("Email is invalid!"),
  check("mobile")
    .trim()
    .isMobilePhone()
    .withMessage("Enter a valid mobile number!"),
  check("city").trim().not().isEmpty().withMessage("City name is missing!"),
  check("state").trim().not().isEmpty().withMessage("State name is missing!"),
  check("pinCode").trim().not().isEmpty().withMessage("Pin code is missing!"),
  check("country")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Country name is missing!"),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req).array();
  if (errors.length) {
    return res.json({ error: errors[0].msg });
  }

  next();
};
