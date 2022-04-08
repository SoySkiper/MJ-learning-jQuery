$(document).ready(function(){
    var elemento = $('.elemento');
    var lista =$('.lista-juegos');
    var mov = $('#move');
    var area = $('#area');
    var cajaEfectos = $('.cajaEfectos');
    var botMostrar = $('#mostrar');
    var popup = $('#popup');
    var calendario = $('#calendario');
    var pestanas = $('#pestanas');

   //Mover atravez de la página
    elemento.draggable();
    mov.draggable();

    //Redimención de elementos
    elemento.resizable();

    //Seleccion en una lista
    //lista.selectable();

    //Ordenar lista 
    lista.sortable({
        update: function(event, ui){
            console.log(event, ui);
        }
    });

    //Acción al soltar algo dentro de otro div
    area.droppable({
        drop: function(){
            console.log('Se soltó algo dentro del div');
        }
    })

    //Efectos
    botMostrar.click(function(){
        /**
         * .toggle('fade')
         * .fadeToggle();
         * 
         * .effect('explode');
         * .toggle('explode');
         * 
         * .toggle('blind');
         * .toggle('slide');
         * 
         * .toggle('drop');
         * .toggle('fold');
         * .toggle('scale');
         * .toggle('shake');
         * 
         * .toggle('shake', {JSON para modificar propiedades}, velocidad de efecto, tiempo de efecto])
         */
        cajaEfectos.toggle('scale');
    });

    //Tooltip
    $(document).tooltip();

    //.dialog para abrir un recuadro tipo popup
    

    $('#butPop').click(function(){
        popup.dialog();
    })

    //calendario
    calendario.datepicker();

    //tabs
    pestanas.tabs();
});