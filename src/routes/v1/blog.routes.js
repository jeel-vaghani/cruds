const express = require("express")
const { blog_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-blog",
    //cb => controller
    blog_controller.create_blog_C
)

router.get(
    "/list",
    //controller
    blog_controller.get_blog_c
)


router.delete(
    "/delete-blog",
    //controller
    blog_controller.delete_blog
)

//params
router.delete(
    "/delete-blog/:blogid",
    //controller
    blog_controller.delete_blog
)

router.put(
    "/update-blog/:update_id",
    //cp => controller
    blog_controller.update_blog
)


module.exports = router