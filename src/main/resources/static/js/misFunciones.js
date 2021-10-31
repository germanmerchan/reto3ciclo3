function traerInformacion() {

    $.ajax({
        url: "https://gadd23a8b2081af-base1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            console.log(respuesta);
           for (i=0;i<respuesta.items.length; i++)
           $("#resultado").append(respuesta.items[i]);
            pintarRespuesta(respuesta.items);


        }
    });

}
function pintarRespuesta(items){

    let myTable="<table>";
    for (i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+= "</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);

}
function guardarInformacion() {
    let myData = {
        id: $("#id").val(),
        name: $("#name").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
    };
    let dataTosend = JSON.stringify(myData);
    $.ajax({
        url: "https://gadd23a8b2081af-base1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
          
            $("#name").val("");
            $("#brand").val("");    
            $("#model").val("");
            $("#category_id").val("");
            traerInformacion();
            alert("Se ha guardado.")
        }

    });

}
function editarInformacion() {
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
  
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gadd23a8b2081af-base1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            traerInformacion();
            alert("se ha Actualizado")
           
        }
    });
}
function borrarElemento(idElemento){
    let myData={
         id:idElemento
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url: "https://gadd23a8b2081af-base1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume",
        type: "DELETE",
        data: dataTosend,
        contentType: "application/JSON",
        dataType: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
        }
    });
}

// cliente
function traerInformacionClie() {

    $.ajax({
        url: "https://gadd23a8b2081af-base1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            console.log(respuesta);
           for (i=0;i<respuesta.items.length; i++)
           $("#resultadoClie").append(respuesta.items[i]);
            pintarRespuestaClie(respuesta.items);


        }
    });

}
function pintarRespuestaClie(items){

    let myTable="<table>";
    for (i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElementoClie("+items[i].id+")'>Borrar</button>";
        myTable+= "</tr>";
    }
    myTable+="</table>";
    $("#resultadoClie").append(myTable);

}
function guardarInformacionClie() {
    let myData = {
        id:$("#idcliente").val(),
        name:$("#namecliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
       
    };
    let dataTosend = JSON.stringify(myData);
    console.log(myData);
    $.ajax({
        url: "https://gadd23a8b2081af-base1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionClie();
            alert("Se ha guardado.")
        }

    });

}
function editarInformacionClie() {
    let myData={
        id:$("#idcliente").val(),
        name:$("#namecliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
  
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gadd23a8b2081af-base1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoClie").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionClie();
            alert("se ha Actualizado")
           
        }
    });
}
function borrarElementoClie(idElemento){
    let myData={
         id:idElemento
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url: "https://gadd23a8b2081af-base1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data: dataTosend,
        contentType: "application/JSON",
        dataType: "JSON",
        success: function (respuesta) {
            $("#resultadoClie").empty();
            traerInformacionClie();
            alert("Se ha Eliminado.")
        }
    });
}

// messague


function traerInformacionMess() {

    $.ajax({
        url: "https://gadd23a8b2081af-base1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
        console.log(respuesta);
        for (i=0;i<respuesta.items.length; i++)
        $("#resultadoMess").append(respuesta.items[i]);
        pintarRespuestaMess(respuesta.items);


        }
    });

}
function pintarRespuestaMess(items){

        let myTable="<table>";
        for (i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].messagetext+"</td>";
            myTable+="<td>"+items[i].id+"</td>";
            
   ;
         myTable+="<td> <button onclick='borrarElementoMess("+items[i].id+")'>Borrar</button>";
     myTable+= "</tr>";
     }
    myTable+="</table>";
        $("#resultadoMess").append(myTable);
}
function guardarInformacionMess() {
    let myData = {
        messagetext:$("#messagetextmessage").val(),
        id:$("#idmessage").val(),
        
    };
    let dataTosend = JSON.stringify(myData);
    console.log(myData);
    $.ajax({
        url: "https://gadd23a8b2081af-base1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta) {
        $("#resultadoMess").empty();
        $("#messagetext").val("");
        $("#id").val("");
       
        traerInformacionMess();
        alert("Se ha guardado.")
        }

    });

}
function editarInformacionMess() {
    let myData={
        messagetext:$("#messagetextmessage").val(),
        id:$("#idmessage").val(),
       
  
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gadd23a8b2081af-base1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMess").empty();
            $("#messagetext").val("");
            $("#id").val("");
           
            traerInformacionMess();
            alert("se ha Actualizado")
           
        }
    });
}
function borrarElementoMess(idElemento){
    let myData={
         id:idElemento
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url: "https://gadd23a8b2081af-base1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        data: dataTosend,
        contentType: "application/JSON",
        dataType: "JSON",
        success: function (respuesta) {
            $("#resultadoMess").empty();
            traerInformacionMess();
            alert("Se ha Eliminado.")
        }
    });
}



