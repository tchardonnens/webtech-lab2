$(document).ready(function () {
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
    "Phoenix",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "San Francisco",
    "Columbus",
    "Indianapolis",
    "Fort Worth",
    "Charlotte",
    "Seattle",
    "Denver",
    "El Paso",
  ];

  $("#city").autocomplete({
    source: cities
  });
});
