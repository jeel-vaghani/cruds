const { library_services } = require("../services")


const create_library_C = async(req,res) => {
    try {
        const new_library = await library_services.create_library(req.body)
        if(!new_library){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_library
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_library_c = async(req,res) => {
    try {
        const library_list = await library_services.get_library_s(req.body)
        if(!library_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:library_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_library = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.libraryid

        // id
        // const id = req.body.id
        const result = await library_services.delete_library_s(id)
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

const update_library = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await library_services.update_library_s(id,data)
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
    create_library_C,
    get_library_c,
    delete_library,
    update_library
}
