const {Flower} = require("../model");

const create_flower = (data) => {
    return Flower.create(data);
};

const get_flower_s = () => {
    return Flower.find()
}

const delete_flower_s = (id) => {
    return Flower.findByIdAndDelete(id)
}
const update_flower_s = (id,data) => {
    return Flower.findByIdAndUpdate(id,data)
}




module.exports = {
    create_flower,
    get_flower_s,
    delete_flower_s,
    update_flower_s
};
