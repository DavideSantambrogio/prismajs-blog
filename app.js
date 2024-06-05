const {
    createPost,
    readPost,
    listPosts,
    updatePost,
    deletePost,    
} = require('./utils/crudPost');

const {
    createCategory    
} = require('./utils/createCategory');

const {
    createTag    
} = require('./utils/createTag');

// Dati per creare un post
const postData = {
    title: "Il mio primo post",
    slug: "il-mio-primo-post",
    image: "https://example.com/image.jpg",
    content: "Questo è il contenuto del mio primo post.",
    published: true,
    createdAt: new Date(), // Data di creazione attuale
    updatedAt: new Date(), // Data di aggiornamento attuale
    categoryId: 1, // ID della categoria associata al post (da modificare in base alla tua struttura)
    tags: [1, 2] // ID dei tag associati al post (da modificare in base alla tua struttura)
};

// Dati per creare una categoria
const categoryData = {
    name: "Tecnologia"
};

// Dati per creare un tag
const tagData = {
    name: "JavaScript"
};

// Creazione della categoria
createCategory(categoryData.name, (category) => {
    console.log('Categoria creata:', category);
});

// Creazione del tag
createTag(tagData.name, (tag) => {
    console.log('Tag creato:', tag);
});

// Creazione del post
createPost(postData, (post) => {
    console.log('Post creato:', post);
});
