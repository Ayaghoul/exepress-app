const express = require("express");
const path = require("path");
const app = express();

// Import middleware
const workingHoursMiddleware = require("./middleWares/availability");

// Configuration du moteur de template
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

// Appliquer le middleware globalement
app.use(workingHoursMiddleware);

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// Lancer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
