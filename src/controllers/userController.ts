import userService from "../services/userService";
import jwt from "jsonwebtoken"

import { Request, Response } from "express";
import { JWT_SECRET } from "../config";


class UserController {
    async login (req: Request, res: Response) {
        const { username, password } = req.body;
        try {
            const user = await userService.login(username, password);
            if (user) {
                const token = jwt.sign({
                    username,
                    userId: user.id,
                }, JWT_SECRET);

                res.status(200).json({
                    token
                });
            }
            res.status(200).json(user);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    };
    
    async signup (req: Request, res: Response) {
        const userData = req.body;
        try {
            const newUser = await userService.signup(userData);
            res.status(201).json(newUser);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    };
    
    async getReservations (req: Request | any, res: Response) {
        // Assuming userId is available in request object after authentication
        const userId = req.user.id;
        try {
            const reservations = await userService.getReservations(userId);
            res.status(200).json(reservations);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    };
    
    async getReservationById (req: Request, res: Response) {
        const reservationId = parseInt(req.params.id);
        try {
            const reservation = await userService.getReservationById(reservationId);
            res.status(200).json(reservation);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    };
    
    async createReservation (req: Request, res: Response) {
        const reservationData = req.body;
        try {
            const newReservation = await userService.createReservation(reservationData);
            res.status(201).json(newReservation);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    };
    
    async updateReservation (req: Request, res: Response) {
        const reservationId = parseInt(req.params.id);
        const updateData = req.body;
        try {
            await userService.updateReservation(reservationId, updateData);
            res.status(200).json({ message: 'Reservation updated successfully' });
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    };
    
    async cancelReservation (req: Request, res: Response) {
        const reservationId = parseInt(req.params.id);
        try {
            await userService.cancelReservation(reservationId);
            res.status(200).json({ message: 'Reservation canceled successfully' });
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    };
    
    async provideRating (req: Request, res: Response) {
        const reservationId = parseInt(req.params.res_id);
        const { stars, desc } = req.body;
        try {
            await userService.provideRating(reservationId, stars, desc);
            res.status(200).json({ message: 'Rating provided successfully' });
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    };
}

export default new UserController();