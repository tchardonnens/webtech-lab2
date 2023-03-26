$(document).ready(function () {
  $("#loginForm").on("submit", function (event) {
    event.preventDefault();
    let login = $("#login").val();
    let password = $("#password").val();

    $.ajax({
      url: "http://localhost:8080/server_war_exploded/checkLogin", // Change this to the actual URL of your Java Servlet
      type: "POST",
      data: {
        login: login,
        password: password
      },
      success: function (response) {
        if (response === "1") {
          $("#result").text("Login successful");
        } else {
          $("#result").text("Incorrect login or password");
        }
      },
      error: function () {
        $("#result").text("Error occurred");
      }
    });
  });
});
