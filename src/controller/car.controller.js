const { car_services } = require("../services")


const create_car_C = async(req,res) => {
    try {
        const new_car = await car_services.create_car(req.body)
        if(!new_car){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_car
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_car_c = async(req,res) => {
    try {
        const car_list = await car_services.get_car_s(req.body)
        if(!car_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:car_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_car = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.carid

        // id
        // const id = req.body.id
        const result = await car_services.delete_car_s(id)
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

const update_car = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await car_services.update_car_s(id,data)
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
    create_car_C,
    get_car_c,
    delete_car,
    update_car
}

