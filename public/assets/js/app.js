$(document).ready(function () {
  $(function () {
    $(".change-devour").on("click", function (event) {
      var id = $(this).data("id");

      var newDevour = {
        devoured: true
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevour
      }).then(
        function () {
          console.log("You ate a burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $("#create").on("click", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var newname = $("#new-burger").val().trim();

      var newBurger = {
        name: newname
      };
      console.log(document.body.name)

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function (req) {
          console.log(req.body)
          console.log("Created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
});