/*Array de Objetos*/
const lugares = [
    {lugar:"Cataratas", precio: 45000},
    {lugar: "Bariloche", precio:70000},
    {lugar: "Catamarca", precio: 55000},
]
localStorage.setItem("viajes",JSON.stringify(viajes));






/*Calcular costo + impuestos y lo enviamos por Dom*/

function Calculoviaje (precio,pasajeros){
    precio = document.getElementById('precio').value;
    pasajeros = document.getElementById('pasajeros').value;
    let costo= (precio * pasajeros) * 1.21;
    form.addEventListener("submit", (e) => {
        let div = document.createElement("div");
        div.innerHTML = "<h1>su precio es</h1>"+ costo ;
        form.append(div);
    });
}

let form =document.getElementById('form');
let boton= document.getElementById('boton');
boton.addEventListener('click',()=> 
    Calculoviaje ());

/* Mensaje de formulario por Dom*/
let contenedor = document.getElementById("contenedor");
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputs = e.target.children;
  if(!inputs[0].value.includes("@")){
    contenedor.innerHTML = "";
    let div = document.createElement("div");
    div.innerHTML = "correo incorrecto";
    contenedor.append(div);
  }else{
    contenedor.innerHTML = "";
  }
})


/*Agregar al carrito viajes*/

let boton1=document.getElementById('boton1');
boton1.addEventListener('click', () => {
Swal.fire({
    title: 'Está seguro que quiere agregar el paquete a su carrito?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, seguro',
    cancelButtonText: 'No, no quiero'
}).then((result) => {

    if (result.isConfirmed) {
        Swal.fire({
            title: 'Estas muy cerca de conseguir tu viaje favorito!',
            icon: 'success',
            text: 'Solo falta un paso más'
        })
    }
})
})


let boton2=document.getElementById('boton2');
boton2.addEventListener('click', () => {
Swal.fire({
    title: 'Está seguro que quiere agregar el paquete a su carrito?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, seguro',
    cancelButtonText: 'No, no quiero'
}).then((result) => {

    if (result.isConfirmed) {
        Swal.fire({
            title: 'Estas muy cerca de conseguir tu viaje favorito!',
            icon: 'success',
            text: 'Solo falta un paso más'
        })
    }
})
})
let boton3=document.getElementById('boton3');
boton3.addEventListener('click', () => {
Swal.fire({
    title: 'Está seguro que quiere agregar el paquete a su carrito?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, seguro',
    cancelButtonText: 'No, no quiero'
}).then((result) => {

    if (result.isConfirmed) {
        Swal.fire({
            title: 'Estas muy cerca de conseguir tu viaje favorito!',
            icon: 'success',
            text: 'Solo falta un paso más'
        })
    }
})
})

/* Mensaje de formulario por Dom*/
let lugar1 = document.getElementById("lugar");
let precio = document.getElementById("precio");
let pasajeros= document.getElementById("pasajeros");


/*Filtrar por precio los destinos disponibles */
let filtro= document.getElementById('filtro');
let filtrados = lugares.filter(item => item.precio<= precio);
    filtrados.forEach (item => {
        let mensaje =`
        id: ${item.id}
        nombre: ${item.nombre}
        precio: ${item.precio}
        `;
        filtro.addEventListener("submit", (e) => {
            let div = document.createElement("div");
            div.innerHTML = "<h1>los lugares que arrojo su búsqueda son:</h1>"+ mensaje ;
            filtro.append(div);
        });
    } )
