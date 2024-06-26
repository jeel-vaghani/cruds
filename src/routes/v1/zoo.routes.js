const express = require("express")
const { zoo_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-zoo",
    //cb => controller
    zoo_controller.create_zoo_C
)

router.get(
    "/list",
    //controller
    zoo_controller.get_zoo_c
)


router.delete(
    "/delete-zoo",
    //controller
    zoo_controller.delete_zoo
)

//params
router.delete(
    "/delete-zoo/:zooid",
    //controller
    zoo_controller.delete_zoo
)

router.put(
    "/update-zoo/:update_id",
    //cp => controller
    zoo_controller.update_zoo
)


module.exports = router