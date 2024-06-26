const express = require("express")
const { school_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-school",
    //cb => controller
    school_controller.create_school_C
)

router.get(
    "/list",
    //controller
    school_controller.get_school_c
)


router.delete(
    "/delete-school",
    //controller
    school_controller.delete_school
)

//params
router.delete(
    "/delete-school/:schoolid",
    //controller
    school_controller.delete_school
)

router.put(
    "/update-school/:update_id",
    //cp => controller
    school_controller.update_school
)


module.exports = router