const {Anime} = require("../model");

const create_anime = (data) => {
    return Anime.create(data);
};

const get_anime_s = () => {
    return Anime.find()
}

const delete_anime_s = (id) => {
    return Anime.findByIdAndDelete(id)
}
const update_anime_s = (id,data) => {
    return Anime.findByIdAndUpdate(id,data)
}




module.exports = {
    create_anime,
    get_anime_s,
    delete_anime_s,
    update_anime_s
};
