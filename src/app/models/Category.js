import Sequelize, { Model } from 'sequelize';
import 'dotenv/config';

const appUrl = process.env.APP_URL;

class Category extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				path: Sequelize.STRING,
				url: {
					type: Sequelize.VIRTUAL,
					get() {
						return `${appUrl}/category-file/${this.path}`;
					},
				},
			},
			{
				sequelize,
			},
		);
		return this;
	}
}

export default Category;
