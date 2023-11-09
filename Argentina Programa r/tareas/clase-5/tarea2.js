// Mostrar en la caja de texto y asignar al H1 el nombre

function mostarResultado() {
    let pNombre = document.getElementById("primer-nombre").value;
    let sNombre = document.getElementById("segundo-nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    document.getElementById("resultado").value = pNombre + ' ' + sNombre + ' '+ apellido + ' ' + edad + ' años';
    console.log(pNombre + ' ' + sNombre + ' ' + apellido + ' ' + edad + ' años');
    // Asignar al h1 el nombre 
    titulo = document.getElementById("tit");
    titulo.innerText  = 'Bienvenido '+ pNombre + ' ' + apellido;;
}

btn = document.getElementById("btn-ingresar");
btn.addEventListener("click", mostarResultado);