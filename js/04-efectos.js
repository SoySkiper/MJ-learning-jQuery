$(document).ready(function(){
    var caja = $('#caja');
    var mostrar = $('#mostrar');
    var ocultar = $('#ocultar');
    var animacion = $('#animame');

    mostrar.hide();

    function OcultarDiv(){
        ocultar.click(function(){
            mostrar.show();
            ocultar.hide();
            //Velocidad de efectos fast, normal, slow
            //caja.hide('normal');
            //fadeOut, así como fadeIn muestran un efecto de des
            //slideDown: efecto que se despliega hacia abajo para mostrar
            caja.fadeOut('normal');
        });
    }
    
    function MostrarDiv(){
        mostrar.click(function(){
            ocultar.show();
            mostrar.hide();
            //caja.show('fast');
            //caja.fadeIn('normal');
            //función fadeTo necesita de dos parametros: velocidad, opacidad(0-1)
            //slideUp: Efcecto que oculta hacia arriba
            caja.fadeTo('slow', 1)
        })
    }
    function TodoEnUno(){
        $('#todoenuno').click(function(){
            //fadeToggle: Agrega el efecto fade
            //slideToggle: Depliega el div
            caja.toggle('fast');
        });
    }
    function animame(){
        animacion.click(function(){
            //left solo es para elementos de posicion absoluta
            caja.animate({marginLeft: '500px',
                        fontSize: '30px',
                        opacity: '0.9',
                        height: '54px',
                        width: '350px',
                        }, 'normal').css('text-align','center')
                        .animate({borderRadius: '900px', marginTop: '150px'},'slow');
        });
    }

    MostrarDiv();
    OcultarDiv();
    TodoEnUno();
    animame();
    
});