// seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
    try {
        // Create plans
        await prisma.plan.createMany({
            data: [
                { type: 'trial', pricePerMonth: 0, pricePerYear: 0 },
                { type: 'lite', pricePerMonth: 10, pricePerYear: 100 },
                { type: 'standard', pricePerMonth: 20, pricePerYear: 200 },
                { type: 'premium', pricePerMonth: 30, pricePerYear: 300 },
            ],
        });

        // Create admin
        await prisma.admin.create({
            data: {
                email: 'admin@example.com',
                password: 'password123',
                name: "John",
                phone: "1234567890"
            },
        });

        // Create user
        await prisma.user.create({
            data: {
                name: 'John Doe',
                email: 'john@example.com',
                password: 'john123',
                phone: '1234567890',
                birthday: new Date('1990-01-01'),
                anniversary: new Date('2020-01-01'),
            },
        });

        // create subscription
        await prisma.subscription.create({
            data: {
                planId: 2,
                adminId: 1,
                planType: "monthly",
                startDate: new Date(),
                endDate: new Date()
            }
        });



        // Create restaurant
        await prisma.restaurant.create({
            data: {
                name: 'Sample Restaurant',
                registrationNumber: 'REG123',
                gstNumber: 'GST123',
                fssaiNumber: 'FSSAI123',
                subscriptionId: 1, // Assuming trial plan
                adminId: 1, // Assuming admin ID 1
                isVerified: true,
                isActive: true,
                description: 'A sample restaurant',
                seatsAvailable: 50,
            },
        });

        // Add more seed data as needed

        console.log('Seed data populated successfully');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        await prisma.$disconnect();
    }
}

seed();
