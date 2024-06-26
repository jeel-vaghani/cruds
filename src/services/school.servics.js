const {School} = require("../model");

const create_school = (data) => {
    return School.create(data);
};

const get_school_s = () => {
    return School.find()
}

const delete_school_s = (id) => {
    return School.findByIdAndDelete(id)
}
const update_school_s = (id,data) => {
    return School.findByIdAndUpdate(id,data)
}




module.exports = {
    create_school,
    get_school_s,
    delete_school_s,
    update_school_s
};
