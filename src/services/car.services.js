const {Car} = require("../model");

const create_car = (data) => {
    return Car.create(data);
};

const get_car_s = () => {
    return Car.find()
}

const delete_car_s = (id) => {
    return Car.findByIdAndDelete(id)
}
const update_car_s = (id,data) => {
    return Car.findByIdAndUpdate(id,data)
}




module.exports = {
    create_car,
    get_car_s,
    delete_car_s,
    update_car_s
};
