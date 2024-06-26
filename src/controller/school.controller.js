const { school_services } = require("../services")


const create_school_C = async(req,res) => {
    try {
        const new_school = await school_services.create_school(req.body)
        if(!new_school){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_school
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_school_c = async(req,res) => {
    try {
        const school_list = await school_services.get_school_s(req.body)
        if(!school_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:school_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_school = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.schoolid

        // id
        // const id = req.body.id
        const result = await school_services.delete_school_s(id)
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

const update_school = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await school_services.update_school_s(id,data)
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
    create_school_C,
    get_school_c,
    delete_school,
    update_school
}
