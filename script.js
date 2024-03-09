document.getElementById('toggleButton').addEventListener('click', function() {
    var nav = document.querySelector('.main-nav');
    this.classList.toggle('active');
    nav.classList.toggle('active'); // Agregar o quitar la clase 'active' en la lista de navegación
  });
  