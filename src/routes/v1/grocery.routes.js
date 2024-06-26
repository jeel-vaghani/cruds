const express = require("express")
const { grocery_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-grocery",
    //cb => controller
    grocery_controller.create_grocery_C
)

router.get(
    "/list",
    //controller
    grocery_controller.get_grocery_c
)


router.delete(
    "/delete-grocery",
    //controller
    grocery_controller.delete_grocery
)

//params
router.delete(
    "/delete-grocery/:groceryid",
    //controller
    grocery_controller.delete_grocery
)

router.put(
    "/update-grocery/:update_id",
    //cp => controller
    grocery_controller.update_grocery
)


module.exports = router