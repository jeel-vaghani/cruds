const { tree_services } = require("../services")


const create_tree_C = async(req,res) => {
    try {
        const new_tree = await tree_services.create_tree(req.body)
        if(!new_tree){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_tree
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_tree_c = async(req,res) => {
    try {
        const tree_list = await tree_services.get_tree_s(req.body)
        if(!tree_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:tree_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_tree = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.treeid

        // id
        // const id = req.body.id
        const result = await tree_services.delete_tree_s(id)
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

const update_tree = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await tree_services.update_tree_s(id,data)
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
    create_tree_C,
    get_tree_c,
    delete_tree,
    update_tree
}
