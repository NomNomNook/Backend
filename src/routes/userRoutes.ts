import { Router } from 'express';
import userController from '../controllers/userController'
import userMiddleware from '../middlewares/user';
const userRouter = Router();

userRouter.post('/login', userMiddleware, userController.login);
userRouter.post('/signup', userController.signup);
userRouter.get('/reservations', userMiddleware, userController.getReservations);
userRouter.get('/reservation/:id', userMiddleware, userController.getReservationById);
userRouter.post('/reservation/new', userMiddleware, userController.createReservation);
userRouter.put('/reservation/update/:id',userMiddleware,  userController.updateReservation);
userRouter.post('/reservation/cancel/:id',userMiddleware,  userController.cancelReservation);
userRouter.post('/provide-rating/:res_id',userMiddleware,  userController.provideRating);

export default userRouter