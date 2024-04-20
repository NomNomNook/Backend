import express from 'express';
import { PORT }  from "./config"
import adminRouter from './routes/adminRoutes';
import userRouter from './routes/userRoutes';
import analyticsRouter from './routes/analyticsRoutes';
import adminMiddleware from './middlewares/admin';
import userMiddleware from './middlewares/user';

const app = express();


app.use(express.json());

app.use('/admin', adminMiddleware, adminRouter)
app.use('/user', userMiddleware, userRouter)
app.use('/analytics', adminMiddleware, analyticsRouter)
app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
