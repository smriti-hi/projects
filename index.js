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
      // var currentPage = window.location.pathname.split('/').pop();
      
      if (firstEmptyField) {
        alert("Please fill in all fields!");
        firstEmptyField.focus();
      } 
      else  {
        window.location.href = "educational.html";
      }
    });
  
    $("#first_name, #middle_name, #last_name, #city_name, #country, #collegename,#stream,#guardian-name,#profession,#counselled").on(
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
    // changeMonth:false,
    changeYear:true,
    showButtonPanel:true,
    dateFormat:'yy',
    onClose: function(dateText, inst) {
        var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
        $(this).datepicker('setDate', new Date(year, 1));
    }
  })

  $('#passout_year').focus(function () {
    $('.ui-datepicker-calendar').hide();
    $('.ui-datepicker-month').hide();
    $('.ui-datepicker-prev, .ui-datepicker-next').hide();
    $('.ui-datepicker-current').hide();
    $('#ui-datepicker-div').position({
        my: 'center top',
        at: 'center bottom',
        of: $(this)
    });
});
$(".grade-select").change(function () {
  var selectedOption = $(this).val();
  var parentDiv = $(this).closest('.input-row');
  
  // Remove any existing input fields next to the dropdown
  parentDiv.find('.additional-input').remove();

  // Add input field based on selected option
  if (selectedOption === "GPA") {
    var inputField = $('<input type="text" class="additional-input" placeholder="Enter ' + selectedOption + '">');
    inputField.css({
        'margin-top': '-20px',
        'margin-left': '15px',
        'width': '190px',
        'padding': '5px',
        // 'border': '1px solid #ccc',
        'border-radius': '5px',
        'box-sizing': 'border-box'
    });
    inputField.on("input", function () {
      var gpa = $(this).val();

      if (gpa === "") {
          return; 
      }
      if (isNaN(parseFloat(gpa)) || parseFloat(gpa) < 0 || parseFloat(gpa) > 4.0) {
          alert("Please enter a valid GPA.");
          $(this).val("");
          return;
      }
      if (gpa.length === 2 && gpa.charAt(1) !== ".") {
          alert("Please enter a valid GPA.");
          $(this).val(gpa.charAt(0)); 
      }
  });
    parentDiv.append(inputField);
}
else   if (selectedOption === "Percentage") {
  var inputField = $('<input type="text" class="additional-input" placeholder="Enter ' + selectedOption + '">');
  inputField.css({
      'margin-top': '-20px',
      'margin-left': '15px',
      'width': '190px',
      'padding': '5px',
      // 'border': '1px solid #ccc',
      'border-radius': '5px',
      'box-sizing': 'border-box'
  });
  inputField.on("input", function () {
    var inputValue = $(this).val();
    // Regular expression to match percentage format (0-100 with optional decimal)
    var percentagePattern = /^(100(?:\.0{1,2})?|\d{0,2}(?:\.\d{0,2})?)%?$/;

    if (!percentagePattern.test(inputValue)) {
     alert("invalid percentage")
     $(this).val("");
    } 
});
  parentDiv.append(inputField);
}
});

  });
  