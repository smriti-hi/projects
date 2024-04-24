$(document).ready(function () {
    $(".personal-info").fadeIn(1000);
    $(".label").hover(
      function () {
        $(this).css("color", "#11868D");
      },
      function () {
        $(this).css("color", "");
      }
    );
    $(".btn_one").click(function () {
      var firstEmptyField = null;
  
      $("input[type='text']").each(function () {
        if ($(this).val() === ""&& this.id !== "middle_name") {
          if (!firstEmptyField) {
            firstEmptyField = $(this);
          }
        }
      });
  
      if (firstEmptyField) {
        alert("Please fill in all fields!");
        firstEmptyField.focus();
      } 
      else {
        window.location.href = "educational.html";
      }
    });
  
    $("#first_name, #middle_name, #last_name, #city_name, #country, #collegename,#stream").on(
      "input",
      function () {
        var inputValue = $(this).val();
        var pattern = /^[A-Za-z\s]+$/;
        if (!pattern.test(inputValue)) {
          alert(
            "Only alphabets and spaces are allowed. Numbers and special symbols are not allowed."
          );
          $(this).val(inputValue.replace(/[^A-Za-z\s]+/g, ""));
        }
      }
    );
  
    $("#email").on("blur", function () {
      var emailValue = $(this).val();
      var emailPattern = /^[A-Za-z][A-Za-z0-9._-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      if (!emailPattern.test(emailValue)) {
          alert("Please enter a valid email address!");
          $(this).val("");
      }
  });
  $("#contact").on("input", function () {
      var contactValue = $(this).val();
      var contactPattern = /^\d{0,10}$/; 
      if (!contactPattern.test(contactValue)) {
          alert("Contact Number can have only 10 digits");
          $(this).val(contactValue.replace(/\D/g, "").substring(0, 10)); 
      }
  });
  $('#passout_year').datepicker({
    changeMonth:false,
    changeYear:true,
    showButtonPanel:true,
    dateFormat:'yy',
    onClose: function(dateText, inst) {
        var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
        $(this).datepicker('setDate', new Date(year, 1));
    }
  })
  });
  