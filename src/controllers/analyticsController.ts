import { Request, Response } from 'express';
import analyticsService from '../services/analyticsService';

class AnalyticsController {
    async calculateAvgFootfall(req: Request, res: Response) {
        // Implement calculate average footfall logic
        
        const footfall = await analyticsService.calculateAvgFootfall(req.params.restaurantId);

        res.status(200).json({footfall});
    }

    async calculateCTR(req: Request, res: Response) {
        // Implement calculate CTR logic
        const ctr = await analyticsService.calculateCTR(req.params.restaurantId);
        res.status(200).json({ctr});
    }

    async calculateSearchRate(req: Request, res: Response) {
        // Implement calculate search rate logic
        const searchRate = await analyticsService.calculateSearchRate(req.params.restaurantId);
        res.status(200).json({searchRate});
    }
}

export default new AnalyticsController();