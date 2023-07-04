/**
 * Suma los elementos al carrito
 * @method sumar_al_carrito
 * @param (string) id - El id de los elementos agregados al carrito
 * @return la suma total del carrito
 */
let total = 0; /** esta variable inicializa el carrito en 0*/

function sumar_al_carrito(id) {
    if (id == "pMacro") {
        total = total + 10000;
    } else if (id == "tMacro") {
        total = total + 5000;
    } else if (id == "pMicro") {
        total = total + 10000;
    } else if (id == "tMicro") {
        total = total + 2000;
    } else if (id == "pEI") {
        total = total + 6000;
    }
    
    document.getElementsByName("compra_total")[0].innerHTML = total;
}


/**
 * Limpia el valor del carrito
 * @method limpiar
 */
function limpiar() {
    total = 0;
    document.getElementsByName("compra_total")[0].innerHTML = "";
}


/**
 * Mensaje al presionar el boton para comprar
 * @method agradecimiento
 * @return mensaje
 */
function agradecimiento() {
    if (total == 0) {
        alert("Primero elija un articulo");
    }
    if (total != 0) {
        alert("Gracias por su compra");
    }
    total = 0;
    document.getElementsByName("compra_total")[0].innerHTML = "";
}

/** DOCUMENTACION EN JAVASCRIPT
 * Descripción: validacion del valor agregado por el usuario
 * @method cambiarNumLet
 * @param {string} id - El id de inputs de codigo de seguridad, numero de tarjeta
 * @param {number} valor - el valor de los inputs de valores agregados
 * @return
 */
function cambiarNumLet(valor, id) {
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido");

        if (id == "numero_de_tarjeta") {
            document.formulario_inscripcion.numero_de_tarjeta.value = " ";
        } else if (id == "codigo_seguridad") {
            document.formulario_inscripcion.codigo_seguridad.value = " ";
        } else if (id == "numero_telefono") {
            document.formulario_inscripcion.tel.value = " ";
        }

    }
}

/** Descripción: mostrar alerta
 * @method mostrarAlerta
 * @return
 */
function mostrarAlerta() {
    alert("Gracias por su inscripción !");
}


/*Luego*/

function realizarAccion() {
    
    Event.preventDefault();
  }


function mostrarPestana(id) {
var pestanas = document.getElementsByClassName("pestaña");

// Ocultar todas las pestañas
for (var i = 0; i < pestanas.length; i++) {
    pestanas[i].style.display = "none";
}

// Mostrar la pestaña correspondiente al ID recibido
var pestaña = document.getElementById(id);
pestaña.style.display = "block";
}

function mostrarInformacion() {
    var informacion = document.getElementById("informacion");
        
    if (informacion.style.display === "none") {
        informacion.style.display = "block";
    } else {
        informacion.style.display = "none";
    }
    }

function mostrarInformacion_2() {
    var informacion = document.getElementById("informacion_2");
        
    if (informacion.style.display === "none") {
        informacion.style.display = "block";
    } else {
        informacion.style.display = "none";
    }
    }
function mostrarInformacion_3() {
    var informacion = document.getElementById("informacion_3");
        
    if (informacion.style.display === "none") {
        informacion.style.display = "block";
    } else {
        informacion.style.display = "none";
    }
    }


    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        
        // Validar el formulario
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var email = document.getElementById("email").value;
        
        if (nombre && apellido && email) {
          // Formulario completado correctamente
          alert("Te has inscrito correctamente");
          // Aquí puedes realizar otras acciones, como enviar los datos a un servidor
          
          // Reiniciar el formulario
          document.getElementById("formulario").reset();
        } else {
          // Mostrar mensaje de error si hay campos faltantes
          alert("Por favor completa todos los campos obligatorios");
        }
      });

  