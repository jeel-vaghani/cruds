const {Recipes} = require("../model");

const create_recipes = (data) => {
    return Recipes.create(data);
};

const get_recipes_s = () => {
    return Recipes.find()
}

const delete_recipes_s = (id) => {
    return Recipes.findByIdAndDelete(id)
}
const update_recipes_s = (id,data) => {
    return Recipes.findByIdAndUpdate(id,data)
}




module.exports = {
    create_recipes,
    get_recipes_s,
    delete_recipes_s,
    update_recipes_s
};
