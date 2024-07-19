
$(document).ready(function() {
    $(".card-title").click(function() {
        $(this).closest(".card-body").find(".card-text").toggle();
    });

    $(".card-img-top").click(function() {
        var cardBody = $(this).closest(".card").find(".card-body");
        cardBody.find(".card-title, .card-text").toggle();
    });
});

 $(document).ready(function() {
            $("#conectate").click(function() {
                alert("Pronto te llegará un correo con un descuento especial");

                $("#nombreInput").val('');
                $("#emailInput").val('');
                $("#mensajeTextarea").val('');
            });
        });