$("#contratar").submit(function(e) {

    var url = "https://naughtyhost-slave00.c9users.io/clientes"; // the script where you handle the form input.
    console.log($("#contratar").serialize());
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