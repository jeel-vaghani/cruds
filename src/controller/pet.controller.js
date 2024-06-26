const { pet_services } = require("../services")


const create_pet_C = async(req,res) => {
    try {
        const new_pet = await pet_services.create_pet(req.body)
        if(!new_pet){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_pet
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_pet_c = async(req,res) => {
    try {
        const pet_list = await pet_services.get_pet_s(req.body)
        if(!pet_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:pet_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_pet = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.petid

        // id
        // const id = req.body.id
        const result = await pet_services.delete_pet_s(id)
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

const update_pet = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await pet_services.update_pet_s(id,data)
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
    create_pet_C,
    get_pet_c,
    delete_pet,
    update_pet
}
