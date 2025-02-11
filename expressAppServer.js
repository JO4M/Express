// Création de l'application express
// Creation du serveur express
const express = require('express'); // Importation du module express
const app = express(); // Création de l'application express
const port = 3000; // Définition du port d'écoute du serveur

// Creation des middlewares
// Middleware pour vérifier les horaires de disponibilité de l'application
const checkWorkingHours = (req, res, next) => {
    const date = new Date(); // Récupération de la date actuelle
    const day = date.getDay(); // Récupération du jour actuel
    const hour = date.getHours(); // Récupération de l'heure actuelle
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) { // Vérification des horaires de disponibilité
        next();// Poursuite du traitement de la requête
    } else {
        res.send('L\'application est disponible du lundi au vendredi de 9h à 17h !'); //
    }
};

// Application du middleware checkWorkingHours à toutes les routes
app.use(checkWorkingHours);
// Définition de la route main
app.get('/',(req, res) => {
    res.sendFile(__dirname + '/views/home.html'); // Envoi de la page HTML
    });
     // Définition de la route /services
    app.get('/services',(req, res) => { 
        res.sendFile(__dirname + '/views/services.html'); // Envoi de la page HTML
        });
        // Définition de la route /contact
        app.get('/contact', (req, res) => {
            res.sendFile(__dirname + '/views/contact.html'); // Envoi de la page HTML
        });

        // Demarrage du serveur
        app.listen(port, () => {
            console.log(`Serveur lancé sur http://localhost:${port}`);
        });
        





