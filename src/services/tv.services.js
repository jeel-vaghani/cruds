const {Tv} = require("../model");

const create_tv = (data) => {
    return Tv.create(data);
};

const get_tv_s = () => {
    return Tv.find()
}

const delete_tv_s = (id) => {
    return Tv.findByIdAndDelete(id)
}
const update_tv_s = (id,data) => {
    return Tv.findByIdAndUpdate(id,data)
}




module.exports = {
    create_tv,
    get_tv_s,
    delete_tv_s,
    update_tv_s
};