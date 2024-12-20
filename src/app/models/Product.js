import Sequelize, { Model } from 'sequelize';
import 'dotenv/config';

const appUrl = process.env.APP_URL;

class Product extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				price: Sequelize.INTEGER,
				path: Sequelize.STRING,
				offer: Sequelize.BOOLEAN,
				url: {
					type: Sequelize.VIRTUAL,
					get() {
						return `${appUrl}/product-file/${this.path}`;
					},
				},
			},
			{
				sequelize,
			},
		);
		return this;
	}
	static associate(models) {
		this.belongsTo(models.Category, {
			foreignKey: 'category_id',
			as: 'category',
		});
	}
}

export default Product;
