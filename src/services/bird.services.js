const {Bird} = require("../model");

const create_bird = (data) => {
    return Bird.create(data);
};

const get_bird_s = () => {
    return Bird.find()
}

const delete_bird_s = (id) => {
    return Bird.findByIdAndDelete(id)
}
const update_bird_s = (id,data) => {
    return Bird.findByIdAndUpdate(id,data)
}




module.exports = {
    create_bird,
    get_bird_s,
    delete_bird_s,
    update_bird_s
};
