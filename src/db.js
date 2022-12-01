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

module.exports = datasource;