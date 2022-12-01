// Importer une dépendance externe (ou module):
const express = require ('express');
// Récupération de l'entité
const Wilder = require ('./entity/Wilder');
//Récupération du controller
const wildersController = require ('./controller/wilders');
//Récupération de la base de donnée
const datasource = require("./db");
// Appel du module
const app = express();

//Parser nos données en json
app.use(express.json());
// Mise en place d'une route
// req correpond à la requête du client
app.get('/hello', (req, res) => {
    console.log("new request from client");
    // Res est la réponse transmise au serveur
    res.send ("hello");
});

//Execution de la fonction demandée par le client
app.post('/wilders', wildersController.create);

// Déclaration d'une fonction asynchrone
async function start() {
await datasource.initialize();
//Enregistrement en base de donnée
await datasource.getRepository(Wilder).save({ name: "Dave Lopper"});
// Mise en place du serveur
app.listen(3000, () => {
    console.log("server ready");
});
}

// Appel de la fonction
start();