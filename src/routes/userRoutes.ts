import { Router } from 'express';
import userController from '../controllers/userController'
const userRouter = Router();

userRouter.post('/login', userController.login);
userRouter.post('/signup', userController.signup);
userRouter.get('/reservations', userController.getReservations);
userRouter.get('/reservation/:id', userController.getReservationById);
userRouter.post('/reservation/new', userController.createReservation);
userRouter.put('/reservation/update/:id', userController.updateReservation);
userRouter.post('/reservation/cancel/:id', userController.cancelReservation);
userRouter.post('/provide-rating/:res_id', userController.provideRating);

export default userRouter