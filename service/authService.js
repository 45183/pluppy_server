const userRepository = require('../repository/userRepository');
const response = require('../data/responseFrom');
const resTEXT = require('../data/responseString');

exports.isNotLoggedIn = async (req, res, next) => {
  if (!req.isAuthenticated()) next();
  else {
    res
      .status(403)
      .json(
        response.responseFromMessage(
          resTEXT.RESPONSE_TEXT.FAIL,
          resTEXT.AUTH_MESSAGE.FAIL_IS_NOT_LOGIN,
        ),
      );
  }
};

exports.isLoggedIn = async (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log(req);
    next();
  } else {
    res
      .status(403)
      .json(
        response.responseFromMessage(
          resTEXT.RESPONSE_TEXT.FAIL,
          resTEXT.AUTH_MESSAGE.FAIL_IS_LOGIN,
        ),
      );
  }
};
