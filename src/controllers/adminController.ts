import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import adminService from '../services/adminService';
import { JWT_SECRET } from '../config';

class AdminController {
    async login(req: Request, res: Response) {
        // get the user name adn password from headers
        try {
            // return JWT token
            const { username, password } = req.body

            const admin = await adminService.login(username, password)
            if (admin) {
                const token = jwt.sign({
                    username,
                    adminId: admin.id,
                }, JWT_SECRET);

                res.status(200).json({
                    token
                });
            } else {
                res.status(401).json({
                    "message": "Invalid username or password"
                });
            }
        } catch (error ) {
            res.status(404).json({
                message: "Invalid username or password"
            })
        }
    }

    async signup(req: Request, res: Response) {
        try {
            const adminData = req.body
            await adminService.signup(adminData)
            res.status(200).json({success: true});
        } catch (error) {
            res.status(404).json({
                message: "Invalid Data"
            })
        }
    }

    async getRestaurants(req: Request, res: Response) {
        try {
            const adminId = req.headers.adminId;
            if (adminId) {
                const restaurants = await adminService.getRestaurants(adminId)
                res.status(200).json({restaurants})
            } else {
                res.status(401).json({
                    message: "Invalid Token",
                });
            }
        } catch (error) {
            res.status(401).json({
                message: "Invalid Token",
            });
        }
    }

    async getRestaurant (req: Request, res: Response) {
        try {
            const restaurantId: any = req.params.id;
            const adminId: any = req.headers.adminId;

            if (adminId && restaurantId) {
                const restaurant = await adminService.getRestaurantById(restaurantId, adminId)
                res.status(200).json({restaurant});
            }
        } catch (error) {
            res.status(401).json({
                message: "Invalid Token",
            })
        }
    }

    async getMenu(req: Request, res: Response) {
        try {
            const restaurantId: number = parseInt(req.params.id);
            if (restaurantId) {

                const menuItems = await adminService.getMenu(restaurantId)
                res.status(200).json({menuItems});
            } else {
                res.status(404).json({ message: "Invalid" })    
            }
        } catch (error) {
        }
    }

    async createRestaurant(req: Request, res: Response) {
        try {
            const restaurantData = req.body

            await adminService.createRestaurant(restaurantData)
            res.status(200).json({ success: true })

        } catch (error) {
            res.status(403).json({ error })
        };
    }

    async updateRestaurant(req: Request, res: Response) {
        try {
            const restaurantData = req.body
            const restaurantId = parseInt(req.params.id)
            await adminService.updateRestaurant(restaurantId, restaurantData)
            res.status(201).json({ message: "updated" })
        } catch (error) {
            res.status(403).json({ message: "error updating restaurant"})
        }
    }

    async markRestaurantOffline(req: Request | any , res: Response) {
        try {
            const restaurantId = req.params.id;
            const adminId = req.admin.id
            const restaurant = await adminService.markRestaurantOffline(restaurantId, adminId)
        } catch (error) {
            res.status(403).json({ message: "error marking restaurant offline"})
        }
    }

    async getRestaurantReservations(req: Request |any , res: Response) {
        try {
            const id = req.params.id
            const reservations = await adminService.getRestaurantReservations(id)
            res.status(200).json(reservations)
        } catch (error) {
            res.status(404).json({ error: error })
        }
    }

    async cancelRestaurantReservation(req: Request | any, res: Response) {
        // Implement cancel restaurant reservation logic
        try {
            const id = parseInt(req.params.id)
            const adminId = req.admin.id
            await adminService.updateRestaurantReservation(id, { status: 3 },  adminId)
            res.status(200).json({ message: "Restaurant reservation was canceled"})
        } catch (error) {
            res.status(403).json({ message: "error in updating Restaurant reservation"})
        }
    }

    async updateRestaurantReservation(req: Request | any, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const adminId = req.admin.id
            const updateData = req.body
            await adminService.updateRestaurantReservation(id, updateData, adminId)
            res.status(200).json({ message: "Restaurant reservation was updated"})
        } catch (error) {
            res.status(403).json({ message: "error in updating Restaurant reservation"})
        }
    }
}

export default new AdminController();