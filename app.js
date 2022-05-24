const express = require ("express");
const app = express();
const PORT = process.env.PORT || 3000; 

//se puede usar path.join o path.resolve para poder encontrar la ruta
//const PORT = 3000;  
//app.use(express.static(--dirname + "public"));

app.use(express.static('public'));

app.listen(PORT, function() {console.log(`Servidor corriendo en el puerto ${PORT}`)});
/*app.listen(port, () => {
    console.log("Server listening on port ", port);
});*/

app.get ("/", function(req, res) {
    res.sendFile(__dirname + "/views/home.html")
})
//y aqui en vez del + debería ir una coma app.use('/static', )

/*app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});*/


app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});

app.get("/productos", (req, res) => {
    res.send("Productos");
});

app.get("/acerca_de", (req, res) => {
    res.send("Acerca de..");
});

app.get("/contactos", (req, res) => {
    res.send("Contactos");
});