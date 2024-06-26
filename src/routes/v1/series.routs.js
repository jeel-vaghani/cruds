const express = require("express")
const { series_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-series",
    //cb => controller
    series_controller.create_series_C
)

router.get(
    "/list",
    //controller
    series_controller.get_series_c
)


router.delete(
    "/delete-series",
    //controller
    series_controller.delete_series
)

//params
router.delete(
    "/delete-series/:seriesid",
    //controller
    series_controller.delete_series
)

router.put(
    "/update-series/:update_id",
    //cp => controller
    series_controller.update_series
)


module.exports = router