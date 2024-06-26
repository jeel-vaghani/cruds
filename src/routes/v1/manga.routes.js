const express = require("express")
const { manga_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-manga",
    //cb => controller
    manga_controller.create_manga_C
)

router.get(
    "/list",
    //controller
    manga_controller.get_manga_c
)


router.delete(
    "/delete-manga",
    //controller
    manga_controller.delete_manga
)

//params
router.delete(
    "/delete-manga/:mangaid",
    //controller
    manga_controller.delete_manga
)

router.put(
    "/update-manga/:update_id",
    //cp => controller
    manga_controller.update_manga
)


module.exports = router