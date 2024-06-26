const express = require("express")
const { anime_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-anime",
    //cb => controller
    anime_controller.create_anime_C
)

router.get(
    "/list",
    //controller
    anime_controller.get_anime_c
)


router.delete(
    "/delete-anime",
    //controller
    anime_controller.delete_anime
)

//params
router.delete(
    "/delete-anime/:animeid",
    //controller
    anime_controller.delete_anime
)

router.put(
    "/update-anime/:update_id",
    //cp => controller
    anime_controller.update_anime
)


module.exports = router