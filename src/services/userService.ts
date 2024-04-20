// src/services/userService.ts
import { PrismaClient } from '@prisma/client';

interface User {
    
}

interface Reservation {

}




const prisma = new PrismaClient();

class UserService {
    async login(username: string, password: string): Promise<any> {
        // Find user by username and password
        const user = await prisma.user.findUnique({
            where: {
                email: username,
            },
        });

        if (!user || user.password !== password) {
            throw new Error('Invalid username or password');
        }

        return user;
    }

    async signup(userData: any): Promise<any> {
        const newUser = await prisma.user.create({
            data: userData,
        });

        return newUser;
    }

    async getReservations(userId: number): Promise<any> {
        // Retrieve reservations for a user
        // const reservations = await prisma.reservation.findMany({
        //     where: {
        //         userId,
        //     },
        // });

        // return reservations;
    }

    async getReservationById(reservationId: number): Promise<any> {
        // Retrieve a reservation by ID
        // const reservation = await prisma.reservation.findUnique({
        //     where: {
        //         id: reservationId,
        //     },
        // });

        // return reservation;
    }

    async createReservation(reservationData: {
        userId: number;
        date: Date;
        restaurantId: number;
        persons: number;
        order: Record<number, number>;
        // Add more fields as needed
    }): Promise<any> {
        // Create a new reservation
        // const newReservation = await prisma.reservation.create({
        //     data: reservationData,
        // });

        // return newReservation;
    }

    async updateReservation(
        reservationId: number,
        updateData: Partial<Reservation>
    ): Promise<void> {
        // Update a reservation
        // await prisma.reservation.update({
        //     where: {
        //         id: reservationId,
        //     },
        //     data: updateData,
        // });
    }

    async cancelReservation(reservationId: number): Promise<void> {
        // Cancel a reservation
        // await prisma.reservation.delete({
        //     where: {
        //         id: reservationId,
        //     },
        // });
    }

    async provideRating(
        reservationId: number,
        stars: number,
        desc: string
    ): Promise<void> {
        // Provide rating for a reservation
        // await prisma.reservation.update({
        //     where: {
        //         id: reservationId,
        //     },
        //     data: {
        //         rating: {
        //             create: {
        //                 stars,
        //                 desc,
        //             },
        //         },
        //     },
        // });
    }
}

export default new UserService();
