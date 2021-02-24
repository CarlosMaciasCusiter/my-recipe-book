const Joi = require('joi');
const { number } = require('joi')

const recipeSchema = Joi.object({
    recipe: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        instructions: Joi.array().required(),
        ingredients: Joi.array().required(),
    }).required(),
    deleteImages: Joi.array()
});

const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        body: Joi.string().required()
    }).required()
})

module.exports.reviewSchema = reviewSchema;
module.exports.recipeSchema = recipeSchema;