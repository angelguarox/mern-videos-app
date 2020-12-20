export default {
	database: {
		database: process.env.DATABASE || 'mernvideosapp',
		username: process.env.USER || 'root',
		password: process.env.PASSWORD || '098098',
		host: process.env.HOST || 'localhost',
		dialect: 'mysql'
	},
	optionsMongo: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: true,
		useCreateIndex: true
	},
	server: {
		PORT: process.env.PORT || 4000
	}
}
