const generator = require('generate-password');

const password = generator.generate({
  length: 12,
  numbers: true,
  uppercase: true,
  lowercase: true,
  symbols: true,
  excludeSimilarCharacters: true,
});

console.log("Mot de passe généré :", password);