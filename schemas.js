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
        body: Joi.string().required()
    }).required()
})

module.exports.reviewSchema = reviewSchema;
module.exports.recipeSchema = recipeSchema;