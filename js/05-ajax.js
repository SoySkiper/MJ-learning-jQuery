$(document).ready(function(){
    //Load
    /**Permite hacer petición ajax, se puede hacer peticiones a un para luego incrutar información HTML como un json
    datos = $('#datos');
    datos.load('https://reqres.in/');
    */
    
    // get y post
    $.get('https://reqres.in/api/users', {page: 2}, function(response){
        response.data.forEach((element, index) => {
            $('#datos').append('<p>'+element.first_name+ ' ' + element.last_name+'</p>');
        });
    });

    $('#formulario').submit(function(e){
        e.preventDefault();
        var usuario = {
            name: $('input[name="name"]').val(),
            last_name: $('input[name="apellidos"]').val()
        }
/*
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){
            alert('Usuario añadido');
        });
*/      console.log(usuario);
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: usuario,
            dataType: 'json',
            beforeSend: function(){
                console.log('Enviando formulario...');
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log('A ocurrido un error');
            },
            timeout: 2000
        });
    });
    
    

    /*
    $.post('https://reqres.in/api/users', usuario, function(response){
        console.log(response);
    });
    */
});
