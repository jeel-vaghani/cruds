const express = require("express")
const { car_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-car",
    //cb => controller
    car_controller.create_car_C
)

router.get(
    "/list",
    //controller
    car_controller.get_car_c
)


router.delete(
    "/delete-car",
    //controller
    car_controller.delete_car
)

//params
router.delete(
    "/delete-car/:carid",
    //controller
    car_controller.delete_car
)

router.put(
    "/update-car/:update_id",
    //cp => controller
    car_controller.update_car
)


module.exports = router
