function iniciar(){
      cajadatos = document.getElementById('caja');
      archivos = document.getElementById('archivos');
      archivos.addEventListener('change', procesar);
    }

    function procesar(e){

        // Guardamos todos los archivos seleccionados en la variable archivos.
      let archivos = e.target.files;
      let archivo = archivos[0];

      // Validar que sea una imagen
      if (!archivo.type.startsWith("image/")) {
        cajadatos.innerHTML = "El archivo seleccionado no es una imagen.Por favor, seleccione una imagen </p>";
        return;
      }

      let lector = new FileReader();
      lector.onload = mostrar;
      lector.readAsDataURL(archivo); 
    }

    function mostrar(e){
      let resultado = e.target.result;
      cajadatos.innerHTML = "<img src='" + resultado + "' style='max-width:300px;'>";
    }

    window.addEventListener('load', iniciar, false);
