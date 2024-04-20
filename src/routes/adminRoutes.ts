// import express from 'express';
import { Router } from 'express';
import adminController from '../controllers/adminController'
const adminRouter = Router();

adminRouter.post('/login', adminController.login);
adminRouter.post('/signup', adminController.signup);
adminRouter.get('/restaurants/:id', adminController.getRestaurants);
adminRouter.get('/restaurant/:id', adminController.getRestaurant);
adminRouter.get('/restaurant/menu/:id', adminController.getMenu);
adminRouter.post('/restaurant/new', adminController.createRestaurant);
adminRouter.put('/restaurant/update/:id', adminController.updateRestaurant);
adminRouter.put('/restaurant/mark-offline/:id', adminController.markRestaurantOffline);
adminRouter.get('/restaurant/reservations', adminController.getRestaurantReservations);
adminRouter.put('/restaurant/reservation/cancel', adminController.cancelRestaurantReservation);
adminRouter.put('/restaurant/reservation/update', adminController.updateRestaurantReservation);




export default adminRouter;



