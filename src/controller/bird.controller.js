const { bird_services } = require("../services")


const create_bird_C = async(req,res) => {
    try {
        const new_bird = await bird_services.create_bird(req.body)
        if(!new_bird){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_bird
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_bird_c = async(req,res) => {
    try {
        const bird_list = await bird_services.get_bird_s(req.body)
        if(!bird_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:bird_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_bird = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.birdid

        // id
        // const id = req.body.id
        const result = await bird_services.delete_bird_s(id)
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

const update_bird = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await bird_services.update_bird_s(id,data)
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
    create_bird_C,
    get_bird_c,
    delete_bird,
    update_bird
}

