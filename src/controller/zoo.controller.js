const { zoo_services } = require("../services")


const create_zoo_C = async(req,res) => {
    try {
        const new_zoo = await zoo_services.create_zoo(req.body)
        if(!new_zoo){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_zoo
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_zoo_c = async(req,res) => {
    try {
        const zoo_list = await zoo_services.get_zoo_s(req.body)
        if(!zoo_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:zoo_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_zoo = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.zooid

        // id
        // const id = req.body.id
        const result = await zoo_services.delete_zoo_s(id)
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

const update_zoo = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await zoo_services.update_zoo_s(id,data)
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
    create_zoo_C,
    get_zoo_c,
    delete_zoo,
    update_zoo
}
