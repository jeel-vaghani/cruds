const { contact_services } = require("../services")


const create_contact_C = async(req,res) => {
    try {
        const new_contact = await contact_services.create_contact(req.body)
        if(!new_contact){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_contact
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_contact_c = async(req,res) => {
    try {
        const contact_list = await contact_services.get_contact_s(req.body)
        if(!contact_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:contact_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_contact = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.contactid

        // id
        // const id = req.body.id
        const result = await contact_services.delete_contact_s(id)
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

const update_contact = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await contact_services.update_contact_s(id,data)
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
    create_contact_C,
    get_contact_c,
    delete_contact,
    update_contact
}
