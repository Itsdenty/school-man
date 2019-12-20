import Transformer from '../../utils/transformer';

const Validator = {};

Validator.create = (req, res, next) => {
  req.checkBody('email', 'invalid email supplied').optional().isEmailV2();
  req.checkBody('phone_number', 'The phone number must be equal to 11 digits').optional().isLengthEqual(14);
  req.checkBody('username', 'the name supplied is invalid').isName();
  req.checkBody('firstname', 'the name supplied is invalid').optional().isName();
  req.checkBody('password', 'password must be at least 6 digits and less than 50 digits').isName();
  req.checkBody('lastname', 'the name supplied is invalid').optional().isName();
  req.asyncValidationErrors()
    .then(next)
    .catch(errors => res.status(400).json(Transformer.transformResponse(400,
      Transformer.transformExpressValidationErrors(errors))));
};
module.exports = Validator;
