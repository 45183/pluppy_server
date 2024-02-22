const bcrypt = require("bcrypt");
const userRepository = require("../repository/userRepository");

exports.createUser = async (email, name, password, phone) => {
	const userChecked = await userRepository.findUserByEmail(email);
	if (userChecked) {
		console.error(`[UserService]유저 추가를 실패.`);
		throw "이미 등록된 사용자 아이디입니다.";
	}
	const hash = await bcrypt.hash(password, 12);
	const user = await userRepository.createUser(email, name, hash, phone);
	return user;
};

exports.findAllUser = async () => {
	console.log(`[UserService] 유저정보 요청`);
	const user = await userRepository.findAllUser();
	if (!user) {
		console.error("[UserService] 유저 정보 없음");
		throw `유저 정보 없음`;
	}
	return user;
};

exports.getUser = async (email) => {
	const user = await userRepository.getUser(email);
	if (!user) throw `[UserService] ${email} 유저 정보 없음`;
	return user;
};
