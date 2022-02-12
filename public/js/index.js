//jshint esversion:6
$(".form-signin").on('submit', (event) => {
    event.preventDefault();
    const name = $("#floatingFirstName").val();
    const surname = $("#floatingSurname").val();
    const email = $("#floatingEmail").val();
    $.post(
        `/signup`,
        { 'name': name, 'surname': surname, 'email': email },
        (data) => {
            if(data.result === "failure"){
                $(".result").text("A failure happen, try again!!");
            }else{
                $(".result").text("Subscribing was a Success!!");
                $("#floatingFirstName").val("");
                $("#floatingSurname").val("");
                $("#floatingEmail").val("");
            }
            $('.modal').modal('show');
        }
    );
});
$(".btn-close").on("click", (event) => {
    $('.modal').modal('hide');
});