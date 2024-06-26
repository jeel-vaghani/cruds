const express = require("express")
const { animal_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-animal",
    //cb => controller
    animal_controller.create_animal_C
)

router.get(
    "/list",
    //controller
    animal_controller.get_animal_c
)


router.delete(
    "/delete-animal",
    //controller
    animal_controller.delete_animal
)

//params
router.delete(
    "/delete-animal/:animalid",
    //controller
    animal_controller.delete_animal
)

router.put(
    "/update-animal/:update_id",
    //cp => controller
    animal_controller.update_animal
)


module.exports = router
