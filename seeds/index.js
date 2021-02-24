const mongoose = require('mongoose');
const recipes = require('./seedRecipes');
const Recipe = require('../models/recipe');

mongoose.connect('mongodb://localhost:27017/recipe-book', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await Recipe.deleteMany({});

    for(let i = 0; i < recipes.length; i++) {
        console.log(recipes[i]['title'])
        const newRecipe = new Recipe({
            title: recipes[i]['title'],
            description: recipes[i]['description'],
            ingredients: recipes[i]['ingredients'],
            instructions: recipes[i]['instructions'],
            author: '6029b9f092486d2140e60353',
            images: [
                {
                    url: 'https://res.cloudinary.com/ddan7jzxa/image/upload/v1613444044/RecipeBook/wp5trrgv09gyjroepnia.jpg',
                    filename: 'RecipeBook/wp5trrgv09gyjroepnia',
                },
                {
                    url: 'https://res.cloudinary.com/ddan7jzxa/image/upload/v1613444044/RecipeBook/ntbz8aninb7jnfejwbff.jpg',
                    filename: 'RecipeBook/ntbz8aninb7jnfejwbff',
                },
            ]
        })
        await newRecipe.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})