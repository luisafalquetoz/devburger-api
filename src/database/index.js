import mongoose from 'mongoose';
import Sequelize from 'sequelize';

import configDatabase from '../config/database';
import 'dotenv/config';

import Category from '../app/models/Category';
import Product from '../app/models/Product';
import User from '../app/models/Users';

const models = [User, Product, Category];
const mongoUrl = process.env.MONGO_URL;

class Database {
	constructor() {
		this.init();
		this.mongo();
	}

	init() {
		this.connection = new Sequelize(configDatabase);
		models
			.map((model) => model.init(this.connection))
			.map(
				(model) => model.associate && model.associate(this.connection.models),
			);
	}

	mongo() {
		this.mongoConnection = mongoose.connect(mongoUrl);
	}
}

export default new Database();
