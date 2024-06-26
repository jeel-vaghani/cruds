const { blog_services } = require("../services")


const create_blog_C = async(req,res) => {
    try {
        const new_blog = await blog_services.create_blog(req.body)
        if(!new_blog){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_blog
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_blog_c = async(req,res) => {
    try {
        const blog_list = await blog_services.get_blog_s(req.body)
        if(!blog_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:blog_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_blog = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.blogid

        // id
        // const id = req.body.id
        const result = await blog_services.delete_blog_s(id)
        console.log(result);

        res.status(200).json({
            success:true,
            message:"data delete",
            id:id
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const update_blog = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await blog_services.update_blog_s(id,data)
        console.log(result);

        if(!result){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data update",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

module.exports = {
    create_blog_C,
    get_blog_c,
    delete_blog,
    update_blog
}
