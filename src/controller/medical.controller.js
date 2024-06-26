const { medical_services } = require("../services")


const create_medical_C = async(req,res) => {
    try {
        const new_medical = await medical_services.create_medical(req.body)
        if(!new_medical){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_medical
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_medical_c = async(req,res) => {
    try {
        const medical_list = await medical_services.get_medical_s(req.body)
        if(!medical_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:medical_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_medical = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.medicalid

        // id
        // const id = req.body.id
        const result = await medical_services.delete_medical_s(id)
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

const update_medical = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await medical_services.update_medical_s(id,data)
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
    create_medical_C,
    get_medical_c,
    delete_medical,
    update_medical
}
