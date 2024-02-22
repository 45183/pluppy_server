const userService = require('../service/userService');
const response = require('../data/responseFrom');
const resTEXT = require('../data/responseString');

exports.createUser = async (req, res, next) => {
  const { email, name, password, phone } = req.body;
  await userService
    .createUser(email, name, password, phone)
    .then(() =>
      res
        .status(200)
        .json(
          response.responseFromMessage(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.USER_MESSAGE.CREATE),
        ),
    )
    .catch((err) => next(err));
};

exports.getUser = async (req, res, next) => {
  await userService
    .findAllUser()
    .then((user) =>
      res
        .status(200)
        .json(
          response.responseFromData(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.USER_MESSAGE.GET, user),
        ),
    )
    .catch((err) => next(err));
};

exports.findUser = async (req, res, next) => {
  await userService
    .getUser(req.params.userId)
    .then((user) =>
      res.json(
        response.responseFromData(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.USER_MESSAGE.GET, user),
      ),
    )
    .catch((err) => next(err));
};
