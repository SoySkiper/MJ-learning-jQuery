$(document).ready(function(){
    
    reloadlink();

    var boton = $('#addButton');
    var Link = $('#addLink');
    var menu = $('#menu');
    
    boton.click(function(){
        console.log(Link.val())
        // metodo .html se usa para sustituir el contenido
        //.append para insertar texto al final del html
        //.preprend su usa para insertar texto al principio del html
       menu.append('<li><a href="'+Link.val()+'"></a></li>');
       Link.val('');
       reloadlink();
    });
    //Con jQuery se puede mezclar con el lenguaje de javascript en cualquier momento, 
    //pues son compatibles
});

function reloadlink(){
        $('a').each(function(index){
            var that = $(this);
            //uso de .attr
            //crea nuevos elementos dentro de las etiquetas
            var enlace = that.attr('href');
            //atributo para abrir enlace en pestaña nueva
            that.attr('target', '_blank');
            //Eliminar atributos
            //that.removeAttr();

            //método .text para insertar texto dentro del HTML, quivalente al inneHTML en jQuery
            that.text(enlace);
        });
    }