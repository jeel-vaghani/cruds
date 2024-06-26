const express = require("express")
const { area_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-area",
    //cb => controller
    area_controller.create_area_C
)

router.get(
    "/list",
    //controller
    area_controller.get_area_c
)


router.delete(
    "/delete-area",
    //controller
    area_controller.delete_area
)

//params
router.delete(
    "/delete-area/:areaid",
    //controller
    area_controller.delete_area
)

router.put(
    "/update-area/:update_id",
    //cp => controller
    area_controller.update_area
)


module.exports = router