const mongoose=require('mongoose')

exports.connectMongoose=()=>{
    mongoose.connect("mongodb+srv://v:k@cluster0.rfemepx.mongodb.net/passport?retryWrites=true&w=majority").then((e)=>console.log(`Connected to mongoDB:${e.connection.host}`)).catch((e)=>console.log(e))
}

const userSchema=new mongoose.Schema({
    name:String,
    username:{type:String,required:true,unique:true},
    password:String
})

exports.User=mongoose.model("User",userSchema)

const productSchema=mongoose.Schema({
    title:String,
    category:String,
    description:String,
    price:Number,
    availability:{type:String,enum:["Yes","No"]},
    quantity:{type:Number,min:1, max:10},
})

exports.Product=mongoose.model("Product",productSchema)