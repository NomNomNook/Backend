// import express from 'express';
import { Router } from 'express';
import adminController from '../controllers/adminController'
import adminMiddleware from '../middlewares/admin';
const adminRouter = Router();

adminRouter.post('/login', adminMiddleware,  adminController.login);
adminRouter.post('/signup', adminMiddleware,  adminController.signup);
adminRouter.get('/restaurants/:id',  adminMiddleware, adminController.getRestaurants);
adminRouter.get('/restaurant/:id',  adminMiddleware, adminController.getRestaurant);
adminRouter.get('/restaurant/menu/:id',  adminMiddleware, adminController.getMenu);
adminRouter.post('/restaurant/new',  adminMiddleware, adminController.createRestaurant);
adminRouter.put('/restaurant/update/:id',  adminMiddleware, adminController.updateRestaurant);
adminRouter.put('/restaurant/mark-offline/:id',  adminMiddleware, adminController.markRestaurantOffline);
adminRouter.get('/restaurant/reservations',  adminMiddleware, adminController.getRestaurantReservations);
adminRouter.put('/restaurant/reservation/cancel',  adminMiddleware, adminController.cancelRestaurantReservation);
adminRouter.put('/restaurant/reservation/update',  adminMiddleware, adminController.updateRestaurantReservation);




export default adminRouter;



