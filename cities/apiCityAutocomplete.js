$(document).ready(function () {
  $("#city").autocomplete({
    source: function (request, response) {
      $.ajax({
        url: "https://api.opencagedata.com/geocode/v1/json",
        dataType: "json",
        data: {
          q: request.term,
          key: "YOUR_API_KEY", // Replace with your actual API key
          language: "en",
          limit: 10,
        },
        success: function (data) {
          response($.map(data.results, function (item) {
            return {
              label: item.formatted,
              value: item.formatted,
            };
          }));
        },
      });
    },
    minLength: 2,
  });
});
