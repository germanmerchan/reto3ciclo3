
/*
Funciones para guardar Disfraz 
***/

function getDisfraz(){

    $.ajax({
        url: 'https://g3fb97209b3eaaa-base1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
        headers:{
            'Access-Control-Allow-Origin': '*'
        },
        type: 'GET',
        dataType: 'JSON',
        success: function(response){
            //alert('Registros enviados');
            $('#estatusDisfraz').empty();
            resultadosDisfraz(response.items);
        }
    });
}


function resultadosDisfraz(items){

        $("#estatusDisfraz").empty();
        $("#estatusDisfraz").append("<table border='1'>");
        $("#estatusDisfraz").append("<caption>Tabla de Disfraces</caption>");
        $("#estatusDisfraz").append("<tr><th>Elemento</th><th>Brand</th><th>Model</th><th>Categoría</th><th>Nombre</th><th>Acciones</th></tr>");
            for (i=0; i < items.length; i++){
                $("#estatusDisfraz").append("<tr>");
                $("#estatusDisfraz").append("<td>" + items[i].id + "</td>");
                $("#estatusDisfraz").append("<td>" + items[i].brand + "</td>");
                $("#estatusDisfraz").append("<td>" + items[i].model + "</td>");
                $("#estatusDisfraz").append("<td>" + items[i].category_id + "</td>");
                $("#estatusDisfraz").append("<td>" + items[i].name + "</td>");
                $("#estatusDisfraz").append("<td>" + '<button onclick="deleteDisfraz('+items[i].id+')">Borrar</button>' + "</td>");
                $("#estatusDisfraz").append("<td>" + '<button onclick="getDisfrazEspecifico('+items[i].id+')">Obtener Registro</button>' + "</td>");
                $("#estatusDisfraz").append("</tr>");
            }
        $("#estatusDisfraz").append("</table>");    
}

function saveDisfraz() {
    var disfraz = {
    id: $('#id').val(),
    brand: $('#brand').val(),
    model: $('#model').val(),
    category_id: $('#category_id').val(),
    name: $('#name').val(),
    };

    let datos = JSON.stringify(disfraz);

    $.ajax({
        url: 'https://g3fb97209b3eaaa-base1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
        type: 'POST',
        data: disfraz,
        dataType: 'JSON',
        success: function(response){
            $("#estatusDisfraz").empty();
            $('#id').val('');
            $('#brand').val('');
            $('#model').val('');
            $('#category_id').val('');
            $('#name').val('');
            getDisfraz();
        }
    });    
}

function editDisfraz() {
    var disfraz = {
    id: $('#id').val(),
    brand: $('#brand').val(),
    model: $('#model').val(),
    category_id: $('#category_id').val(),
    name: $('#name').val(),
    };

    let datos = JSON.stringify(disfraz);

    $.ajax({
        url: 'https://g3fb97209b3eaaa-base1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
        type: 'PUT',
        data: datos,
        contentType: 'application/JSON',
        dataType: 'JSON',
        success: function(response){
            $("#estatusDisfraz").empty();
            $('#id').val('');
            $('#brand').val('');
            $('#model').val('');
            $('#category_id').val('');
            $('#name').val('');
            getDisfraz();
        }
    });    
}

function deleteDisfraz(idDisfraz) {
    var disfraz = {
    id:idDisfraz
    };

    let datos = JSON.stringify(disfraz);

    $.ajax({
        url: 'https://g3fb97209b3eaaa-base1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
        type: 'DELETE',
        data: datos,
        contentType: 'application/JSON',
        dataType: 'JSON',
        success: function(response){
            $("#estatusDisfraz").empty();
            getDisfraz();
        }
    });    
}

function getDisfrazEspecifico(idDisfraz) {
    $.ajax({
        url: 'https://g3fb97209b3eaaa-base1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume/'+idDisfraz,
        type: 'GET',
        dataType: 'JSON',
        success: function(response){
            var item = response.items[0];
            $('#id').val(item.id);
            $('#brand').val(item.brand);
            $('#model').val(item.model);
            $('#category_id').val(item.category_id);
            $('#name').val(item.name);
            //getDisfraz();
        }
    });    
}


/*
Funciones para guardar Cliente 
***/

function getCliente(){

$.ajax({
    url: 'https://g3fb97209b3eaaa-base1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
    headers:{
        'Access-Control-Allow-Origin': '*'
    },
    type: 'GET',
    dataType: 'JSON',
    success: function(response){
        //alert('Registros enviados');
        $('#estatusCliente').empty();
        resultadosCliente(response.items);
    }
});
}


function resultadosCliente(items){

    $("#estatusCliente").empty();
    $("#estatusCliente").append("<table border='1'>");
    $("#estatusCliente").append("<caption>Tabla de Clientes</caption>");
    $("#estatusCliente").append("<tr><th>ID</th><th>Nombre</th><th>Email</th><th>Edad</th><th>Acciones</th></tr>");
        for (i=0; i < items.length; i++){
            $("#estatusCliente").append("<tr>");
            $("#estatusCliente").append("<td>" + items[i].id + "</td>");
            $("#estatusCliente").append("<td>" + items[i].name + "</td>");
            $("#estatusCliente").append("<td>" + items[i].email + "</td>");
            $("#estatusCliente").append("<td>" + items[i].age + "</td>");
            $("#estatusCliente").append("<td>" + '<button onclick="deleteCliente('+items[i].id+')">Borrar</button>' + "</td>");
            $("#estatusCliente").append("<td>" + '<button onclick="getClienteEspecifico('+items[i].id+')">Obtener Registro</button>' + "</td>");
            $("#estatusCliente").append("</tr>");
        };
    $("#estatusCliente").append("</table>");    
}

function saveCliente() {
var cliente = {
id: $('#idCliente').val(),
name: $('#nameCliente').val(),
email: $('#emailCliente').val(),
age: $('#ageCliente').val()
};

let datos = JSON.stringify(cliente);

$.ajax({
    url: 'https://g3fb97209b3eaaa-base1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
    type: 'POST',
    data: cliente,
    dataType: 'JSON',
    success: function(response){
        $("#estatusCliente").empty();
        $('#idCliente').val('');
        $('#nameCliente').val('');
        $('#emailCliente').val('');
        $('#ageCliente').val('');
        getCliente();
    }
});    
}

function editCliente() {
var cliente = {
id: $('#idCliente').val(),
name: $('#nameCliente').val(),
email: $('#emailCliente').val(),
age: $('#ageCliente').val(),
};

let datos = JSON.stringify(cliente);

$.ajax({
    url: 'https://g3fb97209b3eaaa-base1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
    type: 'PUT',
    data: datos,
    contentType: 'application/JSON',
    dataType: 'JSON',
    success: function(response){
        $("#estatusCliente").empty();
        $('#idCliente').val('');
        $('#nameCliente').val('');
        $('#emailCliente').val('');
        $('#ageCliente').val('');
        getCliente();
    }
});    
}

function deleteCliente(idCliente) {
var cliente = {
id:idCliente
};

let datos = JSON.stringify(cliente);

$.ajax({
    url: 'https://g3fb97209b3eaaa-base1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
    type: 'DELETE',
    data: datos,
    contentType: 'application/JSON',
    dataType: 'JSON',
    success: function(response){
        $("#estatusCliente").empty();
        getCliente();
    }
});    
}

function getClienteEspecifico(idCliente) {
$.ajax({
    url: 'https://g3fb97209b3eaaa-base1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/'+idCliente,
    type: 'GET',
    dataType: 'JSON',
    success: function(response){
        var item = response.items[0];
        $('#idCliente').val(item.id);
        $('#nameCliente').val(item.name);
        $('#emailCliente').val(item.email);
        $('#ageCliente').val(item.age);
        //getDisfraz();
    }
});    
}

/*
Funciones para guardar Mensaje 
***/

function getMensaje(){

$.ajax({
    url: 'https://g3fb97209b3eaaa-base1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
    headers:{
            'Access-Control-Allow-Origin': '*'
        },
    type: 'GET',
    dataType: 'JSON',
    success: function(response){
        //alert('Registros enviados');
        $('#estatusMensaje').empty();
        resultadosMensaje(response.items);
    }
});
}


function resultadosMensaje(items){

    $("#estatusMensaje").empty();
    $("#estatusMensaje").append("<table border='1'>");
    $("#estatusMensaje").append("<caption>Tabla de Disfraces</caption>");
    $("#estatusMensaje").append("<tr><th>ID</th><th>Mensaje</th><th>Acciones</th></tr>");
        for (i=0; i < items.length; i++){
            $("#estatusMensaje").append("<tr>");
            $("#estatusMensaje").append("<td>" + items[i].id + "</td>");
            $("#estatusMensaje").append("<td>" + items[i].messagetext + "</td>");
            $("#estatusMensaje").append("<td>" + '<button onclick="deleteMensaje('+items[i].id+')">Borrar</button>' + "</td>");
            $("#estatusMensaje").append("<td>" + '<button onclick="getMensajeEspecifico('+items[i].id+')">Obtener Registro</button>' + "</td>");
            $("#estatusMensaje").append("</tr>");
        }
    $("#estatusMensaje").append("</table>");    
}

function saveMensaje() {
var mensaje = {
id: $('#idMensaje').val(),
messagetext: $('#messagetext').val()
};

let datos = JSON.stringify(mensaje);

$.ajax({
    url: 'https://g3fb97209b3eaaa-base1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
    type: 'POST',
    data: mensaje,
    dataType: 'JSON',
    success: function(response){
        $("#estatusMensaje").empty();
        $('#idMensaje').val('');
        $('#messagetext').val('');
        getMensaje();
    }
});    
}

function editMensaje() {
var mensaje = {
id: $('#idMensaje').val(),
messagetext: $('#messagetext').val(),
};

let datos = JSON.stringify(mensaje);

$.ajax({
    url: 'https://g3fb97209b3eaaa-base1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
    type: 'PUT',
    data: datos,
    contentType: 'application/JSON',
    dataType: 'JSON',
    success: function(response){
        $("#estatusMensaje").empty();
        $('#idMensaje').val('');
        $('#messagetext').val('');
        getMensaje();
    }
});    
}

function deleteMensaje(idMensaje) {
var mensaje = {
id:idMensaje
};

let datos = JSON.stringify(mensaje);

$.ajax({
    url: 'https://g3fb97209b3eaaa-base1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
    type: 'DELETE',
    data: datos,
    contentType: 'application/JSON',
    dataType: 'JSON',
    success: function(response){
        $("#estatusMensaje").empty();
        getMensaje();
    }
});    
}

function getMensajeEspecifico(idMensaje) {
$.ajax({
    url: 'https://g3fb97209b3eaaa-base1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message/'+idMensaje,
    type: 'GET',
    dataType: 'JSON',
    success: function(response){
        var item = response.items[0];
        $('#idMensaje').val(item.id);
        $('#messagetext').val(item.messagetext);
        //getDisfraz();
    }
});    
}

