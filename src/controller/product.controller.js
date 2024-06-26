const { product_services } = require("../services")


const create_product_C = async(req,res) => {
    try {
        const new_product = await product_services.create_product(req.body)
        if(!new_product){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"created",
            data:new_product
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message

        })
    }
}


const get_product_c = async(req,res) => {
    try {
        const product_list = await product_services.get_product_s(req.body)
        if(!product_list){
            throw new Error("not working.....")
            
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:product_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
        })
    }
}

const delete_product = async(req,res) => {
    try {

        //params
        console.log(req.params);
        const id = req.params.productid

        // id
        // const id = req.body.id
        const result = await product_services.delete_product_s(id)
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

const update_product = async(req,res) => {
    try {

        //services
        const id = req.params.update_id
        const data = req.body
        const result = await product_services.update_product_s(id,data)
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
    create_product_C,
    get_product_c,
    delete_product,
    update_product
}
