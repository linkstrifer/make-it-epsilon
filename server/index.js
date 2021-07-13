const express = require("express")
const cookieSession = require ("cookie-session")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const app = express()

const PORT = 3000

mongoose.connect('mongodb://localhost:27017/mydatabase', { 
    useNewUrlParser: true ,
})

mongoose.connection.once("open", () => console.log("Mongoose conectado"));
mongoose.connection.on("error", (error) => console.log(error));

const UserSchema = mongoose.Schema({      
    name: String,  
    last: String,
    email: String,
    password: String,
}) 

const UserModel = mongoose.model("User", UserSchema)

app.use(express.urlencoded({extended: true}))

app.use( cookieSession({
    secret: " mfg ",
    maxAge: 5 * 60 * 1000,
}))

app.get('/register', (request, response) => {
    response.send(`
    <form method = "POST">
        <label>
            Nombre:
            <input type ="text" name="name"/>
        </label>
        <label>
            Apellido:
            <input type ="text" name="last"/>
        </label>
        <label>
            Usuario:
            <input type ="email" name="email"/>
        </label>
        <label>
            Contraseña:
            <input type ="password" name="password"/>
        </label>

        <button type = "submit"> Registrarse </button>
    </form>
    `)
})    

app.post('/register', async (request, response) => {
    const {name, last, email, password} = request.body
    const user = new UserModel ({ name, last, email, password  : await bcrypt.hash(password, 10)})

    user.save ((error) => { 
        if(error){
            console.error(error)
            return
        }
        console.log("user created")
        })
})

app.listen(PORT, () => {
    console.log (`listening on port ${PORT}`)
})
