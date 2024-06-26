const { admin_services } = require("../services")


const create_admin_C = async(req,res) => {
    try {
        const new_admin = await admin_services.create_admin(req.body)
        if(!new_admin){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_admin
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_admin_c = async(req,res) => {
    try {
        const admin_list = await admin_services.get_admin_s(req.body)
        if(!admin_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:admin_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_admin = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.adminid

        // id
        // const id = req.body.id
        const result = await admin_services.delete_admin_s(id)
        console.log(result);

        res.status(200).json({
            success:true,
            message:"deleted",
            id:id
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const update_admin = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await admin_services.update_admin_s(id,data)
        console.log(result);

        if(!result){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
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
    create_admin_C,
    get_admin_c,
    delete_admin,
    update_admin
}
