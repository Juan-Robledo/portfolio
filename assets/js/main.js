
const formulario = document.querySelector("#contacto");
formulario.addEventListener("submit",function(event){
    event.preventDefault();
    let campos = formulario.querySelectorAll('input');
    let errores = formulario.querySelectorAll('.mensajeError');
    for(let error of errores){
        formulario.removeChild(error);
    }
    for(let campo of campos){
        let mensaje = document.createElement('p');
        mensaje.classList.add('mensajeError');
        if(campo.value == ""){
            mensaje.innerHTML = 'campo vacio';
            campo.after(mensaje);
        }
        if (campo.type == 'email'){
            let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!regex.test(campo.value)){
                mensaje.innerHTML += "Esto no es un email válido";
                campo.after(mensaje);
            }
        if(campo.type == "tel"){
            if(!isNaN(campo.value)){
                mensaje.innerHTML += 'ingrese un numero'
                campo.after(mensaje);
            }
            let campoLength = campo.value.length;
            if(campoLength <9 || campoLength >13){
                mensaje.innerHTML += 'los caracteres ingresados no son correctos'
                campo.after(mensaje);
            }
        }
    }
});