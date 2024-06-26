const {Series} = require("../model");

const create_area = (data) => {
    return Series.create(data);
};

const get_area_s = () => {
    return Series.find()
}

const delete_area_s = (id) => {
    return Series.findByIdAndDelete(id)
}
const update_area_s = (id,data) => {
    return Series.findByIdAndUpdate(id,data)
}




module.exports = {
    create_area,
    get_area_s,
    delete_area_s,
    update_area_s
};
