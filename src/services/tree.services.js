const {Tree} = require("../model");

const create_tree = (data) => {
    return Tree.create(data);
};

const get_tree_s = () => {
    return Tree.find()
}

const delete_tree_s = (id) => {
    return Tree.findByIdAndDelete(id)
}
const update_tree_s = (id,data) => {
    return Tree.findByIdAndUpdate(id,data)
}




module.exports = {
    create_tree,
    get_tree_s,
    delete_tree_s,
    update_tree_s
};
