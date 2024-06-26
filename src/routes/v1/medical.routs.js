const express = require("express")
const { medical_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-medical",
    //cb => controller
    medical_controller.create_medical_C
)

router.get(
    "/list",
    //controller
    medical_controller.get_medical_c
)


router.delete(
    "/delete-medical",
    //controller
    medical_controller.delete_medical
)

//params
router.delete(
    "/delete-medical/:medicalid",
    //controller
    medical_controller.delete_medical
)

router.put(
    "/update-medical/:update_id",
    //cp => controller
    medical_controller.update_medical
)


module.exports = router