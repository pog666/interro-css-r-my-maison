// Importer Alpine.js
import Alpine from "alpinejs";
window.alpine = Alpine;

// Importer le composant Recettes
import Recettes from './../../src/js/components/Recettes';  // Assure-toi que le chemin vers Recettes.js est correct

// Déclarer le composant Recettes
document.addEventListener('alpine:init', () => {
  Alpine.data('Recettes', Recettes); // 'Recettes' sera le nom du composant dans Alpine
});

// Démarrer Alpine
Alpine.start();