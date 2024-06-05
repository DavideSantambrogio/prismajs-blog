const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createPost = (data, callback) => {
    prisma.post.create({
        data: data,
        include: {
            category: true,
            tags: true,
        },
    })
    .then((post) => {
        console.log('Post created:', post);
        callback(post);
    })
    .catch((error) => {
        console.error('Error creating post:', error);
    });
};

const readPost = (slug, callback) => {
    prisma.post.findUnique({
        where: {
            slug: slug,
        },
        include: {
            category: true,
            tags: true,
        },
    })
    .then((post) => {
        console.log('Post found:', post);
        callback(post);
    })
    .catch((error) => {
        console.error('Error reading post:', error);
    });
};

const listPosts = (callback) => {
    prisma.post.findMany({
        include: {
            category: true,
            tags: true,
        },
    })
    .then((posts) => {
        console.log('Posts:', posts);
        callback(posts);
    })
    .catch((error) => {
        console.error('Error listing posts:', error);
    });
};

const updatePost = (id, data, callback) => {
    prisma.post.update({
        where: {
            id: id,
        },
        data: data,
        include: {
            category: true,
            tags: true,
        },
    })
    .then((post) => {
        console.log('Post updated:', post);
        callback(post);
    })
    .catch((error) => {
        console.error('Error updating post:', error);
    });
};

const deletePost = (id, callback) => {
    prisma.post.delete({
        where: {
            id: id,
        },
    })
    .then((post) => {
        console.log('Post deleted:', post);
        callback(post);
    })
    .catch((error) => {
        console.error('Error deleting post:', error);
    });
};

module.exports = {
    createPost,
    readPost,
    listPosts,
    updatePost,
    deletePost,
};
