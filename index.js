$(document).ready(function () {
   
    $('.personal-info').fadeIn(1000);
    $('.label').hover(
        function () {
            $(this).css('color', '#11868D');
        },
        function () {
            $(this).css('color', '');
        }
    );
    $(".btn_one").click(function () {
        var firstEmptyField = null; 
    
        $("input[type='text']").each(function () {
            if ($(this).val() === "") {
                if (!firstEmptyField) {
                    firstEmptyField = $(this); 
                }
            }
        });
    
        if (firstEmptyField) {
            alert("Please fill in all fields!");
            firstEmptyField.focus();
        } else {
            window.location.href = "guardian.html";
        }
    });
});

