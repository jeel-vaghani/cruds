const {Library} = require("../model");

const create_library = (data) => {
    return Library.create(data);
};

const get_library_s = () => {
    return Library.find()
}

const delete_library_s = (id) => {
    return Library.findByIdAndDelete(id)
}
const update_library_s = (id,data) => {
    return Library.findByIdAndUpdate(id,data)
}




module.exports = {
    create_library,
    get_library_s,
    delete_library_s,
    update_library_s
};
