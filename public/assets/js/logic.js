// WAIT FOR DOM TO LOAD
// ==================================================================
$(document).ready(() => {

    // PROCESS
    // ==============================================================
    $(".change-devour").on("click", (event) => {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevour
        };
        // SEND PUT REQUEST
        // ==========================================================
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(() => {
            console.log("changed devour to", newDevour);
            // RELOAD PAGE TO UPDATE LIST
            // ======================================================
            location.reload();
		});
	});
	
	$(".submit").on("click", (event) => {
		// PREVENTDEFAULT ON SUBMIT EVENT
        // ==========================================================
		event.preventDefault();

		var newBurger = {
			name: $("#burger-input").val().trim(),
			devoured: false
		};
		// SEND POST REQUEST
        // ==========================================================
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(() => {
			console.log("created new burger");
			// RELOAD PAGE TO UPDATE LIST
			// ======================================================
			location.reload();

		});
	});

	$(".delete-burger").on("click", (event) => {
		var id = $(this).data("id");
		// SEND DELETE REQUEST
    	// ==========================================================
		$.ajax("/api/burgers/" + id, {
			type: "DELETE"
		}).then(() => {
			console.log("deleted burger", id);
			// RELOAD PAGE TO UPDATE LIST
			// ======================================================
			location.reload();
		});
	});

});