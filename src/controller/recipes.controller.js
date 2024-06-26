const { recipes_services } = require("../services")


const create_recipes_C = async(req,res) => {
    try {
        const new_recipes = await recipes_services.create_recipes(req.body)
        if(!new_recipes){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_recipes
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_recipes_c = async(req,res) => {
    try {
        const recipes_list = await recipes_services.get_recipes_s(req.body)
        if(!recipes_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:recipes_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_recipes = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.recipesid

        // id
        // const id = req.body.id
        const result = await recipes_services.delete_recipes_s(id)
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

const update_recipes = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await recipes_services.update_recipes_s(id,data)
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
    create_recipes_C,
    get_recipes_c,
    delete_recipes,
    update_recipes
}
