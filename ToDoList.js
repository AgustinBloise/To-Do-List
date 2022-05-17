let inputPrincipal = document.querySelector(".input")

let botonAgregar = document.querySelector(".boton-agregar")

let container = document.querySelector('.container')


class Item {

    constructor (nuevaTarea) {
        this.CrearDiv (nuevaTarea)
    }


    CrearDiv (nuevaTarea) {

        let inputItem = document.createElement("input")
        inputItem.type = "text"
        inputItem.disabled = true
        inputItem.classList.add("item-input")
        inputItem.value = nuevaTarea

        let newDiv = document.createElement('div')
        newDiv.classList.add('item')

        let botonEditar = document.createElement('button')
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
        botonEditar.classList.add('boton-editar')

        let botonRemover = document.createElement('button')
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>"
        botonRemover.classList.add('boton-remove')

        newDiv.appendChild(inputItem)
        newDiv.appendChild(botonEditar)
        newDiv.appendChild(botonRemover)

        document.body.appendChild(newDiv)
        

        botonEditar.addEventListener('click', candado)

        botonRemover.addEventListener("click", bodi)

        function candado(){      
            inputItem.toggleAttribute('disabled')
            if(!inputItem.disabled){
                    botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>"
            }
            else{
                botonEditar.innerHTML= "<i class='fas fa-lock'></i>"
            }
        }
        
        function bodi(){
            document.body.removeChild(newDiv)
        }
    }
}


botonAgregar.addEventListener('click', chequearInput)

inputPrincipal.addEventListener('keypress', enter)

function chequearInput(){
    if(!!inputPrincipal.value){
        let tarea = new Item(inputPrincipal.value)
        inputPrincipal.value = ''
        inputPrincipal.textContent = ''
    }
}

function enter(e){
    if(e.keyCode === 13){
        chequearInput()
    }
}

 