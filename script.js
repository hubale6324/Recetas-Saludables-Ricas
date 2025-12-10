// Usamos una función IIFE para encapsular el código y evitar variables globales
(function() {
    // Referencias al DOM
    const filterButtons = document.querySelectorAll('.btn-filter');
    const recipeCards = document.querySelectorAll('.recipe-card');

    /**
     * Alterna la clase 'active' en los botones de filtro
     * @param {HTMLElement} activeButton - El botón que debe estar activo
     */
    function setActiveButton(activeButton) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        activeButton.classList.add('active');
    }

    /**
     * Filtra las tarjetas de recetas basándose en la categoría.
     * @param {string} category - La categoría seleccionada ('all' o una categoría específica)
     */
    function filterRecipes(category) {
        recipeCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            // Comprueba si la categoría es 'all' o si coincide con la categoría de la tarjeta
            if (category === 'all' || category === cardCategory) {
                card.style.display = 'article'; // Mostrar como bloque, manteniendo la semántica
                card.style.display = 'flex'; // Usamos 'flex' porque la tarjeta usa flexbox
            } else {
                card.style.display = 'none'; // Ocultar la tarjeta
            }
        });
    }

    // Agregar Listeners a los botones de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedCategory = event.target.getAttribute('data-category');
            
            setActiveButton(event.target);
            filterRecipes(selectedCategory);
        });
    });

    // Inicializar: El filtro 'all' debe estar activo al cargar la página
    // No necesitamos hacer nada aquí porque el HTML ya lo tiene activo.

})();