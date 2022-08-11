console.log('inicia el juego');
// BASE DE DATOS DE LAS TARJETAS
let Naturaleza1 = ['🦋','🌸','🌻','🍄','🌼','🌵','🍀','🌴','🦔','🌹','🐝','🐞'];
let Naturaleza2 = ['🦋','🌸','🌻','🍄','🌼','🌵','🍀','🌴','🦔','🌹','🐝','🐞'];

Juego()
function Elementos() { //ELEMENTOS YA UNIFICADOS
    imagenes = Naturaleza1.concat(Naturaleza2);
}
function Juego(){ //REPRESENTACIONES DE TAREJETAS
    Elementos()
    let tablero = document.getElementById("tableroDeJuego");
    let tarjetas = []
    for (let i = 0; i < 24; i++){
        tarjetas.push(
            `
            <div class="tarjetas" onclick="seleccionarTarjeta(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="cuadro SegundaCara" id="SegundaCara${i}">
                        ${imagenes[0]}
                    </div>
                    <div class="cuadro PrimeraCara">
                    </div>
                </div>
            </div>        
            `
        )
        if (i%2==1){
            imagenes.splice(0,1);
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}
//ROTACIONES DE TARJETAS
let escogido = []
function seleccionarTarjeta(i){
     let tarjeta = document.getElementById("tarjeta" + i);
     if ( tarjeta.style.transform != "rotateY(180deg)"){
        tarjeta.style.transform = "rotateY(180deg)"
        escogido.push(i)
     }
     if (escogido.length == 2){
        no(escogido)
        escogido = []
     }
}
//AYUDA AL ANALISIS DE LAS CARTAS Y MOSTRAR SI SON O 
//NO PAREJA CAMBIANDO EL COLOR DE FONDO
function no(escogido){
    setTimeout(() => {
        let tarjetaUno = document.getElementById("tarjeta" + escogido[0])
        let tarjetaDos = document.getElementById("tarjeta" + escogido[1])
        let traseraUno = document.getElementById("SegundaCara" + escogido[0])
        let traseraDos = document.getElementById("SegundaCara" + escogido[1])
        if (traseraUno.innerHTML != traseraDos.innerHTML){
           let tarjetaUno = document.getElementById("tarjeta" + escogido[0])
           let tarjetaDos = document.getElementById("tarjeta" + escogido[1])
           tarjetaUno.style.transform = "rotateY(0deg)"
           tarjetaDos.style.transform = "rotateY(0deg)"
        }else{
            traseraUno.style.background = "#A3AB78"
            traseraDos.style.background = "#A3AB78"
        }

    }, 1000);
}