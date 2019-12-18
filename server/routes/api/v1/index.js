import express from 'express';

const router = express.Router();

// api v1 routes
router.get('/', (req, res) => {
  res.send('You\'ve reached api/v1 routes');
});

export default router;
