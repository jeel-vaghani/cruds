const express = require("express")
const { recipes_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-recipes",
    //cb => controller
    recipes_controller.create_recipes_C
)

router.get(
    "/list",
    //controller
    recipes_controller.get_recipes_c
)


router.delete(
    "/delete-recipes",
    //controller
    recipes_controller.delete_recipes
)

//params
router.delete(
    "/delete-recipes/:recipesid",
    //controller
    recipes_controller.delete_recipes
)

router.put(
    "/update-recipes/:update_id",
    //cp => controller
    recipes_controller.update_recipes
)


module.exports = router