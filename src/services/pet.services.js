const {Pet} = require("../model");

const create_pet = (data) => {
    return Pet.create(data);
};

const get_pet_s = () => {
    return Pet.find()
}

const delete_pet_s = (id) => {
    return Pet.findByIdAndDelete(id)
}
const update_pet_s = (id,data) => {
    return Pet.findByIdAndUpdate(id,data)
}




module.exports = {
    create_pet,
    get_pet_s,
    delete_pet_s,
    update_pet_s
};