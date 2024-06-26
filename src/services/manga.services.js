const {Manga} = require("../model");

const create_manga = (data) => {
    return Manga.create(data);
};

const get_manga_s = () => {
    return Manga.find()
}

const delete_manga_s = (id) => {
    return Manga.findByIdAndDelete(id)
}
const update_manga_s = (id,data) => {
    return Manga.findByIdAndUpdate(id,data)
}




module.exports = {
    create_manga,
    get_manga_s,
    delete_manga_s,
    update_manga_s
};
