//onchange
const numberInput = document.querySelector(".number-input")
const numerosTarjeta = document.querySelector(".cardNumber")
const monthText = document.querySelector(".monthText")
const yearText = document.querySelector(".yearText")
const monthInput = document.querySelector(".month")
const yearInput = document.querySelector(".year")

const errorname = document.querySelector(".error-name")
const errorcard = document.querySelector(".error-card")
const errordate = document.querySelector(".error-date")
const errorcvv = document.querySelector(".error-cvv")

const nameText = document.querySelector(".nameText")
const nameInput = document.querySelector(".name-input")

const cvvInput = document.querySelector(".cvvInput")
const cvvText = document.querySelector(".cvvText")

const boton = document.querySelector(".boton")

const validacion = () =>{
    if(numberInput.value.length < 1){
        numberInput.classList.add("border-red")
        errorcard.classList.add("mostrar")
    }else{
        numberInput.classList.remove("border-red")
        errorcard.classList.remove("mostrar")
    }
}
const validacionNombre = () =>{
    if(nameInput.value.length < 1){
        nameInput.classList.add("border-red")
        errorname.classList.add("mostrar")
    }else{
        nameInput.classList.remove("border-red")
        errorname.classList.remove("mostrar")
    }
}
const validacionMonth = () =>{
    if(monthInput.value.length < 1){
        monthInput.classList.add("border-red")
        errordate.classList.add("mostrar")
    }else{
        monthInput.classList.remove("border-red")
        errordate.classList.remove("mostrar")
    }
}
const validacionYear = () =>{
    if(yearInput.value.length < 1){
        yearInput.classList.add("border-red")
        errordate.classList.add("mostrar")
    }else{
        yearInput.classList.remove("border-red")
        errordate.classList.remove("mostrar")
    }
}
const validacioncvv = () =>{
    if(cvvInput.value.length < 1){
        cvvInput.classList.add("border-red")
        errorcvv.classList.add("mostrar")
    }else{
        cvvInput.classList.remove("border-red")
        errorcvv.classList.remove("mostrar")
    }
}

boton.addEventListener("click", validacioncvv)
boton.addEventListener("click", validacionMonth)
boton.addEventListener("click", validacionYear)
boton.addEventListener("click", validacionNombre)
boton.addEventListener("click", validacion)


const cambios = () => {
    numerosTarjeta.innerHTML = numberInput.value
}
numberInput.addEventListener("change", cambios)

monthInput.addEventListener("change", () => {
    monthText.innerHTML = monthInput.value
})

yearInput.addEventListener("change", () => {
    yearText.innerHTML = yearInput.value
})

nameInput.addEventListener("change", () => {
    nameText.innerHTML = nameInput.value
})

cvvInput.addEventListener("change", () => {
    cvvText.innerHTML = cvvInput.value
})
