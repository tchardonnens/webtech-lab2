// Function f1() changes the text in <h1>
function f1() {
  $("#myTitle").text("New Title");
}

// Function f2() changes the text in <div>
function f2() {
  $("#div1").text("New text in the div");
}

// Function f3() inserts some text after the text in <div>
function f3() {
  $("#div1").after("<p>Inserted text after the div</p>");
}

// Function f4() changes the <title> of the Web page
function f4() {
  $("head title").text("New Web Page Title");
}

// Function f5() toggles between hide() and show() the text in <div>
function f5() {
  $("#div1").toggle();
}
