import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Reservation {}
interface Restaurant {
name: string
registrationNumber: 'REG123',
gstNumber: 'GST123',
fssaiNumber: 'FSSAI123',
subscriptionId: 1, // Assuming trial plan
adminId: 1, // Assuming admin ID 1
isVerified: true,
isActive: true,
description: 'A sample restaurant',
seatsAvailable: 50,
}

interface AdminData {
    password: string;
    email: string;
    name: string;
    phone: string;
}

class AdminService {
    async login(username: string, password: string) {
        return await prisma.admin.findUnique({
            where: {
                email: username
            }
        });
    }

    async signup(adminData: AdminData) {
        await prisma.admin.create({ data: adminData })
    }

    async getRestaurants(adminId: string | any) {
        const allRestaruants = await prisma.restaurant.findMany({
            where: {
                adminId: parseInt(adminId)
            }
        })

        return allRestaruants
    }

    async getRestaurantById( restaurantId: string | any, adminId: string | any) {
        const restaurant = await prisma.restaurant.findUnique({
            where: {
                adminId: parseInt(adminId),
                id: parseInt(restaurantId)
            }
        })
        return restaurant
    }

    async getMenu(restaurantId: number) {
        const menuItems = await prisma.item.findMany({
            where: {
                restaurantId: restaurantId
            }
        })

        return menuItems
    }

    async createRestaurant(restaurantData: any) {
        await prisma.restaurant.create(restaurantData)
    }

    async updateRestaurant(
        restaurantId: number,
        updateData: Partial<Restaurant>
    ) {
        await prisma.restaurant.update({
            where: {
                id: restaurantId
            },
            data: updateData
        })
    }

    async markRestaurantOffline(restaurantId: number) {
        // Implement mark restaurant offline logic
    }

    async getRestaurantReservations(restaurantId: number) {
        // Implement get restaurant reservations logic
    }

    async cancelRestaurantReservation(reservationId: number) {
        // Implement cancel restaurant reservation logic
    }

    async updateRestaurantReservation(
        reservationId: number,
        updateData: Partial<Reservation>
    ) {
        // Implement update restaurant reservation logic
    }
}

export default new AdminService();