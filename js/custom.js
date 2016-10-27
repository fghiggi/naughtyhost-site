$(document).ready(function() {
    
    //var url = "http://localhost:8080/naughtyhost/clientes";
    var url = "https://naughtyhost-slave00.c9users.io/clientes";

    function getData() {
        $.get(url, function(data) {
            $.each(data, function(key, value) {
                if (value.pago == 0) {
                    $(".kkk").append('<option value="'+ value.uuid +'">'+ value.host +'</option>');
                }
            });
        });
    }

    getData();

    $("#frm_contratar").submit(function(e) {
    
        $.ajax({
            type: "POST",
            url: url,
            data: $("#frm_contratar").serialize(),
            success: function(data) {
                Materialize.toast('Contratado com sucesso!', 4000)
                document.getElementById('frm_contratar').reset();
            }
        });

        e.preventDefault();
    });

    $("#frm_pagar").submit(function(e) {
    
        var uuid = $('select[name=client_id]').val();
        
        $.ajax({
            type: "PUT",
            url: url,
            data: {"uuid": uuid},
            success: function(data) {
                alert(data.message);
                location.reload();
            }
        });

        e.preventDefault();
    });

});



