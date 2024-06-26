const { event_services } = require("../services")


const create_event_C = async(req,res) => {
    try {
        const new_event = await event_services.create_event(req.body)
        if(!new_event){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_event
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_event_c = async(req,res) => {
    try {
        const event_list = await event_services.get_event_s(req.body)
        if(!event_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:event_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_event = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.eventid

        // id
        // const id = req.body.id
        const result = await event_services.delete_event_s(id)
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

const update_event = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await event_services.update_event_s(id,data)
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
    create_event_C,
    get_event_c,
    delete_event,
    update_event
}
