let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarjuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click",ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click",ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click",ataqueTierra)
}
function seleccionarMascotaJugador (){
    let inputHipodogue = document.getElementById("hipodogue")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")


    if (inputHipodogue.checked){
        spanMascotaJugador.innerHTML ="Hipodogue"
    } else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML ="Capipepo"
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML ="Ratigueya"
    } else {
        alert("No seleccionaste ninguna")
    }
    seleccionarMascotaEnemigo()  
}

function seleccionarMascotaEnemigo () {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = "Hipodogue"
    } else if(mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
    

}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }
    combate()
}

function combate () {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if (ataqueEnemigo == ataqueJugador) { 
        crearmensaje("EMPATE")
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {  
        crearmensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearmensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearmensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else {
        crearmensaje ("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()

}
function revisarVidas () {
    if (vidasEnemigo==0){
    crearmensajeFinal("FELICITACIONES! GANASTE😁")
    } else if(vidasJugador==0){
    crearmensajeFinal("LO SENTIMOS, PERDISTE😢")
    }    
}
function crearmensaje (resultado) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML ="Tu mascota atacó con " + ataqueJugador + " la mascota del enemigo atacó con " + ataqueEnemigo + " " + resultado

    sectionMensajes.appendChild(parrafo)
}
function crearmensajeFinal (resultadoFinal) {
    let sectionMensajes = document.getElementById("mensajes")
    
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    
    sectionMensajes.appendChild(parrafo)
    }

function aleatorio(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}


window.addEventListener("load",iniciarjuego)
