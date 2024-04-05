const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburguer');
imagenes.forEach(imagen=>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorlight.addEventListener('click', (e)=>{
    if(e.targget !== imageneslight){
        contenedorlight.classList.toggle('show')
        imageneslight.classList.toggle('showimage')
        hamburguer1.style.opacity = '1'
    }

})


const aparecerImagen = (imagen)=>{
    imageneslight.src = imagen
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showimage')
    hamburguer1.style.opacity = '0'
  }
