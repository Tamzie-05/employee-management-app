document.addEventListener("click", function(e) {

    // DELETE BUTTON
    if (e.target.classList.contains("delete")) {
        let confirmDelete = confirm("Are you sure you want to delete this employee?");

        if (confirmDelete) {
            e.target.closest("tr").remove(); // removes that row
        }
    }

    // EDIT BUTTON
    if (e.target.classList.contains("edit")) {
        alert("Are you sure you want to edit?");
    }

    // DETAILS BUTTON
    if (e.target.classList.contains("details")) {
        alert("Showing employee details...");
    }

});
