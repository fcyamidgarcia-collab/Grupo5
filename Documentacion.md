Presentacion Grupo 
Nombre del Grupo: Grupo 5
Nombre del Proyecto: MAGIA
PALETA DE COLORES USADA CON VALORES HEXADECIMALES
    --color1: #3a6262;
    --color2: #517f7f;
    --color3: #6d9595;
    --color4: #8aa9a9;
    --color5: #a7bdbd;
    --color6: #c4d1d1;
    --color7: #e1e6e6;
    --color8: #ffffff;

CLASES CSS USADAS
.contenedor	
.entrada-tareas	
.lista-tareas	
.checkbox	
.completada	
.tarea-texto	
.texto-info	
.btn-eliminar	
.texto-tarea
LISTA DE ID`S USADAS
#in-tarea
Campo de entrada de texto (<input>) donde el usuario escribe una nueva tarea.
#btn-agregar
Botón (<button>) encargado de ejecutar la acción de agregar una nueva tarea a la lista.
#lista
Contenedor principal (<ul>) que almacena todas las tareas.
#contador
Elemento (<span>) que muestra la cantidad de tareas pendientes.
#btn-ocultar
Botón (<button>) utilizado para ocultar o mostrar las tareas completadas.

Convención de nombres

.app-tareas
Contenedor principal de la aplicación.
.zona-entrada
Agrupa el campo de texto y el botón para añadir tareas.
.zona-lista
Contiene la lista de tareas y elementos relacionados.
.acciones-globales
Contenedor de los botones de acciones generales de la aplicación.
.contexto-contador
Contenedor visual del texto y valor del contador de tareas.
.texto-info
Texto descriptivo que identifica la sección de tareas pendientes.
.check-box
Elemento visual que representa el estado de una tarea.
.texto-tarea
Contenedor del texto descriptivo de cada tarea.
.btn-eliminar
Botón representado por una "×" que permite eliminar una tarea de la lista.

Responsive:
@media (max-width: 600px) {
    .contenedor {
        width: 90%;
        margin: 24px auto;
        padding-bottom: 60px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    }

    .entrada-tareas {
        flex-direction: column;
        align-items: stretch;
    }

    #nueva-tarea,
    #btn-agregar {
        width: 100%;
    }

    #btn-agregar {
        margin-top: 10px;
    }

    .lista-tareas li {
        padding: 18px;
    }
}


Animaciones
.lista-tareas li:hover{
    background-color: var(--color5);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

Nombre: Animacion lista de tareas
Duracion: No definido
Efecto: Cambia el color del fondo y tiene un efecto de seleccion
#btn-agregar:hover{
    background-color: var(--color6);
}

Nombre Animacion de boton agregar
Duracion No definido
Efecto Cambia color del fondo 
.btn-eliminar:hover{
    background-color: var(--color3);
}

Nombre Animacion boton eliminar
Duracion No definido
Efecto Cambia el color del fondo
#btn-ocultar:hover {
    background-color: #6a4c8a;
}

Nombre Animacion boton ocultar
Duracion No definido
Efecto Cambia el color del fondo
#btn-ocultar:active,
#btn-agregar:active,
.btn-eliminar:active {
    transform: scale(0.96);
}

Nombre Animacion interaccion boton agregar,ocultar y eliminar
Duracion No definido
Efecto Cuando interactua con el boton, hace el efecto de interaccion sobre el boton
