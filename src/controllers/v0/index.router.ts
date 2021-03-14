import { Router, Request, Response } from 'express';

import { User } from './model.index';
import { AuthRouter, requireAuth } from './auth/routes/auth.router';

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/', async (req: Request, res: Response) => {
	// res.send('/api/v0/auth');
});

router.get('/:id', async (req: Request, res: Response) => {
	let { id } = req.params;
	const item = await User.findOne({
		where: { email: id },
		attributes: ['email', 'createdAt', 'updatedAt'],
	});
	res.send(item);
});

export const IndexRouter: Router = router;
