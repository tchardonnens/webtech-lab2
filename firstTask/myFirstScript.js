function checkForm() {
  var first_name = document.getElementById("fName").value;
  var last_name = document.getElementById("lName").value;
  var birth_day = document.getElementById("bDay").value;
  var sex = document.querySelector('input[name="color"]:checked').value;
  var empty_fields = [];
  if (first_name == "") {
    empty_fields.push("First Name");
  }
  if (last_name == "") {
    empty_fields.push("Last Name");
  }
  if (birth_day == "") {
    empty_fields.push("Birth Day");
  }

  if (empty_fields.length > 0) {
    let empty_fields_string = empty_fields.toString();
    alert("Please fill following fields: " + `\n` + empty_fields_string);

  } else {
    toggleFM();
    alert("Thank you for filling the form!" + `\n` +
      "First Name: " + first_name + `\n` +
      "Last Name: " + last_name + `\n` +
      "Birth Day: " + birth_day + `\n` +
      "Sex: " + sex);
  }
}

function toggleFM() {
  var sex = document.getElementById("sex");
  if (sex.value == "male") {
    console.log("male");

    // change color of fieldset, input, legend and title
    const fieldsets = document.querySelectorAll(".fieldset");
    const inputs = document.querySelectorAll(".input");
    const legends = document.querySelectorAll(".legend");

    fieldsets.forEach(fieldset => {
      fieldset.style.color = "red";
    });
    inputs.forEach(input => {
      input.style.color = "red";
    });
    legends.forEach(legend => {
      legend.style.color = "red";
    });

    document.getElementById("title").value = "Hello Sir";
  } else {
    console.log("female")
    // change color of fieldset, input, legend and title
    const fieldsets = document.querySelectorAll(".fieldset");
    const inputs = document.querySelectorAll(".input");
    const legends = document.querySelectorAll(".legend");

    fieldsets.forEach(fieldset => {
      fieldset.style.color = "blue";
    });
    inputs.forEach(input => {
      input.style.color = "blue";
    });
    legends.forEach(legend => {
      legend.style.color = "blue";
    });

    document.getElementById("title").value = "Hello Madam";
  }
}
