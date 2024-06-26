const { manga_services } = require("../services")


const create_manga_C = async(req,res) => {
    try {
        const new_manga = await manga_services.create_manga(req.body)
        if(!new_manga){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_manga
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_manga_c = async(req,res) => {
    try {
        const manga_list = await manga_services.get_manga_s(req.body)
        if(!manga_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:manga_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_manga = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.mangaid

        // id
        // const id = req.body.id
        const result = await manga_services.delete_manga_s(id)
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

const update_manga = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await manga_services.update_manga_s(id,data)
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
    create_manga_C,
    get_manga_c,
    delete_manga,
    update_manga
}
