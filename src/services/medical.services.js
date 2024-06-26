const {Medical} = require("../model");

const create_medical = (data) => {
    return Medical.create(data);
};

const get_medical_s = () => {
    return Medical.find()
}

const delete_medical_s = (id) => {
    return Medical.findByIdAndDelete(id)
}
const update_medical_s = (id,data) => {
    return Medical.findByIdAndUpdate(id,data)
}




module.exports = {
    create_medical,
    get_medical_s,
    delete_medical_s,
    update_medical_s
};
