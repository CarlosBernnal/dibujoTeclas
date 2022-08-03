var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var pizarrita = document.getElementById("pizarra");
var papel = pizarrita.getContext("2d");
var btnLimpiar = document.getElementById("limpiar");

var x = 150;
var y = 150;

dibujarLinea("white", 1,1,1,299,papel);
dibujarLinea("white", 1,299,299,299,papel);

dibujarLinea("white", 299,1,299,299,papel);
dibujarLinea("white", 1,1,299,1,papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 4;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

//FALTA CORREGIR: EL TRAZO DE LINEA SALE DEL CANVA
btnLimpiar.addEventListener("click", borrarDibujo);

function borrarDibujo(){
    window.location.reload();
}

document.addEventListener("keydown", dibujarTeclado);

function dibujarTeclado(evento){
    var colorLinea = document.getElementById("seleccionar_color");
    var movimiento = 5;

    switch(evento.keyCode){
        case teclas.UP:
            dibujarLinea(colorLinea.value, x, y, x, y-movimiento, papel);
            y=y-movimiento;
            break; 
        case teclas.DOWN:
            dibujarLinea(colorLinea.value, x, y, x, y+movimiento, papel);
            y=y+movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colorLinea.value, x, y, x-movimiento, y, papel);
            x=x-movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorLinea.value, x, y, x+movimiento, y, papel);
            x=x+movimiento;
            break;
        default:
            alert("Tecla presionada no registrada!");
            break;
    }
}