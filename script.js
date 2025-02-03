document.getElementById('siButton').addEventListener('click', function() {
    // Obtener el div de respuesta
    const respuestaDiv = document.getElementById('respuesta');
    
    // Agregar la imagen y el mensaje de texto
    respuestaDiv.innerHTML = `
        <img src="imagenes/feliz.jpg" alt="Imagen Feliz"/>
        <p class="mensaje">TE AMO MUCHO AMORCITO, ERES MI BBCITA</p>
    `;
});

document.getElementById('noButton').addEventListener('click', function() {
    // Obtener el div de respuesta
    const respuestaDiv = document.getElementById('respuesta');

    // Agregar la animación llorando
    respuestaDiv.innerHTML = `
        <div class="animated-crying">
            <img src="imagenes/llorando.gif" alt="Cara llorando"/>
        </div>
    `;
});