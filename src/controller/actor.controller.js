const { actor_services } = require("../services")


const create_actor_C = async(req,res) => {
    try {
        const new_actor = await actor_services.create_actor(req.body)
        if(!new_actor){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_actor
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_actor_c = async(req,res) => {
    try {
        const actor_list = await actor_services.get_actor_s(req.body)
        if(!actor_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:actor_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_actor = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.actorid

        // id
        // const id = req.body.id
        const result = await actor_services.delete_actor_s(id)
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

const update_actor = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await actor_services.update_actor_s(id,data)
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
    create_actor_C,
    get_actor_c,
    delete_actor,
    update_actor
}
