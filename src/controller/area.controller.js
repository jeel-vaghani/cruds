const { area_services } = require("../services")


const create_area_C = async(req,res) => {
    try {
        const new_area = await area_services.create_area(req.body)
        if(!new_area){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_area
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_area_c = async(req,res) => {
    try {
        const area_list = await area_services.get_area_s(req.body)
        if(!area_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:area_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_area = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.areaid

        // id
        // const id = req.body.id
        const result = await area_services.delete_area_s(id)
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

const update_area = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await area_services.update_area_s(id,data)
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
    create_area_C,
    get_area_c,
    delete_area,
    update_area
}
