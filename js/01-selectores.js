'use strict'

// Comprobación de funcionamiento de JQuery
//Funciona con eln signo de dólar, pero tambien se puede sustitutir por la palabra jQuery
$(document).ready(()=>{
    //Se usa "$" para seleccionar un elemento del HTML y posteriormente se le pueden encadenar métodos aplicables
    
    //**Selector de ID**
    $("#rojo").css("background", "red")
            .css("color", "white");

    $("#amarillo").css("background", "yellow")
            .css("color", "green");

    $("#verde").css("background", "green").css("color", "white");

    //**Selector de clases**
    var claseZebra = $(".zebra").css("padding", "2px");

    /*
    El método eq funciona como selector de elemtentos de un array, con la ventaja de poder 
        mostrar métodos de jquery para realizar más acciones
    console.log(claseZebra.eq(1));
    */

    $(".leon").click(function(){
        console.log("Si está funcionando este evento");
        $(this).addClass("zebra");
    });
    
    //Selector de etiqueta
    var parrafos = $('p').css('cursor', 'pointer');

    parrafos.click(function(){
        var that = $(this);
        //hasClass comprueba el contenido de las clases
        if(!that.hasClass('grande')){
            that.addClass('grande');
        }else{
            that.removeClass('grande');
        }    
    });

    //**Selector de atributos**

    $('[title="Facebook"]').css('background', '#ccc');
    $('[title="Google"]').css('background', 'blue');

    //**Otros** 
    //$('p, a').addClass('margenSuperior'); //Selección múltiple de calses

    //parent se usa para busquedas en los niveles padre de la etiqueta en HTML
    //find puede buscar elemetos como clases, id, etiqueta o atributos dentro del parametro.

    var busqueda = $('#li2').parent().parent().find('.resaltado');
    console.log(busqueda)


});
