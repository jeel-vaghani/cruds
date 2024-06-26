const {Actor} = require("../model");

const create_actor = (data) => {
    return Actor.create(data);
};

const get_actor_s = () => {
    return Actor.find()
}

const delete_actor_s = (id) => {
    return Actor.findByIdAndDelete(id)
}
const update_actor_s = (id,data) => {
    return Actor.findByIdAndUpdate(id,data)
}




module.exports = {
    create_actor,
    get_actor_s,
    delete_actor_s,
    update_actor_s
};
