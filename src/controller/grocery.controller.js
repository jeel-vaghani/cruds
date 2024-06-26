const { grocery_services } = require("../services")


const create_grocery_C = async(req,res) => {
    try {
        const new_grocery = await grocery_services.create_grocery(req.body)
        if(!new_grocery){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_grocery
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_grocery_c = async(req,res) => {
    try {
        const grocery_list = await grocery_services.get_grocery_s(req.body)
        if(!grocery_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:grocery_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_grocery = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.groceryid

        // id
        // const id = req.body.id
        const result = await grocery_services.delete_grocery_s(id)
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

const update_grocery = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await grocery_services.update_grocery_s(id,data)
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
    create_grocery_C,
    get_grocery_c,
    delete_grocery,
    update_grocery
}
