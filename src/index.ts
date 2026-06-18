import express from 'express';
import healthzRouter from './routes/healthz';

const app = express();

app.use('/api/healthz', healthzRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});