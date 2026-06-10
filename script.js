//Fase 2 - Hadkier Barraygan y Juan Rincon
// Selección de elementos requeridos como el imput botones lista y contador
const inputTarea = document.getElementById("nueva-tarea");
const btnAgregar = document.getElementById("btn-agregar");
const btnOcultar = document.getElementById("btn-ocultar");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

let completadasOcultas = false;

function mostrarError() {
    inputTarea.classList.add("input-error");
    const placeholderOriginal = inputTarea.placeholder;
    inputTarea.placeholder = "Escribe una tarea válida";

    setTimeout(() => {
        inputTarea.classList.remove("input-error");
        inputTarea.placeholder = placeholderOriginal;
    }, 1200);
}

// Cuenta únicamente las tareas pendientes 
function actualizarContador() {
    const pendientes = document.querySelectorAll("#lista li:not(.completada)").length;
    contador.textContent = `Tareas: ${pendientes}`;
}

// Agrega una nueva tarea a la lista
function agregarTarea() {
    const valor = inputTarea.value.trim();

    // Validación para evitar tareas vacías
    if (!valor) {
        mostrarError();
        return;
    }

    // aqui se crea el elemento Li
    const li = document.createElement("li");

    const checkbox = document.createElement("span");
    checkbox.className = "checkbox";

    const texto = document.createElement("span");
    texto.className = "tarea-texto";
    texto.textContent = valor;

    const eliminar = document.createElement("button");
    eliminar.className = "btn-eliminar";
    eliminar.type = "button";
    eliminar.textContent = "Eliminar";

    li.appendChild(checkbox);
    li.appendChild(texto);
    li.appendChild(eliminar);
    lista.appendChild(li);

    // Limpia el input y devuelve el foco
    inputTarea.value = "";
    inputTarea.focus();

    // Actualiza el número de tareas pendientes
    actualizarContador();
}

// Permite agregar tareas con el botón
btnAgregar.addEventListener("click", agregarTarea);

// Permite agregar tareas usando la tecla Enter
inputTarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        agregarTarea();
    }
});

// Delegación de eventos sobre la lista
lista.addEventListener("click", (e) => {
    const target = e.target;

    // Elimina una tarea seleccionada
    if (target.classList.contains("btn-eliminar")) {
        const tarea = target.closest("li");
        if (tarea) {
            tarea.remove();
            actualizarContador();
        }
        return;
    }

    const tarea = target.closest("li");

    if (!tarea) {
        return;
    }

    // Marca o desmarca una tarea como completada
    if (
        target.classList.contains("checkbox") ||
        target.classList.contains("tarea-texto") ||
        target.tagName === "LI"
    ) {
        tarea.classList.toggle("completada");

        if (completadasOcultas && tarea.classList.contains("completada")) {
            tarea.style.display = "none";
        } else if (!completadasOcultas) {
            tarea.style.display = "flex";
        }

        actualizarContador();
    }
});

// Oculta o muestra las tareas completadas
btnOcultar.addEventListener("click", () => {
    const completas = document.querySelectorAll("#lista li.completada");

    if (!completadasOcultas) {
        completas.forEach((item) => {
            item.style.display = "none";
        });

        btnOcultar.textContent = "Terminadas Ocultas";
        btnOcultar.style.backgroundColor = "#5e8a61";
        completadasOcultas = true;
    } else {
        completas.forEach((item) => {
            item.style.display = "flex";
        });

        btnOcultar.textContent = "Ocultar Completadas";
        btnOcultar.style.backgroundColor = "";
        completadasOcultas = false;
    }
});

// Inicializa el contador al cargar la aplicación
actualizarContador();