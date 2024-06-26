const express = require("express")
const { flower_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-flower",
    //cb => controller
    flower_controller.create_flower_C
)

router.get(
    "/list",
    //controller
    flower_controller.get_flower_c
)


router.delete(
    "/delete-flower",
    //controller
    flower_controller.delete_flower
)

//params
router.delete(
    "/delete-flower/:flowerid",
    //controller
    flower_controller.delete_flower
)

router.put(
    "/update-flower/:update_id",
    //cp => controller
    flower_controller.update_flower
)


module.exports = router
