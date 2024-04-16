import { Router } from 'express';
const router = Router();

import newsRouter from './news.router';

router.use('/news', newsRouter);

export default router;