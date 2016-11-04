$(document).ready(function() {
    
    var url = "http://apinaughtyhost.com/clientes";

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
                Materialize.toast(data.message, 4000)
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
            data: {"uuid": uuid, "status": "1"},
            success: function(data) {
                Materialize.toast(data.message, 3000)
                setTimeout(function() {
                     location.reload();
                  }, 3000);
            }
        });

        e.preventDefault();
    });

});



