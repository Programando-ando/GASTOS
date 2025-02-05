var gastos = JSON.parse(localStorage.getItem("gastos")) || [];

function applyTheme() {
  const savedTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const theme = savedTheme || systemTheme;
  document.documentElement.setAttribute("data-theme", theme);
  updateButtonText(theme);
}

let chbox = document.querySelector('#flexSwitchCheckChecked');
let body = document.body;

chbox.addEventListener('change', function(){
    if(this.checked){
        body.setAttribute('style','background-color: black; color:white;', 'h1 color:white', 'border: 2px solid white;')
    }else{
        body.setAttribute('style','background-color: white; color:black;', 'h1 color:black', 'border: 2px solid black;')
    }
});

function updateButtonText(theme) {
  const button = document.getElementById("flexSwitchCheckChecked");
  button.setAttribute = theme === "dark" ? button.checked = true : button.checked = false;
}

const addgasto = document.getElementById("addg");

 addgasto.onclick = () => {
  
  var ngasto=document.getElementById("gasto").value;
  var dgasto= document.getElementById("dgasto").value;
  
  if (ngasto == "" || dgasto.trim()=="") {
    Swal.fire({title: "ERROR!",text: "Tienes campos vacíos, ingresa valores válidos",icon: "error"});
        return;
  }
  
  const gastoss = {Ngasto: ngasto, Descripcion: dgasto};
  
  gastos.push(gastoss);
  
  localStorage.setItem("gastos", JSON.stringify(gastos));
  document.getElementById("gasto").value = "";
  document.getElementById("dgasto").value = "";
  console.log(localStorage.getItem("gastos"));
  
  mostrarGasto();
  
}

const mostrarGasto = () =>{
  var divGastos = document.getElementById("mostrarG");
  var result = ``;
  let index = 0;

gastos.forEach(gasto =>{
  result += `<div class="card m-auto mt-2" style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-title">${gasto.Descripcion}</h3>
    <h4 class="card-text">$ ${gasto.Ngasto}</h4>
    
   <button class="btn btn-success"  data-bs-toggle="modal" data-bs-target="#editarGasto" onclick="mostarG(${index})">
   <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 512 512"><path fill="#7bd873" d="M506.738 290.613c-160.397 4.842-221.783 156.007-382.18 160.85c-3.862.118-8.374-1.827-9.995-4.222L.139 278.138c-1.623-2.398.26-4.338 4.123-4.457c160.397-4.842 221.783-156.007 382.18-160.85c3.862-.118 8.374 1.827 9.995 4.222l114.424 169.103c1.622 2.398-.261 4.339-4.123 4.457"/><path fill="#597b91" d="M125.504 298.766c9.077-2.174 17.369-2.709 25.456-1.735c2.29.272 3.78 2.107 3.321 4.058a790 790 0 0 1-2.398 9.853c-.454 1.821-2.529 3.074-4.765 2.885c-8.651-.727-16.369.363-24.132 3.241c-8.927 3.29-12.865 7.849-9.37 13.014c3.49 5.158 9.525 6.446 29.095 3.925c23.802-3.285 38.892-2.963 49.336 12.471c8.167 12.069 5.421 26.687-9.215 37.458c-1.45 1.055-1.801 2.736-.88 4.096l9.756 14.418c1.13 1.671.304 3.743-1.87 4.593a267 267 0 0 1-11.058 4.05c-2.233.763-4.981-.006-6.112-1.676l-9.029-13.344c-1.018-1.505-3.38-2.311-5.544-1.884c-13.74 2.708-26.803 1.286-38.061-1.952c-2.683-.774-4.922-1.435-4.064-2.967q2.794-5.026 5.429-10.286c1.159-2.32 2.917-1.669 5.336-1.112c10.499 2.404 20.583 2.42 30.181-.894c10.862-3.789 14.48-10.348 10.253-16.596c-4.147-6.128-9.61-6.875-28.233-5.092c-29.374 2.378-45.145-4.751-53.301-16.804c-8.212-12.136-1.08-22.507 14.475-30.581c1.679-.873 3.221-.961 2.267-2.371l-10.959-16.195c-1.131-1.672.935-1.912 3.168-2.675a267 267 0 0 0 11.058-4.05c2.174-.85 4.833-.213 5.965 1.459l8.811 13.022c.966 1.431 3.099 2.145 5.084 1.671m229.099 53.381c-23.336 15.426-45.784 32.164-69.083 47.645c-5.437 3.617-12.534 2.576-15.776-2.217L153.036 225.097c-3.243-4.793-1.405-11.523 4.032-15.14c23.299-15.48 45.747-32.219 69.083-47.645c5.446-3.604 12.551-2.549 15.794 2.243l116.708 172.478c3.244 4.794 1.396 11.51-4.05 15.114"/><path fill="#c4f0f2" d="M429.453 360.41c52.053 52.053 47.581 86.628 23.217 111.36c-24.591 24.963-60.583 29.288-80.142 9.73c-13.484-13.484-15.612-34.779-7.454-54.765c1.583-3.878-1.086-7.18-5.027-6.169c-13.153 3.376-26.304.925-35.096-7.867c-9.943-9.943-11.773-25.462-6.237-40.253c1.435-3.835-1.237-6.999-5.112-5.999c-11.34 2.927-22.686.522-29.805-7.711c-10.256-11.862-41.865-38.984-28.377-53.471c9.795-10.519 118.603-.285 174.033 55.145M244.001 88.731C215.08 21.036 181.327 12.309 149.3 25.709c-32.326 13.524-49.745 45.317-38.878 70.752c7.492 17.536 26.463 27.442 48.049 27.314c4.188-.025 6.259 3.683 3.853 6.963c-8.032 10.949-10.655 24.067-5.771 35.501c5.525 12.931 19.245 20.409 35.034 20.78c4.093.096 6.035 3.754 3.663 6.978c-6.94 9.434-8.934 20.859-3.945 30.532c7.188 13.936 20.586 53.373 39.055 46.251c13.411-5.171 44.438-109.963 13.641-182.049"/></svg>
   </button>

  <button class="btn btn-danger" onclick="eliminarG(${index})">
  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="currentColor" d="M10.53 7.43c.42-.31.93-.47 1.54-.47s1.11.16 1.5.49c.39.32.65.7.79 1.12l1.89-.8c-.24-.71-.71-1.35-1.4-1.92c-.5-.4-1.12-.65-1.85-.77V3h-2v2.11q-.615.12-1.14.39c-.35.18-.64.39-.9.63l1.43 1.43c.04-.04.09-.09.14-.13M2.81 2.81L1.39 4.22l12.35 12.35c-.43.28-.95.43-1.55.43c-.71 0-1.32-.23-1.83-.7c-.5-.47-.86-1.07-1.06-1.81l-1.98.8q.51 1.755 1.83 2.73c.57.42 1.19.68 1.85.83V21h2v-2.08c.44-.07.87-.17 1.29-.35c.34-.14.64-.32.92-.53l4.57 4.57l1.41-1.41z"/></svg>
  </button>

     <button class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#aumentarGasto" onclick="mostarG(${index})">
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"/></svg>
   </button>
  </div>
</div>`;

index++;
divGastos.innerHTML = result;
});



}

const eliminarG =(index)=>{
  Swal.fire({
        title: "¿Estás seguro de eliminar este gasto?",
        showDenyButton: true,
        confirmButtonText: "Si, eliminar",
        denyButtonText: "No estoy seguro"
    }).then((result) => {
        if (result.isConfirmed) {
            gastos.splice(index, 1);
            localStorage.setItem("gastos", JSON.stringify(gastos)); 
            mostrarGasto(); 
            Swal.fire("Gasto eliminado exitosamente", "", "success");
            location.reload();
        }
    });
}

var indiceGasto;
function mostarG(index) {
    indiceGasto = index;
    var gastoo = gastos[index];
    
    document.querySelector("#edgasto").value = gastoo.Descripcion;
    document.querySelector("#adgasto").value = gastoo.Descripcion;
}


document.getElementById("actualizar").onclick = () => {
  let gastos = JSON.parse(localStorage.getItem("gastos")) || [];
  let gasto = gastos[indiceGasto];

  let cantidadExistente = parseFloat(gasto.Ngasto) || 0;
  
  if (cantidadExistente === 0) {
    Swal.fire({
      title: '¡ERROR!',
      text: 'Este gasto ya ha sido pagado completamente. No puedes ingresar más cantidades.',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    return;
  }

  let nuevaCantidad = parseFloat(document.getElementById("egastos").value) || 0;
  
  if (nuevaCantidad == "") {
    Swal.fire({
      title: "ERROR!",
      text: "Tienes campos vacíos, ingresa valores válidos",
      icon: "error"
    });
    return;
  } 
  
  let resultadoResta = cantidadExistente - nuevaCantidad;

  if (resultadoResta < 0) {
    Swal.fire({
      title: '¡ERROR!',
      text: 'La cantidad a pagar no puede exceder el monto restante del gasto.',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    return;

    mostrarGasto();
  }

  gasto.Ngasto = resultadoResta;
  
  if (gasto.Ngasto === 0) {
    Swal.fire({
      title: '¡Felicidades!',
      text: 'YA HAS TERMINADO DE PAGAR este gasto.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }

  Swal.fire({
    title: "¿Estás seguro de actualizar este gasto?",
    showDenyButton: true,
    confirmButtonText: "Sí",
    denyButtonText: "No"
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.setItem("gastos", JSON.stringify(gastos));
      mostrarGasto();
      document.getElementById("egastos").value="";
      location.reload();
      
    }
  });
}


document.getElementById("aumentar").onclick = () => {
  let gastos = JSON.parse(localStorage.getItem("gastos")) || [];
  let gasto = gastos[indiceGasto];

  let cantidadExistente = parseFloat(gasto.Ngasto) || 0;
  
  if (cantidadExistente === 0) {
    Swal.fire({
      title: '¡ERROR!',
      text: 'Este gasto ya ha sido pagado completamente. No puedes ingresar más cantidades.',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    return;
  }

  let nuevaCantidad = parseFloat(document.getElementById("agastos").value) || 0;
  
  if (nuevaCantidad == "") {
    Swal.fire({
      title: "ERROR!",
      text: "Tienes campos vacíos, ingresa valores válidos",
      icon: "error"
    });
    return;
  } 
  
  let resultadoResta = cantidadExistente + nuevaCantidad;

  if (resultadoResta < 0) {
    Swal.fire({
      title: '¡ERROR!',
      text: 'La cantidad a pagar no puede exceder el monto restante del gasto.',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    return;

    mostrarGasto();
  }

  gasto.Ngasto = resultadoResta;
  
  if (gasto.Ngasto === 0) {
    Swal.fire({
      title: '¡Felicidades!',
      text: 'YA HAS TERMINADO DE PAGAR este gasto.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }

  Swal.fire({
    title: "¿Estás seguro de aumentar este gasto?",
    showDenyButton: true,
    confirmButtonText: "Sí",
    denyButtonText: "No"
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.setItem("gastos", JSON.stringify(gastos));
      mostrarGasto();
      document.getElementById("egastos").value="";
      location.reload();
      
    }
  });
}

mostrarGasto();

        applyTheme();

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
            if (!localStorage.getItem("theme")) {
                applyTheme();
            }
        });