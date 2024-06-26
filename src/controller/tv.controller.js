const { tv_services } = require("../services")


const create_tv_C = async(req,res) => {
    try {
        const new_tv = await tv_services.create_tv(req.body)
        if(!new_tv){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_tv
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_tv_c = async(req,res) => {
    try {
        const tv_list = await tv_services.get_tv_s(req.body)
        if(!tv_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:tv_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_tv = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.tvid

        // id
        // const id = req.body.id
        const result = await tv_services.delete_tv_s(id)
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

const update_tv = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await tv_services.update_tv_s(id,data)
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
    create_tv_C,
    get_tv_c,
    delete_tv,
    update_tv
}