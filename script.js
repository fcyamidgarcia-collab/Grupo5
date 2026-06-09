// 1. Seleccionar el #contador con getElementById (y el resto de elementos necesarios)
const inputTarea = document.getElementById('in-tarea');
const btnAgregar = document.getElementById('btn-agregar');
const lista = document.getElementById('lista');
const btnOcultar = document.getElementById('btn-ocultar');
const contador = document.getElementById('contador'); 

// 2 y 3. Función actualizarContador() creada para contar los <li> que NO tienen la clase .completada
function actualizarContador() {
    // 3. Usar querySelectorAll("#lista li:not(.completada)").length para obtener el conteo exacto
    const pendientes = document.querySelectorAll("#lista li:not(.completada)").length;
    
    // 4. Actualizar contador.textContent con el número obtenido cada vez que se llama la función
    if (pendientes === 1) {
        contador.textContent = '1 tarea pendiente';
    } else {
        contador.textContent = `${pendientes} tareas pendientes`;
    }
}

// Función para añadir una tarea
function agregarTarea() {
    const texto = inputTarea.value.trim();
    
    // Validación de campo vacío
    if (texto === '') {
        const placeholderOriginal = inputTarea.placeholder;
        inputTarea.placeholder = '¡Escribe una tarea válida!';
        inputTarea.value = ''; 
        
        setTimeout(() => {
            inputTarea.placeholder = placeholderOriginal;
        }, 1200);
        return;
    }

    // Crear la estructura de la tarea
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="check-box"></span>
        <span class="texto-tarea">${texto}</span>
        <button class="btn-eliminar">&times;</button>
    `;

    // Añadir el nuevo elemento al UL
    lista.appendChild(li);

    // 5. Llamar a actualizarContador() al final de la función de agregar tarea
    actualizarContador();

    // Limpiar y enfocar el input
    inputTarea.value = ''; 
    inputTarea.focus();
}

// Escuchadores de eventos para la creación de tareas
btnAgregar.addEventListener('click', agregarTarea);

inputTarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});

// Listener de delegación en el UL (Detecta clicks en toda la lista)
lista.addEventListener('click', (e) => {
    const elementoClickeado = e.target;

    // Acción para eliminar la tarea
    if (elementoClickeado.classList.contains('btn-eliminar')) {
        e.stopPropagation(); // Evita que se dispare el click del LI contenedor
        elementoClickeado.parentElement.remove(); 
        // Se llama aquí también para actualizar si se destruye un LI pendiente
        actualizarContador(); 
        return; 
    }

    // Acción cuando un LI es clickeado
    const li = elementoClickeado.closest('li');
    if (li) {
        li.classList.toggle('completada'); 
        // 5. Llamar a actualizarContador() dentro del listener de delegación en el ul
        actualizarContador(); 
    }
});

// Lógica para el botón de Ocultar/Mostrar completadas
btnOcultar.addEventListener('click', () => {
    lista.classList.toggle('ocultar-completadas');
    
    if (lista.classList.contains('ocultar-completadas')) {
        btnOcultar.innerHTML = '👀 Mostrar Completadas';
    } else {
        btnOcultar.innerHTML = '🙈 Ocultar Completadas';
    }
});

// 6. Inicialización: Ejecuta el conteo inicial apenas carga el DOM con las tareas base
actualizarContador();
