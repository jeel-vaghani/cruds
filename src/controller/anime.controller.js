const { anime_services } = require("../services")


const create_anime_C = async(req,res) => {
    try {
        const new_anime = await anime_services.create_anime(req.body)
        if(!new_anime){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_anime
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_anime_c = async(req,res) => {
    try {
        const anime_list = await anime_services.get_anime_s(req.body)
        if(!anime_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:anime_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_anime = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.animeid

        // id
        // const id = req.body.id
        const result = await anime_services.delete_anime_s(id)
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

const update_anime = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await anime_services.update_anime_s(id,data)
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
    create_anime_C,
    get_anime_c,
    delete_anime,
    update_anime
}
