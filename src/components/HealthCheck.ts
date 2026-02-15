import express from 'express';

const router = express.Router();

router.get('/healthz', (req, res) => {
  res.status(200).send({ status: 'ok' });
});

export default router;