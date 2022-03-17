$(document).ready(function(){
    
    var caja = $("#caja");

    /*Mouseover
    //Método para cuando el ratón se deja sobre el elemento.
    caja.mouseOver(function(){
        $(this).css("background", "red")
    });

    //MouseOut
    //Método para cuando el ratón sale del elemento
    caja.mouseOut(function(){
        $(this).css("background", "green")
    });
    */
    function cambiaRojo(){
        $(this).css("background", "red")
    }
    function cambiaVerde(){
        $(this).css("background", "green")
    }

    //Hover
    caja.hover(cambiaRojo, cambiaVerde);

    //Click, double click

    caja.click(function(){
        $(this).css("background", "blue").css("color", "white");
    });

    caja.dblclick(function(){
        $(this).css("background", "pink").css("color", "yellow");
    });

    //Focus y blur

    var nombre = $('#nombre');
    var datos = $('.datos')

    nombre.focus(function(){
        $(this).css("border", "3px solid yellow");
    });

    nombre.blur(function(){
        $(this).css("border", '1px solid #ccc');
        
        // método .val para sacar valor de input
        // método .text para mostrar información en document
        datos.text($(this).val()).show();
    });

    //mouseDown y mouseUp

    datos.mousedown(function(){
        $(this).css('border-color', '#ccc');
    });
    datos.mouseup(function(){
        $(this).css('border-color', 'black');
    });

    //Mousemove

})