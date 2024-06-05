const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createCategory = async (name) => {
    try {
        const category = await prisma.category.create({
            data: {
                name: name,
            },
        });
        console.log('Category created:', category);
        return category;
    } catch (error) {
        console.error('Error creating category:', error);
        throw error;
    }
};

module.exports = { createCategory };