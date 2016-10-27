(function($) {
    $(function() {

        $(document).ready(function() {
            $.get("https://naughtyhost-slave00.c9users.io/clientes", function(data) {
                $.each(data, function(key, value) {
                     console.log(value);
                    $(".kkk").append('<option value="'+ value.uuid +'">'+ value.host +'</option>');
                });
            });
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space