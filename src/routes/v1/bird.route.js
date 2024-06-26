const express = require("express")
const { bird_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-bird",
    //cb => controller
    bird_controller.create_bird_C
)

router.get(
    "/list",
    //controller
    bird_controller.get_bird_c
)


router.delete(
    "/delete-bird",
    //controller
    bird_controller.delete_bird
)

//params
router.delete(
    "/delete-bird/:birdid",
    //controller
    bird_controller.delete_bird
)

router.put(
    "/update-bird/:update_id",
    //cp => controller
    bird_controller.update_bird
)


module.exports = router
