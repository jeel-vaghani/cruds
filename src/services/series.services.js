const {Series} = require("../model");

const create_series = (data) => {
    return Series.create(data);
};

const get_series_s = () => {
    return Series.find()
}

const delete_series_s = (id) => {
    return Series.findByIdAndDelete(id)
}
const update_series_s = (id,data) => {
    return Series.findByIdAndUpdate(id,data)
}




module.exports = {
    create_series,
    get_series_s,
    delete_series_s,
    update_series_s
};
