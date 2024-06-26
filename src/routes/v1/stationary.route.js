const express = require("express")
const { stationary_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-stationary",
    //cb => controller
    stationary_controller.create_stationary_C
)

router.get(
    "/list",
    //controller
    stationary_controller.get_stationary_c
)


router.delete(
    "/delete-stationary",
    //controller
    stationary_controller.delete_stationary
)

//params
router.delete(
    "/delete-stationary/:stationaryid",
    //controller
    stationary_controller.delete_stationary
)

router.put(
    "/update-stationary/:update_id",
    //cp => controller
    stationary_controller.update_stationary
)


module.exports = router