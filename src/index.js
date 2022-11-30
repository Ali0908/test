// Importer une dépendance externe (ou module):
const express = require ('express');
// Récupération de typeOrm
const {DataSource} = require ("typeorm");
// Récupération de l'entité
const Wilder = require ('./entity/Wilder');

// Définition d'une source de donnée
const datasource = new DataSource ({
    type: 'sqlite',
    database: "./wildersdb.sqlite",
    synchronize : true,
// Chargement de la base de donnée
    entities: [Wilder],
});

// Appel du module
const app = express();

// Mise en place d'une route
// req correpond à la requête du client
app.get('/hello', (req, res) => {
    console.log("new request from client");
    // Res est la réponse transmise au serveur
    res.send ("hello");
});

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