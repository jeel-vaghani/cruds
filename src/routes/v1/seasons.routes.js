
const express = require("express")
const { seasons_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-seasons",
    //cb => controller
    seasons_controller.create_seasons_C
)

router.get(
    "/list",
    //controller
    seasons_controller.get_seasons_c
)


router.delete(
    "/delete-seasons",
    //controller
    seasons_controller.delete_seasons
)

//params
router.delete(
    "/delete-seasons/:seasonsid",
    //controller
    seasons_controller.delete_seasons
)

router.put(
    "/update-seasons/:update_id",
    //cp => controller
    seasons_controller.update_seasons
)


module.exports = router