const {Stationary} = require("../model");

const create_stationary = (data) => {
    return Stationary.create(data);
};

const get_stationary_s = () => {
    return Stationary.find()
}

const delete_stationary_s = (id) => {
    return Stationary.findByIdAndDelete(id)
}
const update_stationary_s = (id,data) => {
    return Stationary.findByIdAndUpdate(id,data)
}




module.exports = {
    create_stationary,
    get_stationary_s,
    delete_stationary_s,
    update_stationary_s
};
