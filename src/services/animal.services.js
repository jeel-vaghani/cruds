const {Animal} = require("../model");

const create_animal = (data) => {
    return Animal.create(data);
};

const get_animal_s = () => {
    return Animal.find()
}

const delete_animal_s = (id) => {
    return Animal.findByIdAndDelete(id)
}
const update_animal_s = (id,data) => {
    return Animal.findByIdAndUpdate(id,data)
}




module.exports = {
    create_animal,
    get_animal_s,
    delete_animal_s,
    update_animal_s
};
