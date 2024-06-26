const {Seasons} = require("../model");

const create_seasons = (data) => {
    return Seasons.create(data);
};

const get_seasons_s = () => {
    return Seasons.find()
}

const delete_seasons_s = (id) => {
    return Seasons.findByIdAndDelete(id)
}
const update_seasons_s = (id,data) => {
    return Seasons.findByIdAndUpdate(id,data)
}




module.exports = {
    create_seasons,
    get_seasons_s,
    delete_seasons_s,
    update_seasons_s
};