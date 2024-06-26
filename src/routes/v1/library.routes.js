const express = require("express")
const { library_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-library",
    //cb => controller
    library_controller.create_library_C
)

router.get(
    "/list",
    //controller
    library_controller.get_library_c
)


router.delete(
    "/delete-library",
    //controller
    library_controller.delete_library
)

//params
router.delete(
    "/delete-library/:libraryid",
    //controller
    library_controller.delete_library
)

router.put(
    "/update-library/:update_id",
    //cp => controller
    library_controller.update_library
)


module.exports = router