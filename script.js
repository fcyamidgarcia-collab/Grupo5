const inputTarea = document.getElementById('in-tarea');
const btnAgregar = document.getElementById('btn-agregar');
const lista = document.getElementById('lista');

function agregarTarea() {
    const texto = inputTarea.value.trim();
    
    // Si está vacío, muestra un mensaje temporal en el placeholder
    if (texto === '') {
        const placeholderOriginal = inputTarea.placeholder;
        inputTarea.placeholder = 'Escribe una tarea';
        inputTarea.value = ''; // Limpia espacios accidentales
        
        setTimeout(() => {
            inputTarea.placeholder = placeholderOriginal;
        }, 1000);
        return;
    }

    // Corregido: createElement en lugar de createElemeant
    const li = document.createElement('li');
    li.textContent = texto;
    lista.appendChild(li);

    inputTarea.value = ''; // Limpia el input
    inputTarea.focus();
}

// Agregar tarea al hacer clic en el botón
btnAgregar.addEventListener('click', agregarTarea);

// Agregar tarea al presionar Enter
inputTarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});

// Marcar/desmarcar tarea como completada
lista.addEventListener('click', (e) => {
    // Las etiquetas devueltas por tagName siempre están en MAYÚSCULAS
    if (e.target.tagName === 'LI' || e.target.tagName === 'SPAN') {
        e.target.classList.toggle('completada');
    }
});
