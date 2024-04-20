import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import adminService from '../services/adminService';
import { JWT_SECRET } from '../config';

class AdminController {
    async login(req: Request, res: Response) {
        // get the user name adn password from headers
        try {
            // return JWT token
            const username = req.body.username
            const password = req.body.password

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
            const name = req.body.name;
            const email = req.body.email;
            const password = req.body.password;
            const phone = req.body.phone;

            if ( email && password && phone) {
                await adminService.signup({name, email, password, phone})
                res.status(200).json({success: true});
            } else {
                console.log(req.body);
                throw new Error();
            }

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
            const { name, registrationNumber , gstNumber, fssaiNumber, subscriptionId, adminId, isActive, isVerified, description, seatsAvailable } = req.body

            if ( name && registrationNumber && gstNumber && fssaiNumber && subscriptionId && adminId && isActive && isVerified && description && seatsAvailable ) {
                await adminService.createRestaurant({name, registrationNumber, gstNumber, fssaiNumber, subscriptionId, adminId, isActive, isVerified, description, seatsAvailable})
                res.status(200).json({ success: true })
            }

        } catch (error) {
        };
    }

    async updateRestaurant(req: Request, res: Response) {
        // Implement update restaurant logic
    }

    async markRestaurantOffline(req: Request, res: Response) {
        // Implement mark restaurant offline logic
    }

    async getRestaurantReservations(req: Request, res: Response) {
        // Implement get restaurant reservations logic
    }

    async cancelRestaurantReservation(req: Request, res: Response) {
        // Implement cancel restaurant reservation logic
    }

    async updateRestaurantReservation(req: Request, res: Response) {
        // Implement update restaurant reservation logic
    }
}

export default new AdminController();