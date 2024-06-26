const express = require("express")
const { pet_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-pet",
    //cb => controller
    pet_controller.create_pet_C
)

router.get(
    "/list",
    //controller
    pet_controller.get_pet_c
)


router.delete(
    "/delete-pet",
    //controller
    pet_controller.delete_pet
)

//params
router.delete(
    "/delete-pet/:petid",
    //controller
    pet_controller.delete_pet
)

router.put(
    "/update-pet/:update_id",
    //cp => controller
    pet_controller.update_pet
)


module.exports = router





