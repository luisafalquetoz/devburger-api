import 'dotenv/config';

const pgHost = process.env.PG_HOST;
const pgPort = process.env.PG_PORT;
const pgUsername = process.env.PG_USERNAME;
const pgPassword = process.env.PG_PASSWORD;

module.exports = {
	dialect: 'postgres',
	host: pgHost,
	port: pgPort,
	username: pgUsername,
	password: pgPassword,
	database: 'devburger',
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
	},
};
