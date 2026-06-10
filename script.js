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

function actualizarContador() {
    const pendientes = document.querySelectorAll("#lista li:not(.completada)").length;
    contador.textContent = `Tareas: ${pendientes}`;
}

function agregarTarea() {
    const valor = inputTarea.value.trim();
    if (!valor) {
        mostrarError();
        return;
    }

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

    inputTarea.value = "";
    inputTarea.focus();
    actualizarContador();
}

btnAgregar.addEventListener("click", agregarTarea);

inputTarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        agregarTarea();
    }
});

lista.addEventListener("click", (e) => {
    const target = e.target;
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

    if (target.classList.contains("checkbox") || target.classList.contains("tarea-texto") || target.tagName === "LI") {
        tarea.classList.toggle("completada");

        if (completadasOcultas && tarea.classList.contains("completada")) {
            tarea.style.display = "none";
        } else if (!completadasOcultas) {
            tarea.style.display = "flex";
        }

        actualizarContador();
    }
});

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

actualizarContador();
