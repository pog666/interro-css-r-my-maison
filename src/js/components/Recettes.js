import recettes from './../../data/recipes.json';

export default function Recettes() {
    return {
      baseImages: [],
      images: [],
      difficulty: '', // difficulté par défaut
      selectedDifficulties: [],
      selectedImage: null, // Variable pour l'image sélectionnée

      
    // Initialiser le composant et charger les données depuis le fichier JSON et vérification si il est bien un tableau

        init() {
            if (Array.isArray(recettes.recipes)) {
              this.baseImages = recettes.recipes.map((recipe, index) => ({
                ...recipe,
                id: index
              }));
              this.images = this.baseImages;
            }
          },

    // Filtrage des recettes selon les difficultés sélectionnées

        filteredRecipes() {
            if (this.selectedDifficulties.length === 0) {
                return this.baseImages; // Affiche toutes les recettes si aucune difficulté n'est sélectionnée
            } else {
                return this.baseImages.filter(recipe => this.selectedDifficulties.includes(recipe.difficulty));
            }
        },

    // Ajoute une difficulté dans le tableau des difficultés sélectionnées

        addDifficulty(difficulty) {
            if (this.selectedDifficulties.includes(difficulty)) {
                // Si la difficulté est déjà dans le tableau, on la retire
                this.selectedDifficulties = this.selectedDifficulties.filter(d => d !== difficulty);
            } else {
                // Sinon, on l'ajoute
                this.selectedDifficulties.push(difficulty);
            }
        },

    // Détails sur la recette lors du clique

        DetailImage(imgId) {
            this.selectedImage = this.images.find(item => item.id === imgId);
        },

    // Fermeture des détails de la recette lors du clique sur X

        closeDetailImage() {
            this.selectedImage = null;
        }

    };
}
      