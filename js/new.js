$("#contratar").submit(function(e) {
    var url = "https://naughtyhost-slave00.c9users.io/clientes"; // the script where you handle the form input.
    
    $.ajax({
           type: "POST",
           url: url,
           data: $("#contratar").serialize(), // serializes the form's elements.
           success: function(data)
           {
               alert(data); // show response from the php script.
           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});

$(document).keydown(function(e) {
    if (e.keyCode == 90 && e.ctrlKey) {
        $('#escondido').css('display', 'inline-block');
    }
    
    if (e.keyCode == 88 && e.ctrlKey) {
        $('#escondido').css('display', 'none');
    }
});