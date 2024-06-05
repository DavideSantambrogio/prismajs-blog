const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTag = async (name) => {
    try {
        const tag = await prisma.tag.create({
            data: {
                name: name,
            },
        });
        console.log('Tag created:', tag);
        return tag;
    } catch (error) {
        console.error('Error creating tag:', error);
        throw error;
    }
};

module.exports = { createTag };