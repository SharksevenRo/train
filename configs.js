module.exports = {

	isAuth: true,

	isInit: 0,
	port: 8089,

	isDBAvailable: false,

	sync: false,
	cookie: {
		signed: false,
		expires: new Date(Date.now + 30 * 60 * 1000),
		path: "/",
		domain: "gospely.com"
			//domain: "localhost"
	},
	mail: {
		host: "smtp.exmail.qq.com", // 主机
		secureConnection: true, // 使用 SSL
		port: 465, // SMTP 端口
		auth: {
			user: "account@dodora.cn", // 账号
			pass: "doraCN2016" // 密码
		}
	},
}
