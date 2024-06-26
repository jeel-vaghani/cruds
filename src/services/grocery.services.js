const {Grocery} = require("../model");

const create_grocery = (data) => {
    return Grocery.create(data);
};

const get_grocery_s = () => {
    return Grocery.find()
}

const delete_grocery_s = (id) => {
    return Grocery.findByIdAndDelete(id)
}
const update_grocery_s = (id,data) => {
    return Grocery.findByIdAndUpdate(id,data)
}




module.exports = {
    create_grocery,
    get_grocery_s,
    delete_grocery_s,
    update_grocery_s
};
