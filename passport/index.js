const passport = require("passport");
const local = require("./local");
const kakao = require("./kakao");
const userRepository = require("../repository/userRepository");

module.exports = () => {
	passport.serializeUser((user, done) => {
		done(null, user.userId);
	});

	passport.deserializeUser((userId, done) => {
		userRepository
			.findUserByUserId(userId)
			.then((user) => {
				console.log("deserializeUser");
				done(null, user);
			})
			.catch((err) => done(err));
	});

	local();
	// kakao();
};
