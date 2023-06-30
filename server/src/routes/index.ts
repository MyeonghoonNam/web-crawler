import express from 'express';

import { getScrapPage } from '../controllers';

const router = express.Router();

router.get('/', getScrapPage);

export default router;
