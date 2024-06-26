const express = require("express")
const { actor_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-actor",
    //cb => controller
    actor_controller.create_actor_C
)

router.get(
    "/list",
    //controller
    actor_controller.get_actor_c
)


router.delete(
    "/delete-actor",
    //controller
    actor_controller.delete_actor
)

//params
router.delete(
    "/delete-actor/:actorid",
    //controller
    actor_controller.delete_actor
)

router.put(
    "/update-actor/:update_id",
    //cp => controller
    actor_controller.update_actor
)


module.exports = router