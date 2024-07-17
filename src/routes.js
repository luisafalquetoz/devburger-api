import { Router } from 'express';
import { v4 } from 'uuid';

import User from './app/models/User';
import { password } from './config/database';

const routes = new Router();

routes.get('/', async (request, response) => {
	const user = await User.create({
		id: v4(),
		name: 'Luisa',
		email: 'luisafalqueto@email.com',
		password_hash: 'dygewf87fysdgyfg',
	});

	return response.status(201).json(user);
});

export default routes;
