import { Router } from 'express';
import analyticsController from '../controllers/analyticsController'
const analyticsRouter = Router();

analyticsRouter.get('/footfall/avg/:restaurantId', analyticsController.calculateAvgFootfall);
analyticsRouter.get('/ctr/:restaurantId', analyticsController.calculateCTR);
analyticsRouter.get('/search_rate/:restaurantId', analyticsController.calculateSearchRate);

export default analyticsRouter