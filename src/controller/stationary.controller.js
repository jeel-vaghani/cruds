const { stationary_services } = require("../services")


const create_stationary_C = async(req,res) => {
    try {
        const new_stationary = await stationary_services.create_stationary(req.body)
        if(!new_stationary){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_stationary
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_stationary_c = async(req,res) => {
    try {
        const stationary_list = await stationary_services.get_stationary_s(req.body)
        if(!stationary_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:stationary_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_stationary = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.stationaryid

        // id
        // const id = req.body.id
        const result = await stationary_services.delete_stationary_s(id)
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

const update_stationary = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await stationary_services.update_stationary_s(id,data)
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
    create_stationary_C,
    get_stationary_c,
    delete_stationary,
    update_stationary
}
