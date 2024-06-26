const { animal_services } = require("../services")


const create_animal_C = async(req,res) => {
    try {
        const new_animal = await animal_services.create_animal(req.body)
        if(!new_animal){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_animal
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_animal_c = async(req,res) => {
    try {
        const animal_list = await animal_services.get_animal_s(req.body)
        if(!animal_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:animal_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_animal = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.animalid

        // id
        // const id = req.body.id
        const result = await animal_services.delete_animal_s(id)
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

const update_animal = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await animal_services.update_animal_s(id,data)
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
    create_animal_C,
    get_animal_c,
    delete_animal,
    update_animal
}

