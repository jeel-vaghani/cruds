const { series_services } = require("../services")


const create_series_C = async(req,res) => {
    try {
        const new_series = await series_services.create_series(req.body)
        if(!new_series){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_series
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_series_c = async(req,res) => {
    try {
        const series_list = await series_services.get_series_s(req.body)
        if(!series_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:series_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_series = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.seriesid

        // id
        // const id = req.body.id
        const result = await series_services.delete_series_s(id)
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

const update_series = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await series_services.update_series_s(id,data)
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
    create_series_C,
    get_series_c,
    delete_series,
    update_series
}

