const express = require("express")
const { admin_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-admin",
    //cb => controller
    admin_controller.create_admin_C
)

router.get(
    "/list",
    //controller
    admin_controller.get_admin_c
)


router.delete(
    "/delete-admin",
    //controller
    admin_controller.delete_admin
)

//params
router.delete(
    "/delete-admin/:adminid",
    //controller
    admin_controller.delete_admin
)

router.put(
    "/update-admin/:update_id",
    //cp => controller
    admin_controller.update_admin
)


module.exports = router