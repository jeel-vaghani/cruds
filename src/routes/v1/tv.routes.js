
const express = require("express")
const { tv_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-tv",
    //cb => controller
    tv_controller.create_tv_C
)

router.get(
    "/list",
    //controller
    tv_controller.get_tv_c
)


router.delete(
    "/delete-tv",
    //controller
    tv_controller.delete_tv
)

//params
router.delete(
    "/delete-tv/:tvid",
    //controller
    tv_controller.delete_tv
)

router.put(
    "/update-tv/:update_id",
    //cp => controller
    tv_controller.update_tv
)


module.exports = router