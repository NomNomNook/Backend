import express from 'express';
import { PORT }  from "./config"
import adminRouter from './routes/adminRoutes';
import userRouter from './routes/userRoutes';
import analyticsRouter from './routes/analyticsRoutes';

const app = express();


app.use(express.json());

app.use('/admin', adminRouter)
app.use('/user', userRouter)
app.use('/analytics', analyticsRouter)
app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
