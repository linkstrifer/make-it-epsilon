const express = require("express")
const bodyParser = require("body-parser")
const cookieSession = require ("cookie-session")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const { request, response } = require("express")
const app = express()

const PORT = 3000

mongoose.connect("mongodb://localhost:27017/mydatabase", { 
    useNewUrlParser: true ,
})

mongoose.connection.once("open", () => console.log("Mongoose conectado"))
mongoose.connection.on("error", (error) => console.log(error))

const UserSchema = mongoose.Schema({      
    name: String,  
    last: String,
    email: String,
    password: String,
}) 

const UserModel = mongoose.model("User", UserSchema)

app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true }))

app.use( cookieSession({
    secret: " mfg ",
    maxAge: 5 * 60 * 1000,
})) 

app.post("/register", async (request, response) => {
    const {name, last, email, password} = request.body
    try { 
        await UserModel.create({ 
            name, 
            last, 
            email, 
            password : await bcrypt.hash(password, 10)
        })
        response.json({ created: true })
    } catch (error) {
        response.status(500).json({ error })
    }
})

app.post("/login", async (request, response) => {
    const { email, password } = request.body
    if (!password) {
        response.status(400).json({ error: "missing password" })
        return
    }
    try {
        if (email) {
            const user = await UserModel.findOne({ email })
            const passwordValid = await bcrypt.compare(password, user.password)
            if (passwordValid) {
                response.json({ logged: true })
            } else {
                response.json({ logged: false })
            }
        } else {
            response.status(400).json({ error: "missing email" })
        }
    } catch (error) {
        response.status(500).json({ error })
    }
})

app.get("/logout", (request, response) => {
    try {
        request.session.userId = null
        response.json({ loggedOut: true })
    }
    catch (error){
        response.status(400).json({ error: " LoggedOut Error" })
    }
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
