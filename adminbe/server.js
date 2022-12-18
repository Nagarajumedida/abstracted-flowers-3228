const express = require("express")
const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
const app = express()
const { connectMongoose, User ,Product} = require("./database.js")
const ejs = require("ejs")
const passport = require("passport");
const { initailizingPassport, isAuthenticated } = require("./passportConfig.js");
const expressSesson = require("express-session")


connectMongoose()
initailizingPassport(passport)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(expressSesson({ secret: "secret", resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())


app.set("view engine", "ejs")
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/register", (req, res) => {
    res.render("register")
})
app.get("/login", (req, res) => {
    res.render("login")
})
app.post("/register", async (req, res) => {
    const user = await User.findOne({ username: req.body.username })
    
    if (user) return res.status(400).send("User already exists")
    const newUser = await User.create(req.body)
    res.status(201).send(newUser)
})

app.post("/login", passport.authenticate("local", { failureRedirect: "/login", successRedirect: "/dashboard" }), (req, res) => {
    
})

app.get("/profile",isAuthenticated,(req,res)=>{
    res.send(req.user)
})

app.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/login")
})
// product crud************************
app.get("/dashboard", (req, res) => {
    res.render("dashboard")
})
app.get("/create", (req, res) => {
    res.render("create")
})
app.get("/update", (req, res) => {
    res.render("editproduct")
})
app.get("/product", async (req, res) => {
    try {
        const product = await Product.find()
        res.send(product)
    } catch (error) {
        console.log('error:', error)
        res.send("error in product get route")
    }
})

app.post("/create", async (req, res) => {
    const product = await Product.findOne({ title: req.body.title })
    
    if (product){
     
        return res.status(400).send("Product already exists. Patch to make changes.")
    } 
    const newProduct = await Product.create(req.body)
    res.status(201).send(newProduct)
})
app.patch("/update/:productID", async (req, res) => {
    try {
        const productID = req.params.productID
        const payload = req.body
        const product = await Product.findByIdAndUpdate({ _id: productID }, payload)

        res.status(200).send({
            success: true,
            product
        })
    } catch (error) {
        console.log('error:', error)
        console.log("err in update product")
    }
})

app.delete("/delete/:productID", async (req, res) => {
    try {
        const productID = req.params.productID

        const product = await Product.findByIdAndDelete({ _id: productID })

        res.status(200).send({
            success: true,
            product
        })
    } catch (error) {
        console.log('error:', error)
        console.log("err in update product")
    }
})

// product crud************************



app.listen(8080, () => {
    console.log("listeing on http://localhost:7500")
})
