document.addEventListener('DOMContentLoaded', ()=>{
    let input_texto = document.querySelector('#ingresa_texto');
    let mensaje = document.querySelector('#mensaje');
    let btn_encriptar = document.querySelector('#btn_encriptar')
    let btn_desencriptar = document.querySelector('#btn_desencriptar')
    let btn_copiar = document.querySelector('#btn_copiar')
    let label_mensaje = document.querySelector('#label_mensaje');

    //Función para encriptar el texto digitado
    function encriptar(texto){
        return texto.replace(/e/g, 'enter')
                    .replace(/i/g, 'imes')
                    .replace(/a/g, 'ai')
                    .replace(/o/g, 'ober')
                    .replace(/u/g, 'ufat');
    }
    
    //Función para desencriptar el texto digitado
    function desencriptar(texto){
        return texto.replace(/enter/g, 'e')
                    .replace(/imes/g, 'i')
                    .replace(/ai/g, 'a')
                    .replace(/ober/g, 'o')
                    .replace(/ufat/g, 'u'); 
    }

    /*Se crea una funcion para ocultar el boton copiar si no hay texto para copiar
    Y para mostrar cuando hay texto para copiar*/
    function actualizar(){
        if(input_texto.value.trim() === ''){
            btn_encriptar.style.display = 'none';
            btn_desencriptar.style.display = 'none';
            btn_copiar.style.display = 'none';
            label_mensaje.style.display = 'block';

        } else {
            btn_encriptar.style.display = 'inline-block';
            btn_desencriptar.style.display = 'inline-block';
            label_mensaje.style.display = 'none';
            btn_copiar.style.display = 'block';
        }
    }

    input_texto.addEventListener('input', actualizar);

    //Se les agrega un evento de escucha a los botones
    btn_encriptar.addEventListener('click', () => {
        let texto = input_texto.value.toLowerCase();
        let texto_encriptado = encriptar(texto);
        mensaje.textContent = texto_encriptado;
        input_texto.value = '';
        //Con esto la caja donde se digita el texto queda vacia
    });

    btn_desencriptar.addEventListener('click', () => {
        let texto = input_texto.value.toLowerCase();
        let texto_desencriptado = desencriptar(texto);
        mensaje.textContent = texto_desencriptado;
        input_texto.value = '';
        //Con esto la caja donde se digita el texto queda vacia
    });

    btn_copiar.addEventListener('click', () => {
        navigator.clipboard.writeText(mensaje.textContent)
        .then( () => {
            alert('Texto copiado en el portapapeles');
        })
        //El catch se usa para el manejo de errores
        .catch(error => {
            console.error('Error al copiar el texto:', error);
        });
    });

    actualizar();

});
