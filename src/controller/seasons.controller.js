const { seasons_services } = require("../services")


const create_seasons_C = async(req,res) => {
    try {
        const new_seasons = await seasons_services.create_seasons(req.body)
        if(!new_seasons){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_seasons
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_seasons_c = async(req,res) => {
    try {
        const seasons_list = await seasons_services.get_seasons_s(req.body)
        if(!seasons_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:seasons_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_seasons = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.seasonsid

        // id
        // const id = req.body.id
        const result = await seasons_services.delete_seasons_s(id)
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

const update_seasons = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await seasons_services.update_seasons_s(id,data)
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
    create_seasons_C,
    get_seasons_c,
    delete_seasons,
    update_seasons
}