const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const morgan = require("morgan");

const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const passportConfig = require("./passport");

const { sequelize } = require("./models");
const indexRouter = require("./routes");
const userRouter = require("./routes/userRoute");
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
const productRouter = require("./routes/productRoute");
const cartRouter = require("./routes/cartRoute");
const Category = require("./models/category");
dotenv.config();
passportConfig();

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);
app.use(express.json());

sequelize
	.sync({ force: false })
	.then(() => {
		console.log("데이터베이스 연결 성공");
		const seederFolder = path.join(__dirname, "seeders");
		// seeder 폴더 탐색
		fs.readdirSync(seederFolder).forEach(async (file) => {
			// 시드(seed) 파일 실행
			const seedFile = require(path.join(seederFolder, file));
			const isSeeded = await Category.findOne({
				where: { categoryId: 1 },
			});

			if (!isSeeded) {
				seedFile
					.up(sequelize.getQueryInterface(), sequelize.constructor)
					.then(() =>
						console.log(`${file} 시드(seed) 파일이 성공적으로 실행되었습니다.`)
					)
					.catch((err) =>
						console.error(
							`${file} 시드(seed) 파일 실행 중 오류가 발생했습니다:`,
							err
						)
					);
			}
		});
	})
	.catch((err) => console.error(err));

app.use(
	morgan("dev"),
	express.json(),
	express.urlencoded({ extended: false }),
	cookieParser(process.env.SECRET),
	session({
		resave: false,
		saveUninitialized: false,
		secret: process.env.SECRET,
		cookie: {
			httpOnly: true,
			secure: false,
		},
		name: "session-cookie",
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/product", productRouter);

app.use("/cart", cartRouter);

app.use((err, req, res, next) => {
	console.error(err);
	console.error("[response]", response);

	res
		.status(500)
		.json(
			response.responseFromData(
				resTEXT.RESPONSE_TEXT.FAIL,
				resTEXT.RESPONSE_TEXT.PERMISSION_DENIED,
				err
			)
		);
});

app.listen(app.get("port"), () => {
	console.log(app.get("port"), "번 포트에서 대기 중");
});
