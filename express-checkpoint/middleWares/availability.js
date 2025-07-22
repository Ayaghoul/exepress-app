module.exports = (req, res, next) => {
  const now = new Date();
  const day = now.getDay(); // 0 = dimanche, 6 = samedi
  const hour = now.getHours(); // entre 0 et 23

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next();
  } else {
    res.send(
      "<h1> Ce site est accessible du Lundi au Vendredi, de 9h à 17h uniquement.</h1>"
    );
  }
};
