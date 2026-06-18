import express from 'express';
import healthzRouter from './routes/healthz';

const app = express();

app.use('/api/healthz', healthzRouter);

app.get('/', (req, res) => {
  res.send('<footer>Health Check: <a href="/api/healthz">Check Status</a></footer>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});